import Link from "next/link";
import {
  Zap, TrendingUp, BarChart2, Shield, Tag, Scissors, BookOpen, WifiOff, ArrowRight, Play, CheckCircle2,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const superpowers = [
  { number: "1", title: "Capture", desc: "Record any transaction in under 8 seconds — straight from your phone. Mobile-first, one-handed, lightning fast." },
  { number: "2", title: "Structure", desc: "Organise everything with your own accounts (Bank, UPI Wallet, Credit Card, Loan) and Indian-ready categories (Rent, Groceries, Freelance Invoice, EMI, etc.)." },
  { number: "3", title: "Compute", desc: "Your Net Worth is calculated automatically and shown as a beautiful monthly trend chart. No guesswork. Ever." },
  { number: "4", title: "Interpret", desc: 'Seven powerful reports with one-sentence plain-English insights + a recommended next action. Example: &quot;You spent ₹4,200 extra on dining this month &mdash; reduce it by ₹2,000 to hit your savings goal.&quot;' },
  { number: "5", title: "Guide", desc: "Hybrid Budget that combines zero-based + envelope + rolling methods + a non-deletable Pay Yourself First line (10–20% recommended). Finally, a budget that feels freeing, not punishing." },
];

const features = [
  { icon: Zap,      title: "Lightning Entry",       desc: "< 8 seconds per transaction. Smart recurring suggestions (never auto-posted — you confirm with one tap)." },
  { icon: Shield,   title: "Pay Yourself First",    desc: "Mandatory savings/investment line in every budget. Non-negotiable." },
  { icon: TrendingUp, title: "Net Worth Over Time", desc: "The hero chart every user opens daily." },
  { icon: BarChart2,  title: "7 Must-Have Reports", desc: "Cash Flow, Spending by Category, Income vs Expenses, Budget vs Actual, Debt Paydown, Upcoming Bills & Net Worth Trend. All with actionable insights." },
  { icon: Tag,      title: "Financial Flags",       desc: "Depreciation, Loan/Debt (EMI), Billable (freelancer), Reimbursed, Refund — so reports never lie." },
  { icon: Scissors, title: "Split Transactions",    desc: "One UPI payment → split across Groceries + Transport in seconds." },
  { icon: BookOpen, title: "Full Audit Trail",      desc: "Every change is logged. Your money story stays 100% trustworthy." },
  { icon: WifiOff,  title: "Offline First",         desc: "Add transactions without internet. Syncs safely later." },
];

const steps = [
  { step: "01", title: "Onboard in 60 seconds",    desc: "Sign up → Add 3–5 accounts with opening balances → Set your Hybrid Budget (Pay Yourself First is already there). You now have an accurate Day-1 Net Worth." },
  { step: "02", title: "Track daily in seconds",   desc: "Quick-add any income, expense or transfer. Apply categories, merchants and flags. Done." },
  { step: "03", title: "Review & act every week",  desc: "Open any report → Read the one-sentence insight → Tap the recommended action button. Watch your Net Worth curve climb." },
];

const trustSignals = [
  "Mobile-first",
  "Built for Bengaluru, Mumbai, Hyderabad, Pune",
  "100% data privacy",
  "Zero floating-point errors (we use paise)",
];

const problems = [
  "Where exactly did my money go?",
  "Am I actually living within my own rules?",
  "Is my Net Worth improving… or quietly shrinking?",
];

const footerLinks = ["Features", "Reports", "Pricing (Free for v1)", "Blog"];

// ─── Sections ──────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--primary) 0%, var(--primary-container) 60%, var(--surface) 100%)", minHeight: "92vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(189,194,255,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-8%", width: 350, height: 350, borderRadius: "50%", background: "rgba(189,194,255,0.04)", pointerEvents: "none" }} />
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="badge-neutral mb-6" style={{ background: "rgba(189,194,255,0.12)", color: "rgba(189,194,255,0.9)", border: "1px solid rgba(189,194,255,0.15)", display: "inline-flex" }}>
            <Zap size={12} />
            <span className="label-sm" style={{ color: "inherit", textTransform: "none", letterSpacing: "0.02em" }}>INR only · Single-user · Zero setup hassle</span>
          </div>
          <h1 className="display-lg stagger-1" style={{ color: "var(--on-primary)", marginBottom: "1rem" }}>Stop Guessing.<br />Start Growing.</h1>
          <p className="display-sm stagger-2" style={{ color: "rgba(189,194,255,0.85)", fontWeight: 600, marginBottom: "1.5rem" }}>See Your Real Money Story in Under 8 Seconds a Day.</p>
          <p className="body-lg stagger-3" style={{ color: "rgba(189,194,255,0.7)", maxWidth: "580px", marginBottom: "2.5rem" }}>
            The only finance app built for young Indian professionals & freelancers who live on UPI, juggle irregular income, and want to build wealth — not just budget.
            <br /><br />
            Track every rupee. Get clear Net Worth trends. Follow a flexible Hybrid Budget that actually works.
          </p>
          <div className="flex flex-wrap gap-3 items-center stagger-4" style={{ marginBottom: "2rem" }}>
            <Link href="/signup" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem", background: "var(--on-primary)", color: "var(--primary)" }}>Start Free — No Card Needed</Link>
            <button className="btn-ghost flex items-center gap-2" style={{ color: "rgba(189,194,255,0.85)", fontSize: "0.9375rem" }}>
              <Play size={16} fill="currentColor" /> Watch 47-second demo
            </button>
          </div>
          <p className="label-md stagger-5" style={{ color: "rgba(189,194,255,0.5)" }}>Takes 60 seconds. INR only. Single-user. Zero setup hassle.</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-16">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-2" style={{ background: "rgba(189,194,255,0.08)", border: "1px solid rgba(189,194,255,0.12)", borderRadius: "var(--radius-full)", padding: "0.375rem 0.875rem" }}>
              <CheckCircle2 size={13} style={{ color: "var(--secondary-fixed-dim)", flexShrink: 0 }} />
              <span className="label-md" style={{ color: "rgba(189,194,255,0.75)" }}>{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section style={{ background: "var(--surface-container-low)", padding: "6rem 1.5rem" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-sm" style={{ color: "var(--primary)", marginBottom: "1rem" }}>The Problem</p>
        <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>You already know the feeling.</h2>
        <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "2.5rem" }}>End of the month arrives and you still can&apos;t answer the three most important money questions:</p>
        <div className="flex flex-col gap-3 mb-10">
          {problems.map((q, i) => (
            <div key={i} className="kpi-card flex items-center gap-4 text-left" style={{ padding: "1.25rem 1.5rem" }}>
              <span className="display-sm" style={{ color: "var(--primary)", fontWeight: 800, minWidth: 28 }}>{i + 1}</span>
              <p className="headline-lg" style={{ color: "var(--on-surface)" }}>{q}</p>
            </div>
          ))}
        </div>
        <p className="body-lg" style={{ color: "var(--on-surface-variant)", marginBottom: "1rem" }}>Most apps make it worse: complicated budgets, endless data entry, auto-imports that feel scary, and charts that leave you with &quot;budget guilt&quot; instead of clarity.</p>
        <p className="headline-md" style={{ color: "var(--primary)", fontWeight: 700 }}>Finance Tracker was built to fix exactly that.</p>
      </div>
    </section>
  );
}

