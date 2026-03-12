const siteUrl = (process.env.SITE_URL || "https://guitar-students-live.pages.dev").replace(/\/+$/, "");
const apiBaseUrl = (process.env.API_BASE_URL || "https://guitar-club-api.rootsofreason.workers.dev").replace(/\/+$/, "");

async function fetchWithTimeout(url) {
  return fetch(url, {
    method: "GET",
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
}

async function checkSite() {
  const response = await fetchWithTimeout(siteUrl);
  if (!response.ok) {
    throw new Error(`Site check failed with status ${response.status}`);
  }

  const body = await response.text();
  if (!body.includes("Guitar Club")) {
    throw new Error("Site check failed: expected 'Guitar Club' marker in HTML");
  }
}

async function checkApiHealth() {
  const url = `${apiBaseUrl}/api/health`;
  const response = await fetchWithTimeout(url);
  if (!response.ok) {
    throw new Error(`API health failed with status ${response.status}`);
  }

  const data = await response.json();
  if (data.status !== "ok") {
    throw new Error(`API health returned unexpected status: ${JSON.stringify(data)}`);
  }
}

async function main() {
  console.log(`Checking site uptime: ${siteUrl}`);
  await checkSite();
  console.log("Site check passed.");

  console.log(`Checking API health: ${apiBaseUrl}/api/health`);
  await checkApiHealth();
  console.log("API health check passed.");

  console.log("Uptime checks passed.");
}

main().catch((error) => {
  console.error("Uptime checks failed:", error instanceof Error ? error.message : String(error));
  process.exit(1);
});
