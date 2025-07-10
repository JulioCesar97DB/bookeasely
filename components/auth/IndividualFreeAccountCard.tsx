"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, User, Mail, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { accountTypes } from "@/constants";

export default function IndividualFreeAccountCard() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(
      `/auth/register/individual?type=${accountTypes.INDIVIDUAL_FREE}`
    );
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-chart-4/30">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-4/5 to-chart-5/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative space-y-4 pb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-chart-4 to-chart-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
          <User className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            Individual Free
          </CardTitle>
          <div className="flex items-baseline gap-1 justify-center">
            <span className="text-3xl font-bold text-foreground">0€</span>
          </div>
          <CardDescription className="text-muted-foreground">
            Perfect for getting started as a solo professional
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <User className="h-4 w-4 text-chart-4" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                1 staff member (you)
              </h4>
              <p className="text-sm text-muted-foreground">
                Perfect for solo professionals
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-5/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Calendar className="h-4 w-4 text-chart-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Up to 50 bookings/month
              </h4>
              <p className="text-sm text-muted-foreground">
                Great to get started and test the platform
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Users className="h-4 w-4 text-chart-1" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Basic booking page
              </h4>
              <p className="text-sm text-muted-foreground">
                Simple and clean booking interface
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="h-4 w-4 text-chart-2" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Email notifications
              </h4>
              <p className="text-sm text-muted-foreground">
                Basic email reminders for appointments
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleGetStarted}
          variant="outline"
          className="w-full h-12 text-lg font-semibold border-2 hover:bg-chart-4/10 hover:border-chart-4/30 group-hover:scale-105 transition-all duration-300"
          size="lg"
        >
          Get Started Free
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          No credit card required • Upgrade anytime
        </p>
      </CardContent>
    </Card>
  );
}
