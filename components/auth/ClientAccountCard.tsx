"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, Search, Star, Clock, UserCheck, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function ClientAccountCard() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/auth/register/client");
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500/30">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative space-y-4 pb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
          <UserCheck className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-2">
          <CardTitle className="text-2xl font-bold text-foreground">
            Client Account
          </CardTitle>
          <div className="flex items-baseline gap-1 justify-center">
            <span className="text-3xl font-bold text-foreground">Free</span>
          </div>
          <CardDescription className="text-muted-foreground">
            Book appointments and discover amazing services
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Search className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Discover Services
              </h4>
              <p className="text-sm text-muted-foreground">
                Browse and find the perfect services near you
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Calendar className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Easy Booking</h4>
              <p className="text-sm text-muted-foreground">
                Book appointments instantly with real-time availability
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Star className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Reviews & Ratings
              </h4>
              <p className="text-sm text-muted-foreground">
                Read reviews and rate your experiences
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="h-4 w-4 text-violet-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Booking History</h4>
              <p className="text-sm text-muted-foreground">
                Keep track of all your appointments and history
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Heart className="h-4 w-4 text-pink-600" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Favorites</h4>
              <p className="text-sm text-muted-foreground">
                Save your favorite services and providers
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleGetStarted}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
        >
          Get Started as Client
        </Button>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Perfect for booking appointments and discovering services
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
