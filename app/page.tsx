import {
  Header,
  HeroSection,
  WhoIsForSection,
  HowItWorksSection,
  FeaturesSection,
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
      <CTASection />
      <Footer />
    </main>
  );
}
