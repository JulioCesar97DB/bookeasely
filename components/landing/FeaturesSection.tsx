import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { features } from "@/constants";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-chart-2/5 to-muted/20"
    >
      <div className="container mx-auto px-4 text-center space-y-16">
        <SectionHeader
          title="Everything you need to manage bookings"
          description="Powerful features designed for modern professionals"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                index % 2 === 0
                  ? "hover:border-primary/20"
                  : "hover:border-chart-1/20"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-primary/5 to-chart-2/5"
                    : "from-chart-1/5 to-chart-3/5"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <CardContent className="pt-8 pb-6 space-y-4">
                <feature.icon
                  className={`h-12 w-12 text-${feature.color} mx-auto`}
                />
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
