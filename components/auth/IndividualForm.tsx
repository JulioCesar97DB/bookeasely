"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ReusableFormField } from "@/components/common/ReusableFormField";
import { individualRegistrationSchema, type IndividualRegistrationData } from "@/lib/validations";
import { businessCategories, accountTypes } from "@/constants";

interface IndividualFormProps {
  buttonGradient: string;
  buttonHoverGradient: string;
  linkColor: string;
  accountType?: string;
}

export default function IndividualForm({ buttonGradient, buttonHoverGradient, linkColor, accountType }: IndividualFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<IndividualRegistrationData>({
    resolver: zodResolver(individualRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      serviceCategory: "",
      accountType: (accountType as "individual-free" | "individual-pro") || accountTypes.INDIVIDUAL_FREE,
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: IndividualRegistrationData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Individual registration data:", data);
      // Redirect to dashboard or success page
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ReusableFormField
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            type="input"
            required
          />

          <ReusableFormField
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            type="input"
            required
          />
        </div>

        <ReusableFormField
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          required
        />

        <ReusableFormField
          control={form.control}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number"
          type="phone"
          required
        />

        <ReusableFormField
          control={form.control}
          name="password"
          label="Password"
          placeholder="Create a password"
          type="password"
          required
        />

        <ReusableFormField
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          required
        />

        <ReusableFormField
          control={form.control}
          name="serviceCategory"
          label="Service Category (Optional)"
          placeholder="Select your service category"
          type="select"
          options={businessCategories}
        />

        <ReusableFormField
          control={form.control}
          name="agreeToTerms"
          label="I agree to the terms and conditions"
          type="checkbox"
        >
          I agree to the{" "}
          <Button
            variant="link"
            className={`p-0 h-auto ${linkColor} underline`}
          >
            terms and conditions
          </Button>
        </ReusableFormField>

        <Button
          type="submit"
          className={`w-full ${buttonGradient} ${buttonHoverGradient} text-white font-semibold py-3 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : 
            accountType === accountTypes.INDIVIDUAL_FREE 
              ? "Create Free Account" 
              : "Create Pro Account"
          }
        </Button>
      </form>
    </Form>
  );
}
