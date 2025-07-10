import { z } from "zod"

export const individualRegistrationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  serviceCategory: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

export type IndividualRegistrationData = z.infer<typeof individualRegistrationSchema>
