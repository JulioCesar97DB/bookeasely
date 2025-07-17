"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  DollarSign,
  Users,
  Star,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  RotateCcw,
  User,
  Building2,
  Scissors,
} from "lucide-react";
import { DashboardHeader } from "@/components/common/DashboardHeader";
import { DashboardTabsList } from "@/components/common/DashboardTabs";
import { createClient } from "@/lib/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

// Mock data
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

const mockServices = [
  {
    id: 1,
    name: "Hair Cut & Style",
    description: "Professional haircut with styling",
    duration: 90,
    price: 85,
    category: "Hair",
    active: true,
  },
  {
    id: 2,
    name: "Hair Color",
    description: "Full hair coloring service",
    duration: 120,
    price: 120,
    category: "Hair",
    active: true,
  },
  {
    id: 3,
    name: "Beard Trim",
    description: "Professional beard trimming and shaping",
    duration: 45,
    price: 35,
    category: "Grooming",
    active: false,
  },
];

const mockBookingRequests = [
  {
    id: 1,
    clientName: "John Smith",
    service: "Hair Cut & Style",
    requestedDate: "Dec 15, 2024",
    requestedTime: "3:00 PM",
    message: "Looking for a modern style cut",
    status: "pending",
  },
  {
    id: 2,
    clientName: "Anna Johnson",
    service: "Hair Color",
    requestedDate: "Dec 16, 2024",
    requestedTime: "11:00 AM",
    message: "Want to go blonde",
    status: "pending",
  },
];

const mockReviews = [
  {
    id: 1,
    clientName: "Emma Wilson",
    rating: 5,
    comment: "Amazing service! Sarah is incredibly talented and professional.",
    service: "Hair Cut & Style",
    date: "Dec 10, 2024",
  },
  {
    id: 2,
    clientName: "Michael Brown",
    rating: 5,
    comment: "Best beard trim I've ever had. Highly recommend!",
    service: "Beard Trim",
    date: "Dec 8, 2024",
  },
  {
    id: 3,
    clientName: "Lisa Davis",
    rating: 4,
    comment: "Great color work, very happy with the results.",
    service: "Hair Color",
    date: "Dec 5, 2024",
  },
];

export default function ProviderDashboard() {
  
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  // Usamos RSC para obtener la sesión del usuario
  const [userData, setUserData] = useState<SupabaseUser | null>(null);
  
  // Usamos este hook para obtener el usuario del lado del cliente solo una vez
  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }
      
      setUserData(user);
    }
    
    loadUser();
  }, []);

  const handleBookingAction = (
    bookingId: number,
    action: "confirm" | "reschedule" | "cancel"
  ) => {
    console.log(`${action} booking ${bookingId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Header */}
      <DashboardHeader
        title="BookEasely"
        badgeText={userData?.user_metadata?.account_type || "Provider"}
      />

      <div className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          {/* Navigation Tabs */}
          <DashboardTabsList userType="provider" />

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Welcome back, {userData?.user_metadata?.first_name || userData?.user_metadata?.name?.split(" ")[0] || mockUser.name.split(" ")[0]}!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s what&apos;s happening with your {userData?.user_metadata?.account_type === "business" ? "business" : "services"} today
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Today&apos;s Bookings
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockStats.todayBookings}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +2 from yesterday
                  </p>
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
                  <div className="text-2xl font-bold">
                    ${mockStats.weeklyRevenue}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last week
                  </p>
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
                  <p className="text-xs text-muted-foreground">
                    +8% from last month
                  </p>
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
                  <div className="text-2xl font-bold">
                    {mockStats.averageRating}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    From {mockUser.totalReviews} reviews
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Bookings */}
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
                          booking.status === "confirmed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
                <CardDescription>
                  Manage your appointments and availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center border border-dashed border-border rounded-lg">
                  <div className="text-center space-y-2">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Calendar component would go here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Integration with calendar library needed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Services</h3>
                <p className="text-muted-foreground">
                  Manage your offered services
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </div>

            <div className="grid gap-6">
              {mockServices.map((service) => (
                <Card key={service.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Scissors className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-muted-foreground">
                              {service.duration} min
                            </span>
                            <span className="text-sm font-medium">
                              ${service.price}
                            </span>
                            <Badge variant="outline">{service.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch checked={service.active} />
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Booking Requests</h3>
              <p className="text-muted-foreground">
                Manage incoming booking requests
              </p>
            </div>

            <div className="space-y-4">
              {mockBookingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {request.clientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">
                            {request.clientName}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {request.service}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {request.requestedDate} at {request.requestedTime}
                          </p>
                          {request.message && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {request.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleBookingAction(request.id, "confirm")
                          }
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Confirm
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleBookingAction(request.id, "reschedule")
                          }
                        >
                          <RotateCcw className="h-4 w-4 mr-1" />
                          Reschedule
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleBookingAction(request.id, "cancel")
                          }
                        >
                          <X className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Reviews & Ratings</h3>
                <p className="text-muted-foreground">
                  See what your clients are saying
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{mockUser.rating}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(mockUser.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {mockUser.totalReviews} reviews
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {review.clientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.clientName}</h4>
                          <span className="text-sm text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <Badge variant="outline">{review.service}</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Availability Schedule</h3>
              <p className="text-muted-foreground">
                Set your working hours and days off
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Working Hours</CardTitle>
                <CardDescription>
                  Set your availability for each day of the week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Switch defaultChecked={day !== "Sunday"} />
                      <span className="font-medium w-20">{day}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Select defaultValue="09:00">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                      <span>to</span>
                      <Select defaultValue="17:00">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Profile Settings</h3>
                <p className="text-muted-foreground">
                  Manage your {mockUser.type} profile information
                </p>
              </div>
              <Button onClick={() => setIsEditingProfile(!isEditingProfile)}>
                {isEditingProfile ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {mockUser.type === "individual" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Building2 className="h-5 w-5" />
                  )}
                  {mockUser.type === "individual"
                    ? "Personal Information"
                    : "Business Information"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={mockUser.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">
                      {mockUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {isEditingProfile && (
                    <Button variant="outline">Change Photo</Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {mockUser.type === "individual"
                        ? "Full Name"
                        : "Business Name"}
                    </Label>
                    <Input
                      id="name"
                      value={
                        mockUser.type === "individual"
                          ? mockUser.name
                          : mockUser.businessName
                      }
                      disabled={!isEditingProfile}
                    />
                  </div>

                  {mockUser.type === "business" && (
                    <div className="space-y-2">
                      <Label htmlFor="owner">Owner Name</Label>
                      <Input
                        id="owner"
                        value={mockUser.name}
                        disabled={!isEditingProfile}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={mockUser.email}
                      disabled={!isEditingProfile}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={mockUser.phone}
                      disabled={!isEditingProfile}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={mockUser.location}
                      disabled={!isEditingProfile}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={mockUser.website}
                      disabled={!isEditingProfile}
                    />
                  </div>
                </div>

                {isEditingProfile && (
                  <div className="flex gap-4">
                    <Button>Save Changes</Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditingProfile(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
