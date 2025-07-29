import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const mockClient = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 987-6543",
  location: "New York, NY",
  avatar: "/placeholder.svg?height=100&width=100",
};

const ProfileTab = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">Profile Settings</h3>
        <p className="text-muted-foreground">Manage your account information</p>
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
              <AvatarImage src={mockClient.avatar || "/placeholder.svg"} />
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
    </>
  );
};

export default ProfileTab;
