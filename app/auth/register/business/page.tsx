"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ArrowLeft, Users, Eye, EyeOff, Building2, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import Image from "next/image"
import { businessCategories } from "@/constants"
import { businessRegistrationSchema, type BusinessRegistrationData } from "@/lib/validations"



export default function BusinessRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: BusinessRegistrationData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Business registration data:", data)
      // Redirect to dashboard or success page
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-1/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to account selection
        </Button>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start min-h-[calc(100vh-200px)]">
          {/* Left Side - Form (3 columns) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-chart-1 to-chart-3 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Create Business Account</h1>
                <p className="text-xl text-muted-foreground">
                  Join BookEasely with your team and manage multiple staff members
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Business Information Section */}
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-chart-1" />
                      </div>
                      Business Information
                    </h2>

                    <div className="grid gap-6">
                      {/* Business Name */}
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your business name" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Owner Name */}
                      <FormField
                        control={form.control}
                        name="ownerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Owner Name (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter owner's name" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Business Category */}
                      <FormField
                        control={form.control}
                        name="businessCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Business Category (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="Select your business category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {businessCategories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Number of Team Members */}
                      <FormField
                        control={form.control}
                        name="teamMembers"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Number of Team Members (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="How many team members?"
                                min="1"
                                max="100"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information Section */}
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-chart-3" />
                      </div>
                      Contact & Account Information
                    </h2>

                    <div className="grid gap-6">
                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter business email" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone Number */}
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter business phone number" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Password */}
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Create a password"
                                  className="h-12 pr-12"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Submit Section */}
                <Card className="shadow-lg">
                  <CardContent className="pt-8 space-y-6">
                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-base font-normal">
                              I agree to the{" "}
                              <Button variant="link" className="p-0 h-auto text-primary underline">
                                terms and conditions
                              </Button>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="w-full h-14 text-lg font-semibold"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Business Account"}
                      </Button>

                      <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Sign in
                        </Button>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </Form>
          </div>

          {/* Right Side - Large Image (2 columns) */}
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
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">Grow Your Business</h3>
                  <p className="text-muted-foreground">
                    Manage your team, streamline appointments, and scale your business with BookEasely s powerful tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
