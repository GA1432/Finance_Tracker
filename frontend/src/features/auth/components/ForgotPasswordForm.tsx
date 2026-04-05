"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";

export default function ForgotPasswordForm() {
  const { email, error, touched, submitted, isLoading, serverError, handleChange, handleBlur, handleSubmit, reset } = useForgotPassword();

  if (submitted) {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "var(--radius-full)", background: "var(--secondary-container)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <Mail size={28} style={{ color: "var(--secondary)" }} />
          </div>
          <h1 className="display-sm" style={{ marginBottom: "0.75rem" }}>Check your inbox</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "0.5rem" }}>We sent a reset link to</p>
          <p className="headline-md" style={{ color: "var(--primary)", marginBottom: "2rem" }}>{email}</p>
          <p className="body-md" style={{ color: "var(--on-surface-variant)", marginBottom: "2rem" }}>
            Didn t receive it? Check your spam folder or{" "}
            <button onClick={reset} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--primary)", fontWeight: 600, fontSize: "inherit", fontFamily: "inherit" }}>
              try again
            </button>.
          </p>
        </div>
        <Link href="/signin" className="label-lg" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--on-surface-variant)", textDecoration: "none", marginTop: "2rem" }}>
          <ArrowLeft size={16} /> Back to Sign In
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="display-sm" style={{ marginBottom: "0.5rem" }}>Forgot password?</h1>
      <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "2rem" }}>
        Enter your email and we ll send you a reset link.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="label-lg" style={{ color: "var(--on-surface)" }}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{
              border: touched && error ? "1px solid var(--error)" : touched && email ? "1px solid var(--secondary)" : "1px solid var(--outline)"
            }}
          />
          {touched && error && (
            <p className="label-md" style={{ color: "var(--error)" }}>{error}</p>
          )}
        </div>

        {serverError && (
          <p className="label-md" style={{ color: "var(--error)", textAlign: "center" }}>{serverError}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full"
          style={{ height: "2.875rem", fontSize: "0.9375rem", borderRadius: "var(--radius-md)", border: "none", cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {isLoading ? "Sending…" : "Send Reset Link"}
        </button>
      </form>

      <Link href="/signin" className="label-lg" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--on-surface-variant)", textDecoration: "none", marginTop: "2rem" }}>
        <ArrowLeft size={16} /> Back to Sign In
      </Link>
    </>
  );
}
