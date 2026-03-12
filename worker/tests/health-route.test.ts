import worker, { type Env } from '../src/index';

describe('/api/health', () => {
  const env = {
    DB: {} as D1Database,
    ENVIRONMENT: 'test',
  } as Env;

  it('returns health status and CORS headers', async () => {
    const request = new Request('https://example.com/api/health', {
      method: 'GET',
      headers: { Origin: 'https://guitar-students-live.pages.dev' },
    });

    const response = await worker.fetch(request, env);
    const payload = await response.json() as Record<string, unknown>;

    expect(response.status).toBe(200);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('https://guitar-students-live.pages.dev');
    expect(response.headers.get('X-Request-Id')).toBeTruthy();
    expect(payload.status).toBe('ok');
    expect(payload.environment).toBe('test');
    expect(typeof payload.timestamp).toBe('string');
  });

  it('returns 404 JSON for unknown route', async () => {
    const request = new Request('https://example.com/api/unknown');
    const response = await worker.fetch(request, env);
    const payload = await response.json() as Record<string, unknown>;

    expect(response.status).toBe(404);
    expect(payload.error).toBe('Not found');
    expect(response.headers.get('X-Request-Id')).toBeTruthy();
  });
});
