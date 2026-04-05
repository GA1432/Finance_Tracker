import AuthLayout from "@/components/shared/AuthLayout";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      headline="No worries."
      subtext="It happens to the best of us. We'll send you a secure link to reset your password."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
