"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Star,
  Heart,
  User,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react";
import { DashboardHeader } from "@/components/common/DashboardHeader";
import { DashboardTabsList } from "@/components/common/DashboardTabs";
import { SearchTab } from "@/components/client/SearchTab";

const mockClient = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 987-6543",
  location: "New York, NY",
  avatar: "/placeholder.svg?height=100&width=100",
};

const mockBookings = [
  {
    id: 1,
    providerName: "Sarah's Hair Studio",
    providerOwner: "Sarah Johnson",
    service: "Hair Cut & Style",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    duration: "1h 30m",
    price: 85,
    status: "confirmed",
    address: "123 Main St, New York, NY",
  },
  {
    id: 2,
    providerName: "Elite Barbershop",
    providerOwner: "Mike Wilson",
    service: "Haircut",
    date: "Dec 18, 2024",
    time: "10:00 AM",
    duration: "45m",
    price: 35,
    status: "pending",
    address: "456 Oak Ave, New York, NY",
  },
  {
    id: 3,
    providerName: "Sarah's Hair Studio",
    providerOwner: "Sarah Johnson",
    service: "Hair Color",
    date: "Nov 28, 2024",
    time: "11:00 AM",
    duration: "2h",
    price: 120,
    status: "completed",
    address: "123 Main St, New York, NY",
  },
];

const mockFavorites = [
  {
    id: 1,
    name: "Sarah's Hair Studio",
    owner: "Sarah Johnson",
    rating: 4.8,
    category: "Beauty & Personal Care",
    lastVisit: "Nov 28, 2024",
  },
  {
    id: 2,
    name: "Ink Masters Tattoo",
    owner: "Alex Rivera",
    rating: 4.9,
    category: "Creative Services",
    lastVisit: "Oct 15, 2024",
  },
];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("search");

  const handleToggleFavorite = (providerId: number) => {
    console.log(`Toggle favorite for provider ${providerId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-chart-2/5 to-chart-4/10">
      {/* Header */}
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

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">My Bookings</h3>
              <p className="text-muted-foreground">
                Manage your upcoming and past appointments
              </p>
            </div>

            <div className="space-y-4">
              {mockBookings
                .filter((booking) => booking.status !== "completed")
                .map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {booking.providerName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">
                              {booking.providerName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              with {booking.providerOwner}
                            </p>
                            <p className="text-sm font-medium">
                              {booking.service}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {booking.date} at {booking.time} •{" "}
                              {booking.duration}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {booking.address}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <Badge
                            variant={
                              booking.status === "confirmed"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {booking.status}
                          </Badge>
                          <p className="font-medium">${booking.price}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              <XCircle className="h-4 w-4 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Favorite Providers</h3>
              <p className="text-muted-foreground">
                Your saved service providers
              </p>
            </div>

            <div className="grid gap-4">
              {mockFavorites.map((favorite) => (
                <Card key={favorite.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {favorite.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{favorite.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            by {favorite.owner}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{favorite.rating}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {favorite.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last visit: {favorite.lastVisit}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button>Book Again</Button>
                        <Button
                          variant="outline"
                          onClick={() => handleToggleFavorite(favorite.id)}
                        >
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Booking History</h3>
              <p className="text-muted-foreground">
                Your completed appointments
              </p>
            </div>

            <div className="space-y-4">
              {mockBookings
                .filter((booking) => booking.status === "completed")
                .map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>
                              {booking.providerName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">
                              {booking.providerName}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              with {booking.providerOwner}
                            </p>
                            <p className="text-sm font-medium">
                              {booking.service}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {booking.date} at {booking.time} •{" "}
                              {booking.duration}
                            </p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <Badge variant="outline">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                          <p className="font-medium">${booking.price}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Book Again
                            </Button>
                            <Button variant="outline" size="sm">
                              Leave Review
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Profile Settings</h3>
              <p className="text-muted-foreground">
                Manage your account information
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={mockClient.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback className="text-lg">
                      {mockClient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Photo</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={mockClient.name} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={mockClient.email} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={mockClient.phone} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" value={mockClient.location} />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
