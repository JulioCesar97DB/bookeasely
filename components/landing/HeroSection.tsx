"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
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
  );
}
