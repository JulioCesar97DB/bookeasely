"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Calendar1, LogOut } from "lucide-react";
import { logout } from "@/app/auth/actions";
import { useUser } from "@/lib/context/user-context";

interface DashboardHeaderProps {
  title?: string;
  badgeText?: string;
}

export function DashboardHeader({
  title = "BookEasely",
}: DashboardHeaderProps) {
  const { user } = useUser();

  console.log(user);

  const userName =
    `${user?.user_metadata?.firstName || ""}`.trim() ||
    user?.email?.split("@")[0];

  const getInitials = (name: string): string => {
    return (
      name
        .split(" ")
        .filter((part) => part.length > 0)
        .map((part: string) => part[0])
        .join("")
        .toUpperCase()
        .substring(0, 2) || "U"
    );
  };

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <Calendar1 />
            <h1 className="text-2xl font-bold">{title}</h1>
            <Badge
              variant="outline"
              className="hidden sm:flex capitalize text-primary"
            >
              {user?.user_metadata.account_type || "Provider"}
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.user_metadata?.avatar_url}
                alt="User Avatar"
              />
              <AvatarFallback>{getInitials(userName ?? "User")}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
