import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { RotateCcw, XCircle } from "lucide-react";

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

const BookingsTab = () => {
  return (
    <>
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
                      <h4 className="font-semibold">{booking.providerName}</h4>
                      <p className="text-sm text-muted-foreground">
                        with {booking.providerOwner}
                      </p>
                      <p className="text-sm font-medium">{booking.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {booking.date} at {booking.time} • {booking.duration}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {booking.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge
                      variant={
                        booking.status === "confirmed" ? "default" : "secondary"
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
    </>
  );
};

export default BookingsTab;
