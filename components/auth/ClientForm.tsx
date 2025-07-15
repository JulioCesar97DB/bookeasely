"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ReusableFormField } from "@/components/common/ReusableFormField";
import { clientRegistrationSchema, type ClientRegistrationFormData } from "@/lib/validations";
import { signupClient } from "@/app/auth/actions";
import { accountTypes } from "@/constants";

interface ClientFormProps {
  buttonGradient: string;
  buttonHoverGradient: string;
  linkColor: string;
}

export default function ClientForm({ buttonGradient, buttonHoverGradient }: ClientFormProps) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<ClientRegistrationFormData>({
    resolver: zodResolver(clientRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      accountType: accountTypes.CLIENT,
    },
  });

  useEffect(() => {
    const errorParam = searchParams.get('error');
    const messageParam = searchParams.get('message');
    
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
    if (messageParam) {
      setMessage(decodeURIComponent(messageParam));
    }
  }, [searchParams]);

  const onSubmit = async (data: ClientRegistrationFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('accountType', data.accountType);
      formData.append('password', data.password);
      formData.append('confirmPassword', data.confirmPassword);
      
      await signupClient(formData);
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error) {
        throw error;
      }
      
      console.error("Registration failed:", error);
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
            {error}
          </div>
        )}
        
        {message && (
          <div className="p-3 rounded-md bg-green-100 border border-green-200 text-green-700 text-sm">
            {message}
          </div>
        )}

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
          name="phone"
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

        <Button
          type="submit"
          className={`w-full ${buttonGradient} ${buttonHoverGradient} text-white mt-4 font-semibold py-3 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Client Account"}
        </Button>
      </form>
    </Form>
  );
}
