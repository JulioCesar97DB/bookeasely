"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Calendar1, LogOut } from "lucide-react";
import { logout } from "@/app/auth/actions";

interface UserInfo {
  name: string;
  avatar?: string;
}

interface DashboardHeaderProps {
  title?: string;
  badgeText?: string;
  userInfo: UserInfo;
}

export function DashboardHeader({
  title = "BookEasely",
  badgeText = "Dashboard",
  userInfo,
}: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 hover:text-primary hover:cursor-pointer transition-colors">
            <Calendar1 />
            <h1 className="text-2xl font-bold">{title}</h1>
            <Badge variant="secondary" className="hidden sm:flex">
              {badgeText}
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
                src={userInfo.avatar || "/placeholder.svg"}
                alt={userInfo.name}
              />
              <AvatarFallback>
                {userInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
