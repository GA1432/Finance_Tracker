import { tokenStorage } from "@/lib/token";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const token = tokenStorage.get();
  const method = options?.method ?? "GET";
  const url = `${BASE_URL}${path}`;

  console.log(`[API] ${method} ${url}`);

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    console.error(`[API] ${method} ${url} → ${res.status}`, error);
    throw new Error(error.message ?? "Request failed");
  }

  const data = await res.json() as T;
  console.log(`[API] ${method} ${url} → ${res.status}`, data);
  return data;
}

export const api = {
  get:    <T>(path: string, options?: RequestInit) =>
    request<T>(path, { method: "GET", ...options }),
  post:   <T>(path: string, body: unknown, options?: RequestInit) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body), ...options }),
  put:    <T>(path: string, body: unknown, options?: RequestInit) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body), ...options }),
  delete: <T>(path: string, options?: RequestInit) =>
    request<T>(path, { method: "DELETE", ...options }),
};
