"use client";

import { SectionHeader } from "@/components/common/section-header";
import IndividualAccountCard from "@/components/auth/IndividualAccountCard";
import BusinessAccountCard from "@/components/auth/BusinessAccountCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-4/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to start
        </Button>

        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full space-y-8">
            <SectionHeader
              title="Create your account"
              description=" Choose the type of account that best fits your business"
            />

            <div className="grid md:grid-cols-2 gap-8">
              <IndividualAccountCard />

              <BusinessAccountCard />
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground/80">
                You can always upgrade or change your account type later
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
