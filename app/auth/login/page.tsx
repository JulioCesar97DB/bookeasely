"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Eye, EyeOff, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginSchema, type LoginData } from "@/lib/validations";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login data:", data);
      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "apple") => {
    setSocialLoading(provider);
    try {
      // Simulate social login
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(`${provider} login`);
      router.push("/dashboard");
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Button>

        <div className="grid lg:grid-cols-5 gap-12 items-start min-h-[calc(100vh-200px)]">
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row text-center lg:text-left space-y-6 gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-chart-2 rounded-3xl flex items-center justify-center mx-auto lg:mx-0">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Welcome back
                </h1>
                <p className="text-xl text-muted-foreground">
                  Sign in to your BookEasely account and continue managing your
                  bookings
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <Card className="shadow-lg">
                    <CardContent className="pt-8 space-y-6">
                      <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-4 w-4 text-chart-2" />
                        </div>
                        Sign In to Your Account
                      </h2>

                      <div className="grid gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter your email"
                                  className="h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium">
                                Password
                              </FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="h-12 pr-12"
                                    {...field}
                                  />
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
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

                        <div className="flex items-center justify-between">
                          <FormField
                            control={form.control}
                            name="rememberMe"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Remember me
                                </FormLabel>
                              </FormItem>
                            )}
                          />

                          <Button
                            variant="link"
                            className="p-0 h-auto text-primary text-sm"
                          >
                            Forgot password?
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg font-semibold"
                        size="lg"
                        disabled={isLoading || socialLoading !== null}
                      >
                        {isLoading ? "Signing In..." : "Sign In"}
                      </Button>

                      <div className="relative my-6">
                        <Separator />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-card px-4 text-sm text-muted-foreground">
                            Or continue with
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full h-12 text-base font-medium border-2 hover:bg-muted/50 bg-transparent"
                          onClick={() => handleSocialLogin("google")}
                          disabled={socialLoading !== null || isLoading}
                        >
                          {socialLoading === "google" ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
                              Signing in...
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                  fill="#4285F4"
                                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                  fill="#34A853"
                                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                  fill="#EA4335"
                                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                              </svg>
                              <span className="hidden sm:inline">Google</span>
                              <span className="sm:hidden">
                                Continue with Google
                              </span>
                            </div>
                          )}
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="w-full h-12 text-base font-medium border-2 hover:bg-muted/50 bg-transparent"
                          onClick={() => handleSocialLogin("apple")}
                          disabled={socialLoading !== null || isLoading}
                        >
                          {socialLoading === "apple" ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
                              Signing in...
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                              </svg>
                              <span className="hidden sm:inline">Apple</span>
                              <span className="sm:hidden">
                                Continue with Apple
                              </span>
                            </div>
                          )}
                        </Button>
                      </div>

                      <div className="text-center space-y-2 pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          Don&apos;t have an account?{" "}
                          <Link
                            href="/auth/register"
                            className="text-primary hover:underline font-medium"
                          >
                            Create account
                          </Link>
                        </p>
                        <p className="text-xs text-muted-foreground/80">
                          By signing in, you agree to our{" "}
                          <Button
                            variant="link"
                            className="p-0 h-auto text-primary underline text-xs"
                          >
                            terms and conditions
                          </Button>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </form>
              </Form>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-2 items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full h-full max-h-[900px] flex flex-col">
                <Image
                  src="/assets/calendar-agenda.jpg"
                  alt="Professional using BookEasely dashboard"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Welcome Back!
                  </h3>
                  <p className="text-muted-foreground">
                    Continue managing your appointments and growing your
                    business with BookEasely&apos;s powerful tools.
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
