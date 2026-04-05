import type React from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

interface AuthLayoutProps {
  headline: string;
  subtext: string;
  bullets?: string[];
  children: React.ReactNode;
}

export default function AuthLayout({ headline, subtext, bullets, children }: AuthLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--surface)", display: "flex" }}>
      {/* Left panel */}
      <div className="gradient-sovereign" style={{ flex: "0 0 420px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-20%", width: 400, height: 400, borderRadius: "50%", background: "rgba(189,194,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-15%", width: 300, height: 300, borderRadius: "50%", background: "rgba(189,194,255,0.04)", pointerEvents: "none" }} />

        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.9rem", color: "var(--on-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Finance Tracker</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", fontWeight: 500, color: "rgba(189,194,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>The Sovereign Ledger</p>
        </div>

        <div>
          <div style={{ width: 48, height: 48, borderRadius: "var(--radius-lg)", background: "rgba(189,194,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
            <TrendingUp size={24} style={{ color: "var(--on-primary)" }} />
          </div>
          <h2 className="display-sm" style={{ color: "var(--on-primary)", marginBottom: "0.75rem" }}>{headline}</h2>
          <p className="body-lg" style={{ color: "rgba(189,194,255,0.7)", maxWidth: 280 }}>{subtext}</p>
          {bullets && (
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {bullets.map((item: string) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <CheckCircle2 size={15} style={{ color: "var(--secondary-fixed-dim)", flexShrink: 0 }} />
                  <span className="label-lg" style={{ color: "rgba(189,194,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="label-md" style={{ color: "rgba(189,194,255,0.35)" }}>© 2026 Finance Tracker</p>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", overflowY: "auto" }}>
        <div style={{ width: "100%", maxWidth: 400, paddingBlock: "2rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
