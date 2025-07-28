import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Building2, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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

const ProfileTab = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <>
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
                {mockUser.type === "individual" ? "Full Name" : "Business Name"}
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
    </>
  );
};

export default ProfileTab;
