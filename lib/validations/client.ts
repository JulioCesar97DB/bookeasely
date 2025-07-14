import { z } from "zod";

export const clientRegistrationSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z
      .string()
      .min(7, {
        message: "Phone number must be at least 7 digits.",
      })
      .regex(/^[\d\s\-\+\(\)]+$/, {
        message: "Please enter a valid phone number.",
      }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ClientRegistrationFormData = z.infer<
  typeof clientRegistrationSchema
>;
