import { Star } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

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

const ReviewsTab = () => {
  return (
    <>
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
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ReviewsTab;
