"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/common/section-header";
import { pricingPlans } from "@/constants";
import { useRouter } from "next/navigation";
import {
  getFeatureIcon,
  getNavigationPath,
  getFeatureColors,
  getPlanIconColor,
} from "@/lib/utils/pricing";

export function PricingSection() {
  const router = useRouter();

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 space-y-16">
        <SectionHeader
          title="Simple, transparent pricing"
          description="Choose the plan that fits your business needs"
          titleClassName="text-4xl lg:text-5xl font-bold text-foreground"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
                  plan.popular
                    ? `${plan.borderColor} scale-105 shadow-lg`
                    : `border-border hover:${plan.borderColor}`
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradientColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                />

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-chart-2 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="relative p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto ${plan.bgColor} rounded-2xl flex items-center justify-center group-hover:${plan.hoverBgColor} transition-colors`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${getPlanIconColor(plan.name)}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1 mt-2">
                        <span className="text-4xl font-bold text-foreground">
                          {plan.price.split("/")[0]}
                        </span>
                        {plan.price.includes("/") && (
                          <span className="text-muted-foreground">
                            /{plan.price.split("/")[1]}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => {
                        const IconComponent = getFeatureIcon(feature);
                        const colors = getFeatureColors(plan.name, feature);

                        return (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${colors.bg}`}
                            >
                              <IconComponent
                                className={`h-4 w-4 ${colors.text}`}
                              />
                            </div>
                            <span className="text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => router.push(getNavigationPath(plan.name))}
                      className={`w-full h-12 text-lg font-semibold border-2 group-hover:scale-105 transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-chart-2 text-primary-foreground border-primary hover:shadow-lg hover:border-primary/50"
                          : "hover:bg-muted/50 hover:border-chart-1/30 border-border"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Individual Free"
                        ? "Get Started Free"
                        : "Start Free Trial"}
                    </Button>
                  </div>

                  {plan.name !== "Individual Free" && (
                    <p className="text-xs text-muted-foreground text-center">
                      14-day free trial • Cancel anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            All plans include unlimited bookings, customer notifications, and
            basic analytics.
          </p>
          <p className="text-sm text-muted-foreground">
            Need something custom?{" "}
            <Button variant="link" className="p-0 h-auto text-primary">
              Contact us
            </Button>{" "}
            for enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
