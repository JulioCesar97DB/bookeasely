"use client";

import React from "react";
import { SectionHeader } from "@/components/common/section-header";
import IndividualFreeAccountCard from "@/components/auth/IndividualFreeAccountCard";
import IndividualAccountCard from "@/components/auth/IndividualAccountCard";
import BusinessAccountCard from "@/components/auth/BusinessAccountCard";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 space-y-16">
        <SectionHeader
          title="Simple, transparent pricing"
          description="Choose the plan that fits your business needs"
          titleClassName="text-4xl lg:text-5xl font-bold text-foreground"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <IndividualFreeAccountCard />
          <IndividualAccountCard />
          <BusinessAccountCard />
        </div>

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            All plans include unlimited bookings, customer notifications, and
            basic analytics.
          </p>
          <p className="text-sm text-muted-foreground">
            Need something custom?{" "}
            <button className="text-primary hover:underline">
              Contact us
            </button>{" "}
            for enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
