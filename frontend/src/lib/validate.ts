export function validateEmail(value: string): string {
  if (!value.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
  return "";
}

export function validateName(value: string): string {
  if (!value.trim()) return "Full name is required";
  if (value.trim().length < 2) return "Name must be at least 2 characters";
  if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return "Name can only contain letters, spaces, hyphens and apostrophes";
  return "";
}

export function validatePassword(value: string): string {
  if (!value) return "Password is required";
  if (value.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
  if (!/\d/.test(value)) return "Password must contain at least one number";
  return "";
}

export function validateConfirmPassword(password: string, confirm: string): string {
  if (!confirm) return "Please confirm your password";
  if (password !== confirm) return "Passwords don't match";
  return "";
}