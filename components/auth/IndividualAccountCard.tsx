import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Bell, Calendar, Settings, User } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const IndividualAccountCard = () => {
  const router = useRouter();

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative space-y-4 pb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <User className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            Individual
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Perfect for solo professionals and freelancers
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
                Manage your own bookings
              </h4>
              <p className="text-sm text-muted-foreground">
                Complete control over your schedule and appointments
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Settings className="h-4 w-4 text-chart-2" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Customize services & availability
              </h4>
              <p className="text-sm text-muted-foreground">
                Set your own prices, durations, and working hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bell className="h-4 w-4 text-chart-4" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Get notified about appointments
              </h4>
              <p className="text-sm text-muted-foreground">
                Instant notifications for new bookings and changes
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => router.push("/auth/register/individual")}
          className="w-full h-12 text-lg font-semibold group-hover:scale-105 transition-transform duration-300"
          size="lg"
        >
          Continue as Individual
        </Button>
      </CardContent>
    </Card>
  );
};

export default IndividualAccountCard;
