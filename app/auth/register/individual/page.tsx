"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ArrowLeft, User, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import Image from "next/image"
import { businessCategories } from "@/constants"
import { individualRegistrationSchema, type IndividualRegistrationData } from "@/lib/validations"

export default function IndividualRegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<IndividualRegistrationData>({
    resolver: zodResolver(individualRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      serviceCategory: "",
      agreeToTerms: false,
    },
  })

  const onSubmit = async (data: IndividualRegistrationData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Individual registration data:", data)
      // Redirect to dashboard or success page
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
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
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-chart-2 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Create Individual Account</h1>
                <p className="text-xl text-muted-foreground">
                  Join BookEasely as a solo professional and start managing your bookings
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      Personal Information
                    </h2>

                    <div className="grid gap-6">
                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" className="h-12" {...field} />
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

                      {/* Phone Number */}
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" className="h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Service Category */}
                      <FormField
                        control={form.control}
                        name="serviceCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Service Category (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="Select your service category" />
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
                        {isLoading ? "Creating Account..." : "Create Individual Account"}
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full h-full max-h-[700px] flex flex-col">
                <Image
                  src="/assets/individual-account.jpg"
                  alt="Individual professional managing bookings"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Start Your Journey</h3>
                  <p className="text-muted-foreground">
                    Join thousands of professionals who trust BookEasely to manage their appointments and grow their
                    business.
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
