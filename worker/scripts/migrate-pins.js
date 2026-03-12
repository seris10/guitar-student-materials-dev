#!/usr/bin/env node
/**
 * migrate-pins.js
 * Re-hashes all $demo$ PINs in guitar-club-db to PBKDF2-SHA256.
 * Run from the worker directory: node scripts/migrate-pins.js
 */

const { execSync } = require('child_process');
const crypto = require('crypto');

const ITERATIONS = 10000;
const DB = 'guitar-club-db';

function hashPin(pin) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.pbkdf2Sync(pin, salt, ITERATIONS, 32, 'sha256');
  return `$pbkdf2$${ITERATIONS}$${salt.toString('base64')}$${hash.toString('base64')}`;
}

function wrangler(sql) {
  const escaped = sql.replace(/"/g, '\\"');
  const out = execSync(
    `wrangler d1 execute ${DB} --remote --json --command "${escaped}"`,
    { encoding: 'utf8' }
  );
  return JSON.parse(out);
}

console.log('Fetching users with demo hashes...');
const result = wrangler("SELECT id, username, pin_hash FROM users WHERE pin_hash LIKE '$demo$%'");
const users = result[0]?.results || [];

if (users.length === 0) {
  console.log('No demo hashes found — nothing to migrate.');
  process.exit(0);
}

console.log(`Found ${users.length} user(s) to migrate.\n`);

for (const user of users) {
  const pin = user.pin_hash.slice(6); // strip '$demo$'
  const newHash = hashPin(pin);
  // Single-quote escape: replace ' with ''
  const safeHash = newHash.replace(/'/g, "''");

  wrangler(`UPDATE users SET pin_hash = '${safeHash}' WHERE id = ${user.id}`);
  console.log(`  ✓ user ${user.id} (${user.username}) — PIN ${pin} → PBKDF2`);
}

console.log('\nMigration complete.');
