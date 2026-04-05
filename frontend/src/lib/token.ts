const TOKEN_KEY = "ft_token";

export const tokenStorage = {
  get: (): string | null =>
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null,

  set: (token: string): void =>
    localStorage.setItem(TOKEN_KEY, token),

  clear: (): void =>
    localStorage.removeItem(TOKEN_KEY),
};
