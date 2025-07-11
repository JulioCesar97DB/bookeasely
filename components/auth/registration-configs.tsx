import { User, Users, UserCheck } from "lucide-react";
import { ReactNode } from "react";

export interface RegistrationConfig {
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
  iconName: 'userCheck' | 'user' | 'users';
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  buttonGradient: string;
  buttonHoverGradient: string;
  linkColor: string;
  backgroundGradient: string;
}

export const accountConfigs: Record<string, RegistrationConfig> = {
  client: {
    title: "Create your client account",
    description: "Book appointments easily and manage your reservations",
    cardTitle: "Client Account",
    cardDescription: "Perfect for booking and managing your appointments",
    iconName: "userCheck",
    gradientFrom: "bg-gradient-to-br from-blue-500",
    gradientTo: "to-purple-500",
    borderColor: "border-blue-500/30",
    buttonGradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    buttonHoverGradient: "hover:from-blue-500/90 hover:to-purple-500/90",
    linkColor: "text-blue-500",
    backgroundGradient: "bg-gradient-to-br from-background via-muted/20 to-blue-500/5",
  },
  individualFree: {
    title: "Create your individual free account",
    description: "Perfect for getting started as a solo professional",
    cardTitle: "Individual Free",
    cardDescription: "Perfect for getting started as a solo professional",
    iconName: "user",
    gradientFrom: "bg-gradient-to-br from-chart-4",
    gradientTo: "to-chart-5",
    borderColor: "border-chart-4/30",
    buttonGradient: "bg-gradient-to-r from-chart-4 to-chart-5",
    buttonHoverGradient: "hover:from-chart-4/90 hover:to-chart-5/90",
    linkColor: "text-chart-4",
    backgroundGradient: "bg-gradient-to-br from-background via-muted/20 to-chart-4/5",
  },
  individual: {
    title: "Create your individual pro account",
    description: "Start your freelance business and connect with clients",
    cardTitle: "Individual Pro",
    cardDescription: "Perfect for freelancers and solo service providers",
    iconName: "user",
    gradientFrom: "bg-gradient-to-br from-primary",
    gradientTo: "to-chart-2",
    borderColor: "border-primary/20",
    buttonGradient: "bg-gradient-to-r from-primary to-chart-2",
    buttonHoverGradient: "hover:from-primary/90 hover:to-chart-2/90",
    linkColor: "text-primary",
    backgroundGradient: "bg-gradient-to-br from-background via-muted/20 to-primary/5",
  },
  business: {
    title: "Create your business account",
    description: "Perfect for teams and businesses managing multiple staff and bookings",
    cardTitle: "Business Account",
    cardDescription: "Perfect for teams and businesses managing multiple staff and bookings",
    iconName: "users",
    gradientFrom: "bg-gradient-to-br from-chart-1",
    gradientTo: "to-chart-3",
    borderColor: "border-chart-1/20",
    buttonGradient: "bg-gradient-to-r from-chart-1 to-chart-3",
    buttonHoverGradient: "hover:from-chart-1/90 hover:to-chart-3/90",
    linkColor: "text-chart-1",
    backgroundGradient: "bg-gradient-to-br from-background via-muted/20 to-chart-1/5",
  },
};

export const getIcon = (iconName: string): ReactNode => {
  const icons = {
    userCheck: <UserCheck className="h-8 w-8 text-white" />,
    user: <User className="h-8 w-8 text-white" />,
    users: <Users className="h-8 w-8 text-white" />,
  };
  return icons[iconName as keyof typeof icons];
};
