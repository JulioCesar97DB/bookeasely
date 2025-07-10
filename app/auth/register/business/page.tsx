"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ArrowLeft, Users, Building2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";
import { businessCategories, accountTypes } from "@/constants";
import {
  businessRegistrationSchema,
  type BusinessRegistrationData,
} from "@/lib/validations";
import { ReusableFormField } from "@/components/common/ReusableFormField";
import { SectionHeader } from "@/components/common/section-header";

export default function BusinessRegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<BusinessRegistrationData>({
    resolver: zodResolver(businessRegistrationSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      email: "",
      password: "",
      phoneNumber: "",
      businessCategory: "",
      teamMembers: "",
      accountType: accountTypes.BUSINESS,
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: BusinessRegistrationData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Business registration data:", data);
      // Redirect to dashboard or success page
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-1/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to account selection
        </Button>

        <div className="grid lg:grid-cols-5 gap-12 items-start min-h-[calc(100vh-200px)]">
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row text-center lg:text-left space-y-6 gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-chart-1 to-chart-3 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                <Users className="h-10 w-10 text-white" />
              </div>

              <SectionHeader
                title="Create Business Account"
                description="Join BookEasely with your team and manage multiple staff members"
                className="text-center lg:text-left"
              />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-chart-1" />
                      </div>
                      Business Information
                    </h2>

                    <div className="grid gap-6">
                      <ReusableFormField
                        control={form.control}
                        name="businessName"
                        label="Business Name"
                        placeholder="Enter your business name"
                        type="input"
                        required
                      />

                      <ReusableFormField
                        control={form.control}
                        name="ownerName"
                        label="Owner Name (Optional)"
                        placeholder="Enter owner's name"
                        type="input"
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-chart-3" />
                      </div>
                      Contact & Account Information
                    </h2>

                    <div className="grid gap-6">
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
                        type="input"
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
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="pt-8 space-y-6">
                    <ReusableFormField
                      control={form.control}
                      name="agreeToTerms"
                      label="I agree to the terms and conditions"
                      type="checkbox"
                    >
                      I agree to the{" "}
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary underline"
                      >
                        terms and conditions
                      </Button>
                    </ReusableFormField>

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="w-full h-14 text-lg font-semibold"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? "Creating Account..."
                          : "Create Business Account"}
                      </Button>

                      <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary"
                        >
                          Sign in
                        </Button>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>

          <div className="hidden lg:flex lg:col-span-2 items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-3/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full h-full max-h-[700px] flex flex-col">
                <Image
                  src="/assets/business-account.jpg"
                  alt="Business team managing appointments"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    Grow Your Business
                  </h3>
                  <p className="text-muted-foreground">
                    Manage your team, streamline appointments, and scale your
                    business with BookEasely s powerful tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
