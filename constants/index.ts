import { User, Users } from "lucide-react";
import { 
  Search, 
  Calendar, 
  MapPin,
  Star,
  Clock,
  Monitor,
  TrendingUp,
  BarChart3,
  Settings,
  UserCheck,
  Building
} from "lucide-react";

export const businessCategories = [
  "Barber",
  "Hair Salon",
  "Tattoo Studio",
  "Nail Artist",
  "Massage Therapist",
  "Personal Trainer",
  "Yoga Instructor",
  "Makeup Artist",
  "Photographer",
  "Therapist / Counselor",
  "Medical / Clinic",
  "Spa & Wellness",
  "Pet Groomer",
  "Coach / Consultant",
  "Cleaning Services",
  "Repair Services",
  "Language Tutor",
  "Music Teacher",
  "Driving Instructor",
  "Other",
]

export const pricingPlans = [
  {
    name: "Individual Free",
    price: "0€",
    description: "Perfect for getting started as a solo professional",
    features: [
      "1 staff member (you)",
      "Up to 50 bookings/month",
      "Basic booking page",
      "Email notifications",
    ],
    popular: false,
    icon: User,
    color: "from-green-500 to-green-600",
    bgColor: "bg-muted/30",
    hoverBgColor: "bg-muted/50",
    borderColor: "border-chart-4/20",
    gradientColor: "from-chart-4/5 to-chart-5/5",
  },
  {
    name: "Individual Pro",
    price: "9€/mo",
    description: "For solo professionals who want more control and features",
    features: [
      "Unlimited bookings",
      "Advanced availability settings",
      "SMS & email reminders",
      "Custom booking page",
      "Analytics dashboard",
    ],
    popular: true,
    icon: User,
    color: "from-primary to-chart-2",
    bgColor: "bg-primary/10",
    hoverBgColor: "bg-primary/20",
    borderColor: "border-primary/20",
    gradientColor: "from-primary/5 to-chart-2/5",
  },
  {
    name: "Business",
    price: "19€/mo",
    description: "For teams or businesses managing multiple staff and bookings",
    features: [
      "Add and manage multiple staff",
      "Assign bookings to team members",
      "Business dashboard & team scheduling",
      "Multi-location support",
    ],
    popular: false,
    icon: Users,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-muted/30",
    hoverBgColor: "bg-muted/50",
    borderColor: "border-chart-3/20",
    gradientColor: "from-chart-3/5 to-chart-1/5",
  },
];

export const accountTypes = {
  INDIVIDUAL_FREE: 'individual-free',
  INDIVIDUAL_PRO: 'individual-pro',
  BUSINESS: 'business'
} as const;

export type AccountType = typeof accountTypes[keyof typeof accountTypes];

// Plan details for account types
export const planDetails = {
  [accountTypes.INDIVIDUAL_PRO]: {
    name: "Individual Pro",
    description: "Unlock advanced features and unlimited bookings for your solo practice",
  },
  [accountTypes.INDIVIDUAL_FREE]: {
    name: "Individual Free", 
    description: "Start your journey as a solo professional with our free plan",
  },
  [accountTypes.BUSINESS]: {
    name: "Business",
    description: "Perfect for teams and businesses managing multiple staff and bookings",
  },
} as const;

export const userTypes = [
  {
    icon: Search,
    title: "For Clients",
    description: "Find and book services from trusted professionals near you",
    features: [
      {
        text: "Search local service providers",
        icon: MapPin,
        colors: { bg: "bg-primary/10", text: "text-primary" }
      },
      {
        text: "Compare reviews and pricing",
        icon: Star,
        colors: { bg: "bg-chart-2/10", text: "text-chart-2" }
      },
      {
        text: "Book appointments instantly",
        icon: Clock,
        colors: { bg: "bg-chart-3/10", text: "text-chart-3" }
      },
      {
        text: "Manage your bookings online",
        icon: Monitor,
        colors: { bg: "bg-chart-5/10", text: "text-chart-5" }
      }
    ],
    ctaText: "Find Services",
    ctaRoute: "/search",
    gradient: "from-primary/5 to-chart-2/5",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    hoverIconBg: "group-hover:bg-primary/20",
    borderColor: "border-primary/20",
    popular: false
  },
  {
    icon: Calendar,
    title: "For Individual Professionals",
    description: "Manage your appointments and grow your solo practice",
    features: [
      {
        text: "Create your professional profile",
        icon: User,
        colors: { bg: "bg-chart-1/10", text: "text-chart-1" }
      },
      {
        text: "Manage your schedule efficiently",
        icon: Calendar,
        colors: { bg: "bg-chart-4/10", text: "text-chart-4" }
      },
      {
        text: "Accept online bookings 24/7",
        icon: Clock,
        colors: { bg: "bg-primary/10", text: "text-primary" }
      },
      {
        text: "Track earnings and analytics",
        icon: TrendingUp,
        colors: { bg: "bg-chart-2/10", text: "text-chart-2" }
      }
    ],
    ctaText: "Start Your Practice",
    ctaRoute: "/auth/register/individual",
    gradient: "from-chart-1/5 to-chart-3/5",
    iconColor: "text-chart-1",
    iconBg: "bg-chart-1/10",
    hoverIconBg: "group-hover:bg-chart-1/20",
    borderColor: "border-chart-1/20",
    popular: true
  },
  {
    icon: Users,
    title: "For Businesses",
    description: "Manage teams, multiple locations, and scale your operations",
    features: [
      {
        text: "Multi-staff scheduling",
        icon: UserCheck,
        colors: { bg: "bg-chart-3/10", text: "text-chart-3" }
      },
      {
        text: "Team performance analytics",
        icon: BarChart3,
        colors: { bg: "bg-chart-5/10", text: "text-chart-5" }
      },
      {
        text: "Client management system",
        icon: Settings,
        colors: { bg: "bg-primary/10", text: "text-primary" }
      },
      {
        text: "Advanced reporting tools",
        icon: Building,
        colors: { bg: "bg-chart-1/10", text: "text-chart-1" }
      }
    ],
    ctaText: "Grow Your Business",
    ctaRoute: "/auth/register/business",
    gradient: "from-chart-3/5 to-chart-5/5",
    iconColor: "text-chart-3",
    iconBg: "bg-chart-3/10",
    hoverIconBg: "group-hover:bg-chart-3/20",
    borderColor: "border-chart-3/20",
    popular: false
  }
];