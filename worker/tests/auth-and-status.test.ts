import { createSessionCookie, normalizeSongStatus } from '../src/index';

describe('normalizeSongStatus', () => {
  it('accepts canonical statuses', () => {
    expect(normalizeSongStatus('ready')).toBe('ready');
    expect(normalizeSongStatus('pending')).toBe('pending');
    expect(normalizeSongStatus('rejected')).toBe('rejected');
  });

  it('maps legacy approved to ready', () => {
    expect(normalizeSongStatus('approved')).toBe('ready');
    expect(normalizeSongStatus(' Approved ')).toBe('ready');
  });

  it('rejects invalid values', () => {
    expect(normalizeSongStatus('')).toBeNull();
    expect(normalizeSongStatus('done')).toBeNull();
    expect(normalizeSongStatus(123)).toBeNull();
    expect(normalizeSongStatus(null)).toBeNull();
  });
});

describe('createSessionCookie', () => {
  it('sets security attributes and value', () => {
    const cookie = createSessionCookie('abc123', 60);
    expect(cookie).toContain('guitarclub_session=abc123');
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('SameSite=Lax');
    expect(cookie).toContain('Max-Age=60');
    expect(cookie).toContain('Path=/');
  });
});
