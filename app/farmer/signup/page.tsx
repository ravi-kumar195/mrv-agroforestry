"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, User, MapPin } from "lucide-react"
import NextLink from "next/link"

export default function FarmerSignup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    village: "",
    district: "",
    state: "",
    landSize: "",
    primaryCrop: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AgriCarbon MRV</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Join as a Farmer</h1>
          <p className="text-muted-foreground">Start earning from your sustainable farming practices</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Create Farmer Account
            </CardTitle>
            <CardDescription>Fill in your details to get started with carbon credit earning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location Details
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="village">Village *</Label>
                  <Input
                    id="village"
                    placeholder="Village name"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Input
                    id="district"
                    placeholder="District name"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Farming Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Farming Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landSize">Total Land Size (acres) *</Label>
                  <Input
                    id="landSize"
                    placeholder="e.g., 5.2"
                    value={formData.landSize}
                    onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primaryCrop">Primary Crop *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, primaryCrop: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="maize">Maize</SelectItem>
                      <SelectItem value="pulses">Pulses</SelectItem>
                      <SelectItem value="agroforestry">Agroforestry</SelectItem>
                      <SelectItem value="mixed">Mixed Crops</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Security</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <NextLink href="#" className="text-primary hover:underline">
                  Terms of Service
                </NextLink>{" "}
                and{" "}
                <NextLink href="#" className="text-primary hover:underline">
                  Privacy Policy
                </NextLink>
              </Label>
            </div>

            <Button
              className="w-full"
              size="lg"
              disabled={
                !formData.name ||
                !formData.phone ||
                !formData.village ||
                !formData.district ||
                !formData.state ||
                !formData.landSize ||
                !formData.primaryCrop ||
                !formData.password ||
                !formData.confirmPassword ||
                !formData.agreeTerms
              }
              asChild
            >
              <NextLink href="/farmer">Create Account</NextLink>
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <NextLink href="/farmer/login" className="text-primary hover:underline">
                  Sign in here
                </NextLink>
              </p>
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
