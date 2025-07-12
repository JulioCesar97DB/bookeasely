export const accountTypes = {
  CLIENT: "client",
  INDIVIDUAL_FREE: "individual-free",
  INDIVIDUAL_PRO: "individual-pro",
  BUSINESS: "business",
} as const;

export type AccountType = (typeof accountTypes)[keyof typeof accountTypes];

// Plan details for account types
export const planDetails = {
  [accountTypes.CLIENT]: {
    name: "Client",
    description: "Book appointments and manage your reservations with ease",
  },
  [accountTypes.INDIVIDUAL_PRO]: {
    name: "Individual Pro",
    description:
      "Unlock advanced features and unlimited bookings for your solo practice",
  },
  [accountTypes.INDIVIDUAL_FREE]: {
    name: "Individual Free",
    description: "Start your journey as a solo professional with our free plan",
  },
  [accountTypes.BUSINESS]: {
    name: "Business",
    description:
      "Perfect for teams and businesses managing multiple staff and bookings",
  },
} as const;
