import { SectionHeader } from "@/components/ui/section-header";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 text-center space-y-16">
        <SectionHeader
          title="How it works"
          description="Get started in minutes, not hours"
          titleClassName="text-4xl lg:text-5xl font-bold text-foreground"
        />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Set up your profile
            </h3>
            <p className="text-muted-foreground text-lg">
              Add your services, set your availability, and customize your
              booking page in minutes.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-chart-2 to-chart-4 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Share your link
            </h3>
            <p className="text-muted-foreground text-lg">
              Send your custom booking link to clients or embed it on your
              website.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-chart-4 to-chart-5 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              Get booked
            </h3>
            <p className="text-muted-foreground text-lg">
              Clients book directly, you get notified, and everyone stays
              organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
