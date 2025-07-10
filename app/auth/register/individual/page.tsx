"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function IndividualRegisterPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to account selection
        </Button>

        {/* Registration Card */}
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center mx-auto">
              <User className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Individual Registration</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="p-8 border-2 border-dashed border-border rounded-lg text-center space-y-2">
              <p className="font-medium text-foreground">Registration Form Coming Soon</p>
              <p className="text-sm text-muted-foreground">
                Individual professional registration form will be implemented here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
