"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/lib/validate";
import { authService } from "@/services/authService";
import { tokenStorage } from "@/lib/token";

type Fields = "email" | "password";
type Errors = Record<Fields, string>;
type Touched = Record<Fields, boolean>;

export function useSignIn() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" });
  const [touched, setTouched] = useState<Touched>({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function getError(field: Fields, value: string): string {
    return field === "email" ? validateEmail(value) : validatePassword(value);
  }

  function handleChange(field: Fields, value: string) {
    setServerError("");
    setForm((f) => ({ ...f, [field]: value }));
    if (touched[field]) setErrors((e) => ({ ...e, [field]: getError(field, value) }));
  }

  function handleBlur(field: Fields) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: getError(field, form[field]) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = { email: validateEmail(form.email), password: validatePassword(form.password) };
    setErrors(next);
    setTouched({ email: true, password: true });
    if (next.email || next.password) return;

    setIsLoading(true);
    setServerError("");
    try {
      const { token } = await authService.signIn(form.email, form.password);
      tokenStorage.set(token);
      router.push("/dashboard");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { form, errors, touched, isLoading, serverError, handleChange, handleBlur, handleSubmit };
}
