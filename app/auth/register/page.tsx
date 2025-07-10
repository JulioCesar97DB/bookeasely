"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  User,
  Users,
  Calendar,
  Bell,
  Settings,
  BarChart3,
  UserCheck,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-4/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <SectionHeader
          title="Create your account"
          description=" Choose the type of account that best fits your business"
        />

        {/* Account Type Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual Card */}
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

          {/* Business Card */}
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
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground/80">
            You can always upgrade or change your account type later
          </p>
        </div>
      </div>
    </main>
  );
}
