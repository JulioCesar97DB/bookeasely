import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BarChart3, Clock, UserCheck, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BusinessAccountCard = () => {
  const router = useRouter();

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-chart-1/20">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-chart-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative space-y-4 pb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-chart-1 to-chart-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Users className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            Business
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Ideal for teams and companies with multiple staff
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <UserCheck className="h-4 w-4 text-chart-1" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Add and manage multiple staff
              </h4>
              <p className="text-sm text-muted-foreground">
                Invite team members and manage their profiles
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="h-4 w-4 text-chart-3" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Assign bookings to team members
              </h4>
              <p className="text-sm text-muted-foreground">
                Let clients choose staff or auto-assign appointments
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-chart-5/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <BarChart3 className="h-4 w-4 text-chart-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Business dashboard & team scheduling
              </h4>
              <p className="text-sm text-muted-foreground">
                Advanced analytics and team performance insights
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => router.push("/auth/register/business")}
          variant="outline"
          className="w-full h-12 text-lg font-semibold border-2 hover:bg-chart-1/10 hover:border-chart-1/30 group-hover:scale-105 transition-all duration-300"
          size="lg"
        >
          Continue as Business
        </Button>
      </CardContent>
    </Card>
  );
};

export default BusinessAccountCard;