export function SuperpowersSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-sm" style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>The Solution</p>
          <h2 className="display-md">One app. Five simple superpowers.</h2>
        </div>
        <div className="flex flex-col gap-4">
          {superpowers.map((sp) => (
            <div key={sp.number} className="kpi-card flex gap-6 items-start" style={{ padding: "1.75rem 2rem" }}>
              <div style={{ minWidth: 48, height: 48, borderRadius: "var(--radius-lg)", background: "linear-gradient(135deg, var(--primary), var(--primary-container))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.125rem", color: "var(--on-primary)" }}>{sp.number}</span>
              </div>
              <div>
                <h3 className="headline-lg" style={{ marginBottom: "0.5rem" }}>{sp.title}</h3>
                <p className="body-lg" style={{ color: "var(--on-surface-variant)" }}>{sp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "var(--surface-container-low)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-sm" style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>Features</p>
          <h2 className="display-md">Built for Real Indian Life</h2>
        </div>
        <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="kpi-card" style={{ padding: "1.5rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--primary-fixed)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <Icon size={20} style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="headline-lg" style={{ marginBottom: "0.5rem" }}>{title}</h3>
              <p className="body-md" style={{ color: "var(--on-surface-variant)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-sm" style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>How It Works</p>
          <h2 className="display-md">3 simple steps</h2>
        </div>
        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 52, height: 52, borderRadius: "var(--radius-full)", background: "linear-gradient(135deg, var(--primary), var(--primary-container))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.875rem", color: "var(--on-primary)" }}>{s.step}</span>
                </div>
                {i < steps.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 40, background: "var(--outline-variant)", marginTop: 8 }} />}
              </div>
              <div className="kpi-card flex-1" style={{ padding: "1.5rem" }}>
                <h3 className="headline-lg" style={{ marginBottom: "0.5rem" }}>{s.title}</h3>
                <p className="body-lg" style={{ color: "var(--on-surface-variant)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoItsForSection() {
  return (
    <section style={{ padding: "6rem 1.5rem", background: "var(--surface-container-low)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-sm" style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>Who It&apos;s For</p>
        <h2 className="display-md" style={{ marginBottom: "2rem" }}>Made for you, if you…</h2>
        <div className="kpi-card" style={{ padding: "2rem", textAlign: "left" }}>
          {[
            "Are a young professional or freelancer in an Indian Tier-1 or Tier-2 city (25–40 years)",
            "Earn ₹50k – ₹3 lakh monthly",
            "Are a heavy UPI user with irregular cash flow",
            "Have EMIs, gadget buys, and are serious about wealth building",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3" style={{ marginBottom: "1rem" }}>
              <CheckCircle2 size={18} style={{ color: "var(--secondary)", flexShrink: 0, marginTop: 2 }} />
              <p className="body-lg" style={{ color: "var(--on-surface)" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="kpi-card-hero" style={{ margin: "4rem 1.5rem", borderRadius: "var(--radius-2xl)", padding: "5rem 2rem", textAlign: "center" }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="display-md" style={{ color: "var(--on-primary)", marginBottom: "1rem" }}>Ready to stop wondering and start winning with your money?</h2>
        <p className="body-lg" style={{ color: "rgba(189,194,255,0.8)", marginBottom: "2.5rem" }}>No credit card. No commitment.<br />Your first accurate Net Worth chart appears in under 2 minutes.</p>
        <Link href="/signup" className="btn-primary" style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem", background: "var(--on-primary)", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          Get Started Now <ArrowRight size={18} />
        </Link>
        <p className="body-md" style={{ color: "rgba(189,194,255,0.55)", marginTop: "1.25rem" }}>Join thousands of Indian professionals who finally know exactly where their money is going &mdash; and where it&apos;s growing.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--primary)", padding: "3rem 1.5rem 2rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.9rem", color: "var(--on-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Finance Tracker</p>
            <p className="body-md" style={{ color: "rgba(189,194,255,0.6)", marginTop: "0.5rem", maxWidth: 260 }}>Made with ❤️ for India&apos;s next generation of wealth builders</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="footer-link label-lg">{link}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(189,194,255,0.08)", paddingTop: "1.5rem" }}>
          <p className="body-md" style={{ color: "rgba(189,194,255,0.4)", textAlign: "center" }}>© 2026 Finance Tracker · All rights reserved · Privacy-first by design</p>
        </div>
      </div>
    </footer>
  );
}
