"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DashboardHeader } from "@/components/common/DashboardHeader";
import { DashboardTabsList } from "@/components/common/DashboardTabs";
import {
  BookingsTab,
  FavoritesTab,
  HistoryTab,
  ProfileTab,
  SearchTab,
} from "@/components/client";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-2/5 to-chart-4/10">
      <DashboardHeader title="BookEasely" badgeText="Client" />

      <div className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <DashboardTabsList userType="client" />

          <TabsContent value="search" className="space-y-8">
            <SearchTab />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <BookingsTab />
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <FavoritesTab />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <HistoryTab />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <ProfileTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
