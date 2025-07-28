import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Check, RotateCcw, X } from "lucide-react";

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

const BookingsTab = () => {
    
  const handleBookingAction = (
    bookingId: number,
    action: "confirm" | "reschedule" | "cancel"
  ) => {
    console.log(`${action} booking ${bookingId}`);
  };

  return (
    <>
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
                    <h4 className="font-semibold">{request.clientName}</h4>
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
                    onClick={() => handleBookingAction(request.id, "confirm")}
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
                    onClick={() => handleBookingAction(request.id, "cancel")}
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
    </>
  );
};

export default BookingsTab;
