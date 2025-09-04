"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Phone, Lock } from "lucide-react"
import NextLink from "next/link"

export default function FarmerLogin() {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AgriCarbon MRV</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back, Farmer</h1>
          <p className="text-muted-foreground">Sign in to manage your carbon credits</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your farmer dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              <Button
                variant={loginMethod === "phone" ? "default" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => setLoginMethod("phone")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Phone
              </Button>
              <Button
                variant={loginMethod === "email" ? "default" : "ghost"}
                size="sm"
                className="flex-1"
                onClick={() => setLoginMethod("email")}
              >
                Email
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="identifier">{loginMethod === "phone" ? "Phone Number" : "Email Address"}</Label>
              <Input
                id="identifier"
                type={loginMethod === "phone" ? "tel" : "email"}
                placeholder={loginMethod === "phone" ? "+91 98765 43210" : "farmer@example.com"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>

            <Button className="w-full" asChild>
              <NextLink href="/farmer">
                <Lock className="h-4 w-4 mr-2" />
                Sign In
              </NextLink>
            </Button>

            <div className="text-center">
              <NextLink href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Forgot your password?
              </NextLink>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Don't have an account?</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <NextLink href="/farmer/signup">Create Farmer Account</NextLink>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <NextLink href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </NextLink>
        </div>
      </div>
    </div>
  )
}
