import {
  Header,
  HeroSection,
  UserTypesSection,
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
      <UserTypesSection />
      <WhoIsForSection />
      <HowItWorksSection />
      <FeaturesSection />F
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
