import {
  Header,
  HeroSection,
  WhoIsForSection,
  HowItWorksSection,
  FeaturesSection,
  PricingSection,
  CTASection,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <WhoIsForSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
