"use client";

import { SectionHeader } from "@/components/common/section-header";
import IndividualAccountCard from "@/components/auth/IndividualAccountCard";
import BusinessAccountCard from "@/components/auth/BusinessAccountCard";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-4/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <SectionHeader
          title="Create your account"
          description=" Choose the type of account that best fits your business"
        />

        {/* Account Type Selection */}
        <div className="grid md:grid-cols-2 gap-8">
          <IndividualAccountCard />

          <BusinessAccountCard />
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
