import React from "react";
import { Button } from "../ui/button";
import { Calendar, DollarSign, Plus, Star, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useUser } from "@/lib/context";

const mockUser = {
  type: "individual", // or "business"
  name: "Sarah Johnson",
  businessName: "Sarah's Hair Studio",
  email: "sarah@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  website: "www.sarahhairstudio.com",
  avatar: "/placeholder.svg?height=100&width=100",
  rating: 4.8,
  totalReviews: 127,
};

const mockStats = {
  todayBookings: 8,
  weeklyRevenue: 2450,
  monthlyBookings: 89,
  averageRating: 4.8,
};

const mockUpcomingBookings = [
  {
    id: 1,
    clientName: "Emma Wilson",
    service: "Hair Cut & Style",
    time: "10:00 AM",
    date: "Today",
    duration: "1h 30m",
    price: 85,
    status: "confirmed",
  },
  {
    id: 2,
    clientName: "Michael Brown",
    service: "Beard Trim",
    time: "2:30 PM",
    date: "Today",
    duration: "45m",
    price: 35,
    status: "confirmed",
  },
  {
    id: 3,
    clientName: "Lisa Davis",
    service: "Hair Color",
    time: "9:00 AM",
    date: "Tomorrow",
    duration: "2h",
    price: 120,
    status: "pending",
  },
];


const OverviewTab = () => {
  const { user } = useUser();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            Welcome back,{" "}
            {user?.user_metadata?.first_name ||
              user?.user_metadata?.name?.split(" ")[0] ||
              mockUser.name.split(" ")[0]}
            !
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your{" "}
            {user?.user_metadata?.account_type === "business"
              ? "business"
              : "services"}{" "}
            today
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today&apos;s Bookings
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.todayBookings}</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Weekly Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockStats.weeklyRevenue}</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Bookings
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockStats.monthlyBookings}
            </div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Rating
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.averageRating}</div>
            <p className="text-xs text-muted-foreground">
              From {mockUser.totalReviews} reviews
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardDescription>Your next appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockUpcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {booking.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{booking.clientName}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.service}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {booking.date} at {booking.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {booking.duration} • ${booking.price}
                  </p>
                </div>
                <Badge
                  variant={
                    booking.status === "confirmed" ? "default" : "secondary"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OverviewTab;
