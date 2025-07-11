"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Search, Calendar, Star } from "lucide-react";

interface ClientSelectionCardProps {
  onClick: () => void;
}

export default function ClientSelectionCard({ onClick }: ClientSelectionCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500/30"
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

        <Button 
          onClick={onClick}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
        >
          Continue as Client
        </Button>
      </CardContent>
    </Card>
  );
}
