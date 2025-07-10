import React from "react";
import {
  User,
  Calendar,
  Mail,
  Users,
  Settings,
  Bell,
  BarChart3,
  Palette,
  UserCheck,
  Clock,
} from "lucide-react";
import { accountTypes } from "@/constants";

/**
 * Maps feature descriptions to their corresponding icons
 * @param feature - The feature description string
 * @returns The corresponding icon component
 */
export const getFeatureIcon = (feature: string) => {
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    "1 staff member (you)": User,
    "Up to 50 bookings/month": Calendar,
    "Basic booking page": Users,
    "Email notifications": Mail,

    "Unlimited bookings": Calendar,
    "Advanced availability settings": Settings,
    "SMS & email reminders": Bell,
    "Custom booking page": Palette,
    "Analytics dashboard": BarChart3,

    "Add and manage multiple staff": UserCheck,
    "Assign bookings to team members": Clock,
    "Business dashboard & team scheduling": BarChart3,
    "Multi-location support": Users,
  };

  const IconComponent = iconMap[feature] || Users;
  return IconComponent;
};

/**
 * Gets the navigation path for a pricing plan
 * @param planName - The name of the pricing plan
 * @returns The corresponding navigation path
 */
export const getNavigationPath = (planName: string) => {
  switch (planName) {
    case "Individual Free":
      return `/auth/register/individual?type=${accountTypes.INDIVIDUAL_FREE}`;
    case "Individual Pro":
      return `/auth/register/individual?type=${accountTypes.INDIVIDUAL_PRO}`;
    case "Business":
      return `/auth/register/business?type=${accountTypes.BUSINESS}`;
    default:
      return "/auth/register";
  }
};

/**
 * Gets the background and text color classes for feature icons
 * @param planName - The name of the pricing plan
 * @param feature - The feature description string
 * @returns Object with background and text color classes
 */
export const getFeatureColors = (planName: string, feature: string) => {
  const colorMaps: Record<
    string,
    Record<string, { bg: string; text: string }>
  > = {
    "Individual Free": {
      "1 staff member (you)": { bg: "bg-chart-4/10", text: "text-chart-4" },
      "Up to 50 bookings/month": { bg: "bg-chart-2/10", text: "text-chart-2" },
      "Basic booking page": { bg: "bg-chart-3/10", text: "text-chart-3" },
      "Email notifications": { bg: "bg-chart-5/10", text: "text-chart-5" },
    },
    "Individual Pro": {
      "Unlimited bookings": { bg: "bg-primary/10", text: "text-primary" },
      "Advanced availability settings": {
        bg: "bg-chart-2/10",
        text: "text-chart-2",
      },
      "SMS & email reminders": { bg: "bg-chart-4/10", text: "text-chart-4" },
      "Custom booking page": { bg: "bg-chart-3/10", text: "text-chart-3" },
      "Analytics dashboard": { bg: "bg-chart-1/10", text: "text-chart-1" },
    },
    Business: {
      "Add and manage multiple staff": {
        bg: "bg-chart-1/10",
        text: "text-chart-1",
      },
      "Assign bookings to team members": {
        bg: "bg-chart-3/10",
        text: "text-chart-3",
      },
      "Business dashboard & team scheduling": {
        bg: "bg-chart-5/10",
        text: "text-chart-5",
      },
      "Multi-location support": { bg: "bg-primary/10", text: "text-primary" },
    },
  };

  const planColors = colorMaps[planName];
  return planColors?.[feature] || { bg: "bg-chart-1/10", text: "text-chart-1" };
};

export const getPlanIconColor = (planName: string) => {
  const iconColors: Record<string, string> = {
    "Individual Free": "text-chart-4",
    "Individual Pro": "text-primary",
    Business: "text-chart-3",
  };

  return iconColors[planName] || "text-primary";
};
