import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass ghost-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Finance Tracker
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 500, color: "var(--outline)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Know where your money goes
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/signin" className="btn-ghost label-lg">Sign In</Link>
          <Link href="/signup" className="btn-primary label-lg">Get Started Free</Link>
        </div>
      </div>
    </nav>
  );
}
