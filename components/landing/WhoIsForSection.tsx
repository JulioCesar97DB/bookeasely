import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { Scissors, Palette, Briefcase, Dumbbell } from "lucide-react";

export function WhoIsForSection() {
  return (
    <section id="who-is-for" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center space-y-16">
        <SectionHeader
          title="Perfect for professionals like you"
          description="Whether you are flying solo or managing a small team"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="pt-8 pb-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Barbers & Stylists
              </h3>
              <p className="text-muted-foreground">
                Manage cuts, colors, and client appointments with ease
              </p>
            </CardContent>
          </Card>

          <Card className="group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-1/20">
            <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-chart-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="pt-8 pb-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-chart-1/10 rounded-2xl flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                <Palette className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Tattoo Artists
              </h3>
              <p className="text-muted-foreground">
                Book consultations and tattoo sessions seamlessly
              </p>
            </CardContent>
          </Card>

          <Card className="group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="pt-8 pb-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-chart-3/10 rounded-2xl flex items-center justify-center group-hover:bg-chart-3/20 transition-colors">
                <Briefcase className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Freelancers
              </h3>
              <p className="text-muted-foreground">
                Schedule consultations and project meetings
              </p>
            </CardContent>
          </Card>

          <Card className="group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-1/20">
            <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-chart-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="pt-8 pb-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-chart-5/10 rounded-2xl flex items-center justify-center group-hover:bg-chart-5/20 transition-colors">
                <Dumbbell className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Coaches & Trainers
              </h3>
              <p className="text-muted-foreground">
                Book training sessions and track client progress
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
