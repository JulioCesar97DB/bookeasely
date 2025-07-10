"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Calendar,
  Users,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Scissors,
  Palette,
  Briefcase,
  Dumbbell,
  Calendar1,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Calendar1 />
            <h1 className="text-2xl font-bold text-foreground">BookEasely</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>

            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex">
              Sign In
            </Button>
            <Button onClick={() => router.push("/auth/register")}>
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Booking made easy for{" "}
              <span className="text-primary">solo pros</span> and{" "}
              <span className="text-chart-2">small teams</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              The modern booking platform designed for freelancers, barbers,
              tattoo artists, and small businesses. Manage your services,
              schedule, and team all in one place.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => router.push("/auth/register")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground/80 mb-4">
                Free 14-day trial • No credit card required
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/calendar-agenda.jpg"
              alt="BookEasely Dashboard Preview"
              width={700}
              height={500}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 bg-gradient-to-br from-muted/20 to-chart-4/5">
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

      {/* How It Works Section */}
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

      {/* Features Section */}
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
            {[
              {
                icon: Calendar,
                title: "Smart Calendar",
                desc: "Sync with Google Calendar, set buffer times, and avoid double bookings automatically.",
                color: "primary",
              },
              {
                icon: Users,
                title: "Team Management",
                desc: "Add team members, set individual schedules, and let clients choose their preferred staff.",
                color: "chart-1",
              },
              {
                icon: Clock,
                title: "Custom Services",
                desc: "Set different durations, prices, and descriptions for each service you offer.",
                color: "chart-2",
              },
              {
                icon: CheckCircle,
                title: "Automated Reminders",
                desc: "Reduce no-shows with automatic email and SMS reminders sent to your clients.",
                color: "chart-3",
              },
              {
                icon: Star,
                title: "Client Reviews",
                desc: "Collect feedback and build your reputation with integrated review system.",
                color: "chart-4",
              },
              {
                icon: ArrowRight,
                title: "Easy Integration",
                desc: "Embed on your website or share your custom booking link anywhere.",
                color: "chart-5",
              },
            ].map((feature, index) => (
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

      {/* Final CTA Section */}
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

      {/* Footer */}
      <footer className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                BookEasely
              </h3>
              <p className="text-muted-foreground">
                The modern booking platform for solo professionals and small
                teams.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Product</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Integrations
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground">Support</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} BookEasely. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
