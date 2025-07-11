"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Settings, Calendar, TrendingUp } from "lucide-react";

interface ProviderSelectionCardProps {
  onClick: () => void;
}

export default function ProviderSelectionCard({ onClick }: ProviderSelectionCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30"
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

        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
        >
          Continue as Provider
        </Button>
      </CardContent>
    </Card>
  );
}
