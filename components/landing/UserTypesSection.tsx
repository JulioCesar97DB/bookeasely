"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/section-header";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { userTypes } from "@/constants";

export function UserTypesSection() {
  const router = useRouter();

  return (
    <section
      id="user-types"
      className="py-24 bg-gradient-to-br from-muted/20 to-chart-4/5"
    >
      <div className="container mx-auto px-4 text-center space-y-16">
        <SectionHeader
          title="Made for everyone in the service industry"
          description="Whether you're booking services or offering them, we have the perfect solution for you"
        />

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <Card
                key={index}
                className={`group relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
                  userType.popular
                    ? `${userType.borderColor} scale-105 shadow-lg`
                    : `border-border hover:${userType.borderColor}`
                } h-full flex flex-col`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                />

                {userType.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-primary to-chart-2 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 mx-auto ${userType.iconBg} rounded-2xl flex items-center justify-center ${userType.hoverIconBg} transition-colors mb-4`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${userType.iconColor}`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {userType.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {userType.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 text-left">
                    {userType.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon;
                      return (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.colors.bg}`}
                          >
                            <IconComponent
                              className={`h-4 w-4 ${feature.colors.text}`}
                            />
                          </div>
                          <span className="text-muted-foreground leading-relaxed">
                            {feature.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className={`w-full h-12 text-lg font-semibold border-2 group-hover:scale-105 transition-all duration-300 ${
                        userType.popular
                          ? "bg-gradient-to-r from-primary to-chart-2 text-primary-foreground border-primary hover:shadow-lg hover:border-primary/50"
                          : "hover:bg-muted/50 hover:border-chart-1/30 border-border"
                      }`}
                      variant={userType.popular ? "default" : "outline"}
                      onClick={() => router.push(userType.ctaRoute)}
                    >
                      {userType.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
