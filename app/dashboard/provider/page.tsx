"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DashboardHeader } from "@/components/common/DashboardHeader";
import { DashboardTabsList } from "@/components/common/DashboardTabs";
import {
  AvailabilityTab,
  BookingsTab,
  CalendarTab,
  OverviewTab,
  ProfileTab,
  ReviewsTab,
  ServicesTab,
} from "@/components/provider";

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <DashboardHeader title="BookEasely" />

      <div className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <DashboardTabsList userType="provider" />

          <TabsContent value="overview" className="space-y-6">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <CalendarTab />
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <ServicesTab />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <BookingsTab />
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <ReviewsTab />
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <AvailabilityTab />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <ProfileTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
