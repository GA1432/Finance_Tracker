import AuthLayout from "@/components/shared/AuthLayout";
import SignUpForm from "@/features/auth/components/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout
      headline="Start your wealth journey."
      subtext="Set up in 60 seconds. Your first accurate Net Worth chart appears in under 2 minutes."
      bullets={["No credit card required", "INR only — built for India", "100% data privacy"]}
    >
      <SignUpForm />
    </AuthLayout>
  );
}
