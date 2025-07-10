import { z } from "zod"

export const businessRegistrationSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  ownerName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  businessCategory: z.string().optional(),
  teamMembers: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

export type BusinessRegistrationData = z.infer<typeof businessRegistrationSchema>
