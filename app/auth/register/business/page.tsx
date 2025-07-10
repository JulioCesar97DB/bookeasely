"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BusinessRegisterPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-chart-1/5 flex items-center justify-center p-4">
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
            <div className="w-16 h-16 bg-gradient-to-br from-chart-1 to-chart-3 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Business Registration</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="p-8 border-2 border-dashed border-border rounded-lg text-center space-y-2">
              <p className="font-medium text-foreground">Registration Form Coming Soon</p>
              <p className="text-sm text-muted-foreground">
                Business and team registration form will be implemented here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
