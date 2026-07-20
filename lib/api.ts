/**
 * Thin fetch wrapper around the FastAPI backend (Phase 11).
 * Access token is kept in memory / passed by the caller; refresh token
 * lives in an httpOnly cookie set by the backend on /auth/login, so it
 * never touches JS on this side.
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

interface RequestOptions extends RequestInit {
  token?: string;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options;

  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    credentials: "include", // sends the refresh_token cookie
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail ?? `Request failed: ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, token?: string) => request<T>(path, { method: "GET", token }),
  post: <T>(path: string, body?: unknown, token?: string) =>
    request<T>(path, { method: "POST", body: body ? JSON.stringify(body) : undefined, token }),
  patch: <T>(path: string, body?: unknown, token?: string) =>
    request<T>(path, { method: "PATCH", body: body ? JSON.stringify(body) : undefined, token }),
  delete: <T>(path: string, token?: string) => request<T>(path, { method: "DELETE", token }),
};

// Example typed calls — extend as pages need them:
export const authApi = {
  login: (email: string, password: string) => api.post<{ access_token: string }>("/auth/login", { email, password }),
  register: (full_name: string, email: string, password: string) =>
    api.post("/auth/register", { full_name, email, password }),
};

export const opportunitiesApi = {
  search: (params: Record<string, string>, token?: string) =>
    api.get(`/opportunities?${new URLSearchParams(params).toString()}`, token),
  get: (id: string, token?: string) => api.get(`/opportunities/${id}`, token),
};
