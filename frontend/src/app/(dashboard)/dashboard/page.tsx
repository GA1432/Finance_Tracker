export default function DashboardPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="display-md" style={{ marginBottom: "0.75rem" }}>Dashboard</h1>
        <p className="body-lg" style={{ color: "var(--on-surface-variant)" }}>Coming soon &mdash; you&apos;re logged in! 🎉</p>
      </div>
    </div>
  );
}
