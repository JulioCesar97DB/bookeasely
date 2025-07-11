"use client";

import { SectionHeader } from "@/components/common/section-header";
import IndividualFreeAccountCard from "@/components/auth/IndividualFreeAccountCard";
import IndividualProAccountCard from "@/components/auth/IndividualAccountCard";
import BusinessAccountCard from "@/components/auth/BusinessAccountCard";
import ClientAccountCard from "@/components/auth/ClientAccountCard";
import ClientSelectionCard from "@/components/auth/ClientSelectionCard";
import ProviderSelectionCard from "@/components/auth/ProviderSelectionCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

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
                  <ClientSelectionCard onClick={() => setUserType('client')} />
                  <ProviderSelectionCard onClick={() => setUserType('provider')} />
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
