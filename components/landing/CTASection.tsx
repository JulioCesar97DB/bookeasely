import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary via-chart-2 to-chart-4 rounded-3xl p-16 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to simplify your bookings?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of professionals who trust BookEasely to manage
            their appointments.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-white/80">
            14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
