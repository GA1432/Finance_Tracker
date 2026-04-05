import AuthLayout from "@/components/shared/AuthLayout";
import SignInForm from "@/features/auth/components/SignInForm";

export default function SignInPage() {
  return (
    <AuthLayout
      headline="Welcome back."
      subtext="Your Net Worth chart is waiting. Sign in to continue your wealth journey."
    >
      <SignInForm />
    </AuthLayout>
  );
}
