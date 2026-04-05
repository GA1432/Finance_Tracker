"use client";

import Link from "next/link";
import { useSignIn } from "@/features/auth/hooks/useSignIn";

export default function SignInForm() {
  const { form, errors, touched, isLoading, serverError, handleChange, handleBlur, handleSubmit } = useSignIn();

  return (
    <>
      <h1 className="display-sm" style={{ marginBottom: "0.5rem" }}>Sign in</h1>
      <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "2rem" }}>
        Don&apos;t have an account?{" "}
        <Link href="/signup" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Create one free</Link>
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
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{
              border: touched.email && errors.email ? "1px solid var(--error)" : touched.email && form.email ? "1px solid var(--secondary)" : "1px solid var(--outline)"
            }}
          />
          {touched.email && errors.email && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="label-lg" style={{ color: "var(--on-surface)" }}>
              Password
            </label>
            <Link href="/forgot-password" className="label-md" style={{ color: "var(--primary)", textDecoration: "none" }}>
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{
              border: touched.password && errors.password ? "1px solid var(--error)" : touched.password && form.password ? "1px solid var(--secondary)" : "1px solid var(--outline)"
            }}
          />
          {touched.password && errors.password && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.password}</p>
          )}
        </div>

        {serverError && (
          <p className="label-md" style={{ color: "var(--error)", textAlign: "center" }}>{serverError}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full mt-1"
          style={{ height: "2.875rem", fontSize: "0.9375rem", borderRadius: "var(--radius-md)", border: "none", cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {isLoading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </>
  );
}
