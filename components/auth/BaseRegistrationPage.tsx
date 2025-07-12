"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { RegistrationConfig, getIcon } from "./registration-configs";

interface BaseRegistrationPageProps {
  config: RegistrationConfig;
  children: ReactNode;
}

export default function BaseRegistrationPage({ config, children }: BaseRegistrationPageProps) {
  const router = useRouter();

  return (
    <main className={`min-h-screen ${config.backgroundGradient}`}>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => router.push(config.accountLinkType === 'dontHaveAccount' ? "/" : "/auth/register")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {config.accountLinkType === 'dontHaveAccount' ? "Back to start" : "Back to account selection"}
        </Button>

        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full space-y-8">
            <SectionHeader
              title={config.title}
              description={config.description}
            />

            <Card className={`border-2 ${config.borderColor} shadow-xl`}>
              <CardHeader className="text-center space-y-4">
                <div className={`w-16 h-16 ${config.gradientFrom} ${config.gradientTo} rounded-2xl flex items-center justify-center mx-auto`}>
                  {getIcon(config.iconName)}
                </div>
                <CardTitle className="text-2xl font-bold">{config.cardTitle}</CardTitle>
                <CardDescription>
                  {config.cardDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {children}

                {config.accountLinkType !== 'none' && (
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          {config.accountLinkType === 'alreadyHaveAccount' 
                            ? "Already have an account?"
                            : "Don't have an account?"
                          }
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => router.push(
                        config.accountLinkType === 'alreadyHaveAccount' 
                          ? "/auth/login" 
                          : "/auth/register"
                      )}
                      className="w-full"
                    >
                      {config.accountLinkType === 'alreadyHaveAccount' 
                        ? "Sign In Instead"
                        : "Create Account"
                      }
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="#" className={`${config.linkColor} hover:underline`}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className={`${config.linkColor} hover:underline`}>
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
