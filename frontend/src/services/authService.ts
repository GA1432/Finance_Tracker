import { api } from "@/lib/api/client";
import type { AuthResponse } from "@/types";

export const authService = {
  signIn: (email: string, password: string): Promise<AuthResponse> =>
    api.post("/auth/login", { email, password }),

  signUp: (name: string, email: string, password: string): Promise<AuthResponse> =>
    api.post("/auth/register", { name, email, password }),

  forgotPassword: (email: string): Promise<void> =>
    api.post("/auth/forgot-password", { email }),
};
