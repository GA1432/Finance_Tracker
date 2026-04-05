"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { useSignUp, passwordRules } from "@/features/auth/hooks/useSignUp";

export default function SignUpForm() {
  const { form, errors, touched, isLoading, serverError, handleChange, handleBlur, handleSubmit, inputBorder } = useSignUp();

  return (
    <>
      <h1 className="display-sm" style={{ marginBottom: "0.5rem" }}>Create account</h1>
      <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "2rem" }}>
        Already have an account?{" "}
        <Link href="/signin" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="label-lg" style={{ color: "var(--on-surface)" }}>
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Arjun Sharma"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{ borderColor: inputBorder("name") }}
          />
          {touched.name && errors.name && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.name}</p>
          )}
        </div>

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
            style={{ borderColor: inputBorder("email") }}
          />
          {touched.email && errors.email && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="label-lg" style={{ color: "var(--on-surface)" }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{ borderColor: inputBorder("password") }}
          />
          {touched.password && errors.password && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.password}</p>
          )}
          {form.password.length > 0 && (
            <div className="flex flex-col gap-1 mt-1">
              {passwordRules.map(({ label, test }) => {
                const passed = test(form.password);
                return (
                  <div key={label} className="flex items-center gap-2">
                    {passed
                      ? <CheckCircle2 size={13} style={{ color: "var(--secondary)" }} />
                      : <Circle size={13} style={{ color: "var(--outline)" }} />
                    }
                    <span className="label-md" style={{ color: passed ? "var(--secondary)" : "var(--outline)" }}>{label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="confirm" className="label-lg" style={{ color: "var(--on-surface)" }}>
            Confirm password
          </label>
          <input
            id="confirm"
            type="password"
            placeholder="••••••••"
            value={form.confirm}
            onChange={(e) => handleChange("confirm", e.target.value)}
            onBlur={() => handleBlur("confirm")}
            className="input-sovereign rounded-md h-auto py-3.5 px-4 text-sm"
            style={{ borderColor: inputBorder("confirm") }}
          />
          {touched.confirm && errors.confirm && (
            <p className="label-md" style={{ color: "var(--error)" }}>{errors.confirm}</p>
          )}
          {touched.confirm && !errors.confirm && form.confirm && (
            <p className="label-md" style={{ color: "var(--secondary)" }}>Passwords match ✓</p>
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
          {isLoading ? "Creating account…" : "Create Account &mdash; It&apos;s Free"}
        </button>

        <p className="label-md" style={{ color: "var(--outline)", textAlign: "center" }}>
          By signing up you agree to our{" "}
          <a href="#" style={{ color: "var(--primary)", textDecoration: "none" }}>Terms</a>
          {" "}and{" "}
          <a href="#" style={{ color: "var(--primary)", textDecoration: "none" }}>Privacy Policy</a>
        </p>
      </form>
    </>
  );
}