"use client";

import { useState } from "react";
import { validateEmail } from "@/lib/validate";
import { authService } from "@/services/authService";

export function useForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  function handleChange(value: string) {
    setServerError("");
    setEmail(value);
    if (touched) setError(validateEmail(value));
  }

  function handleBlur() {
    setTouched(true);
    setError(validateEmail(email));
  }

  function reset() {
    setSubmitted(false);
    setTouched(false);
    setError("");
    setServerError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateEmail(email);
    setError(err);
    setTouched(true);
    if (err) return;

    setIsLoading(true);
    setServerError("");
    try {
      await authService.forgotPassword(email);
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { email, error, touched, submitted, isLoading, serverError, handleChange, handleBlur, handleSubmit, reset };
}
