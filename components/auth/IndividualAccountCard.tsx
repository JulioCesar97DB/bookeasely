import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Calendar,
  Settings,
  Bell,
  BarChart3,
  Palette,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { accountTypes } from "@/constants";

const IndividualProAccountCard = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push(
      `/auth/register/individual?type=${accountTypes.INDIVIDUAL_PRO}`
    );
  };

  return (
    <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 scale-105 shadow-lg">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
        <span className="bg-gradient-to-r from-primary to-chart-2 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
          Most Popular
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative space-y-4 pb-6 pt-10 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
          <User className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            Individual Pro
          </CardTitle>
          <div className="flex items-baseline gap-1 justify-center">
            <span className="text-3xl font-bold text-foreground">9€</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <CardDescription className="text-muted-foreground">
            For solo professionals who want more control and features
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Unlimited bookings
              </h4>
              <p className="text-sm text-muted-foreground">
                No limits on appointments per month
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Settings className="h-4 w-4 text-chart-2" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Advanced availability settings
              </h4>
              <p className="text-sm text-muted-foreground">
                Complex scheduling rules and time blocks
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bell className="h-4 w-4 text-chart-4" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                SMS & email reminders
              </h4>
              <p className="text-sm text-muted-foreground">
                Reduce no-shows with automated notifications
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Palette className="h-4 w-4 text-chart-3" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Custom booking page
              </h4>
              <p className="text-sm text-muted-foreground">
                Branded booking experience with your colors
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <BarChart3 className="h-4 w-4 text-chart-1" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Analytics dashboard
              </h4>
              <p className="text-sm text-muted-foreground">
                Track your business performance and growth
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-chart-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
          size="lg"
        >
          Start Free Trial
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          14-day free trial • Cancel anytime
        </p>
      </CardContent>
    </Card>
  );
};

export default IndividualProAccountCard;
