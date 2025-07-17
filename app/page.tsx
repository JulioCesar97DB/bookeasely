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
    <main className="bg-background mt-6 lg:mt-0">
      <Header />
      <HeroSection />
      <UserTypesSection />
      <WhoIsForSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
