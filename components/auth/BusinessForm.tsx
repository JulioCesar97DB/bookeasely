"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ReusableFormField } from "@/components/common/ReusableFormField";
import { businessRegistrationSchema, type BusinessRegistrationData } from "@/lib/validations";
import { businessCategories, accountTypes, countries, getStatesProvinces } from "@/constants";
import { signupBusiness } from "@/app/auth/actions";

interface BusinessFormProps {
  buttonGradient: string;
  buttonHoverGradient: string;
  linkColor: string;
}

export default function BusinessForm({ buttonGradient, buttonHoverGradient }: BusinessFormProps) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<BusinessRegistrationData>({
    resolver: zodResolver(businessRegistrationSchema),
    defaultValues: {
      businessName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      businessCategory: "",
      teamMembers: "",
      country: "",
      stateProvince: "",
      address: "",
      postalCode: "",
      accountType: accountTypes.BUSINESS,
    },
  });

  const watchedCountry = form.watch("country");
  useEffect(() => {
    setSelectedCountry(watchedCountry);
    if (watchedCountry) {
      form.setValue("stateProvince", "");
    }
  }, [watchedCountry, form]);

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

  const onSubmit = async (data: BusinessRegistrationData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        const value = data[key as keyof BusinessRegistrationData];
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });
      
      await signupBusiness(formData);
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

        <ReusableFormField
          control={form.control}
          name="businessName"
          label="Business Name"
          placeholder="Enter your business name"
          type="input"
          required
        />

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
          placeholder="Enter business email"
          type="email"
          required
        />

        <ReusableFormField
          control={form.control}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter business phone number"
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
          name="businessCategory"
          label="Business Category (Optional)"
          placeholder="Select your business category"
          type="select"
          options={businessCategories}
        />

        <ReusableFormField
          control={form.control}
          name="teamMembers"
          label="Number of Team Members (Optional)"
          placeholder="How many team members?"
          type="number"
          min="1"
          max="100"
        />

        <div className="space-y-4 border-t pt-4">
          <h3 className="text-lg font-semibold">Business Address Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <ReusableFormField
              control={form.control}
              name="country"
              label="Country"
              placeholder="Select business country"
              type="country"
              options={countries}
              required
            />

            <ReusableFormField
              control={form.control}
              name="stateProvince"
              label="State/Province"
              placeholder="Select state/province"
              type="state-province"
              options={selectedCountry ? getStatesProvinces(selectedCountry) : []}
            />
          </div>

          <ReusableFormField
            control={form.control}
            name="address"
            label="Business Address"
            placeholder="Enter business street address"
            type="address"
          />

          <ReusableFormField
            control={form.control}
            name="postalCode"
            label="Postal Code"
            placeholder="Enter postal code"
            type="postal-code"
          />
        </div>

        <Button
          type="submit"
          className={`w-full ${buttonGradient} ${buttonHoverGradient} text-white mt-4 font-semibold py-3 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Business Account"}
        </Button>
      </form>
    </Form>
  );
}
