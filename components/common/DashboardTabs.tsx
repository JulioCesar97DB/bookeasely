"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Search,
  Calendar,
  Heart,
  Settings,
  BookOpen,
  BarChart3,
  CalendarDays,
  Scissors,
  Clock,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "client" | "provider";

interface TabItem {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface DashboardTabsListProps {
  userType: UserType;
  className?: string;
}

export function DashboardTabsList({
  userType,
  className = "",
}: DashboardTabsListProps) {
  const clientTabs: TabItem[] = [
    { value: "search", label: "Search", icon: Search },
    { value: "bookings", label: "My Bookings", icon: Calendar },
    { value: "favorites", label: "Favorites", icon: Heart },
    { value: "history", label: "History", icon: BookOpen },
    { value: "profile", label: "Profile", icon: Settings },
  ];

  const providerTabs: TabItem[] = [
    { value: "overview", label: "Overview", icon: BarChart3 },
    { value: "calendar", label: "Calendar", icon: CalendarDays },
    { value: "services", label: "Services", icon: Scissors },
    { value: "bookings", label: "Bookings", icon: Clock },
    { value: "reviews", label: "Reviews", icon: Star },
    { value: "availability", label: "Schedule", icon: Calendar },
    { value: "profile", label: "Profile", icon: Settings },
  ];

  const tabs = userType === "client" ? clientTabs : providerTabs;

  return (
    <TooltipProvider>
      <TabsList className={`w-full h-auto p-1 ${className}`}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <Tooltip key={tab.value}>
              <TooltipTrigger asChild>
                <TabsTrigger
                  value={tab.value}
                  className={cn(
                    "flex items-center gap-2 py-3 transition-colors",
                    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden md:inline">{tab.label}</span>
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent className="md:hidden">
                {tab.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TabsList>
    </TooltipProvider>
  );
}
