import Navbar from "@/components/shared/Navbar";
import {
  HeroSection,
  ProblemSection,
  SuperpowersSection,
  FeaturesSection,
  HowItWorksSection,
  WhoItsForSection,
  FinalCTASection,
  Footer,
} from "@/features/landing/components/LandingSections";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SuperpowersSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
