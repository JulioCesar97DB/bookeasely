"use client";

import { SectionHeader } from "@/components/common/section-header";
import IndividualFreeAccountCard from "@/components/auth/IndividualFreeAccountCard";
import IndividualProAccountCard from "@/components/auth/IndividualAccountCard";
import BusinessAccountCard from "@/components/auth/BusinessAccountCard";
import ClientAccountCard from "@/components/auth/ClientAccountCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, UserCheck, Search, Calendar, Star, Settings, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type UserType = 'client' | 'provider' | null;

export default function RegisterPage() {
  const router = useRouter();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [userType, setUserType] = useState<UserType>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-4/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => userType ? setUserType(null) : router.push("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {userType ? "Back to user type selection" : "Back to start"}
        </Button>

        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full space-y-12">
            {!userType ? (
              <>
                <SectionHeader
                  title="Create your account"
                  description="First, tell us what type of user you are"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Client Card */}
                  <Card 
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500/30 cursor-pointer"
                    onClick={() => setUserType('client')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardHeader className="relative space-y-4 pb-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <UserCheck className="h-10 w-10 text-white" />
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-foreground">
                          I&apos;m a Client
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          I want to book appointments and discover services
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="relative space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Search className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-sm text-muted-foreground">Find and book services</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-purple-600" />
                          </div>
                          <span className="text-sm text-muted-foreground">Manage your appointments</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center">
                            <Star className="h-4 w-4 text-blue-700" />
                          </div>
                          <span className="text-sm text-muted-foreground">Rate and review services</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                        Continue as Client
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Service Provider Card */}
                  <Card 
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 cursor-pointer"
                    onClick={() => setUserType('provider')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardHeader className="relative space-y-4 pb-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <Users className="h-10 w-10 text-white" />
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-foreground">
                          I&apos;m a Service Provider
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          I want to offer services and manage my business
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="relative space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Settings className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">Manage your schedule</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-chart-2/20 rounded-lg flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-chart-2" />
                          </div>
                          <span className="text-sm text-muted-foreground">Accept online bookings</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/30 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">Grow your business</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                        Continue as Provider
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : userType === 'client' ? (
              <>
                <SectionHeader
                  title="Client Account"
                  description="Perfect for booking appointments and discovering amazing services"
                />

                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <ClientAccountCard />
                  </div>
                </div>
              </>
            ) : (
              <>
                <SectionHeader
                  title="Choose your plan"
                  description="Select the plan that best fits your business needs"
                />

                <div className="hidden lg:grid lg:grid-cols-3 gap-8 pt-8">
                  <IndividualFreeAccountCard />
                  <IndividualProAccountCard />
                  <BusinessAccountCard />
                </div>

                <div className="lg:hidden pt-16">
                  <Carousel 
                    setApi={setApi}
                    className="w-full max-w-md mx-auto"
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="ml-0 pt-6 pb-4">
                      <CarouselItem className="pl-0 pr-0 flex justify-center">
                        <div className="w-full max-w-sm">
                          <IndividualFreeAccountCard />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="pl-0 pr-0 flex justify-center">
                        <div className="w-full max-w-sm">
                          <IndividualProAccountCard />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="pl-0 pr-0 flex justify-center">
                        <div className="w-full max-w-sm">
                          <BusinessAccountCard />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="-left-6" />
                    <CarouselNext className="-right-6" />
                  </Carousel>
                  
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: count }, (_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          current === index + 1 
                            ? "bg-primary scale-125" 
                            : "bg-muted hover:bg-muted-foreground/30"
                        }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground/80">
                    You can always upgrade or change your account type later
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
