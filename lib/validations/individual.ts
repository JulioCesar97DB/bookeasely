import { z } from "zod";
import { accountTypes } from "@/constants";

export const individualRegistrationSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    phoneNumber: z
      .string()
      .min(7, "Phone number must be at least 7 digits")
      .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
    serviceCategory: z.string().optional(),
    country: z.string().min(1, "Country is required"),
    stateProvince: z.string().optional(),
    address: z.string().optional(),
    postalCode: z.string().optional(),
    accountType: z.enum([
      accountTypes.INDIVIDUAL_FREE,
      accountTypes.INDIVIDUAL_PRO,
    ]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type IndividualRegistrationData = z.infer<
  typeof individualRegistrationSchema
>;
