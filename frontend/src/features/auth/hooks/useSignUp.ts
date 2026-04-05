"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from "@/lib/validate";
import { authService } from "@/services/authService";
import { tokenStorage } from "@/lib/token";

type Fields = "name" | "email" | "password" | "confirm";
type Errors = Record<Fields, string>;
type Touched = Record<Fields, boolean>;

export const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter",  test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number",            test: (p: string) => /\d/.test(p) },
];

export function useSignUp() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Errors>({ name: "", email: "", password: "", confirm: "" });
  const [touched, setTouched] = useState<Touched>({ name: false, email: false, password: false, confirm: false });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function getError(field: Fields, value: string): string {
    switch (field) {
      case "name":     return validateName(value);
      case "email":    return validateEmail(value);
      case "password": return validatePassword(value);
      case "confirm":  return validateConfirmPassword(form.password, value);
    }
  }

  function handleChange(field: Fields, value: string) {
    setServerError("");
    setForm((f) => ({ ...f, [field]: value }));
    if (touched[field]) setErrors((e) => ({ ...e, [field]: getError(field, value) }));
    if (field === "password" && touched.confirm) {
      setErrors((e) => ({ ...e, confirm: validateConfirmPassword(value, form.confirm) }));
    }
  }

  function handleBlur(field: Fields) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: getError(field, form[field]) }));
  }

  function inputBorder(field: Fields): string | undefined {
    return touched[field] ? (errors[field] ? "var(--error)" : "var(--secondary)") : undefined;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {
      name:     validateName(form.name),
      email:    validateEmail(form.email),
      password: validatePassword(form.password),
      confirm:  validateConfirmPassword(form.password, form.confirm),
    };
    setErrors(next);
    setTouched({ name: true, email: true, password: true, confirm: true });

    // Fixed: Explicitly check for actual error messages
    if (Object.values(next).some(err => err !== "")) {
      console.warn("[SignUp] Validation failed: ", next);
      return;
    }

    setIsLoading(true);
    setServerError("");
    console.log("[SignUp] Submitting registration for: ", form.email);
    try {
      const { token } = await authService.signUp(form.name, form.email, form.password);
      console.log("[SignUp] Registration successful, token received");
      tokenStorage.set(token);
      router.push("/dashboard");
    } catch (err) {
      console.error("[SignUp] Registration failed: ", err instanceof Error ? err.message : err);
      setServerError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { form, errors, touched, isLoading, serverError, handleChange, handleBlur, handleSubmit, inputBorder };
}