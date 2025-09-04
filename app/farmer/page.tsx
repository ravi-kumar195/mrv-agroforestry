"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Leaf, Upload, Calculator, IndianRupee, CheckCircle, Clock, AlertCircle, X } from "lucide-react"
import NextLink from "next/link"

export default function FarmerDashboard() {
  const [showResults, setShowResults] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]) // Added state for uploaded files
  const [formData, setFormData] = useState({
    landSize: "",
    cropType: "",
    practices: "",
    location: "",
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Added file upload handler
    const files = event.target.files
    if (files) {
      const validFiles = Array.from(files).filter((file) => {
        const isValidType = file.type.startsWith("image/")
        const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB
        return isValidType && isValidSize
      })
      setUploadedFiles((prev) => [...prev, ...validFiles])
    }
  }

  const removeFile = (index: number) => {
    // Added function to remove uploaded files
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  const mockCredits = 2.4
  const mockPayout = mockCredits * 1500 // ₹1500 per credit

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AgriCarbon MRV</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Welcome, Rajesh Kumar</span>
              <Button variant="outline" size="sm" asChild>
                <NextLink href="/">Home</NextLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Farmer Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">RK</span>
                  </div>
                  Farmer Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                  <p className="text-foreground">Rajesh Kumar</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                  <p className="text-foreground">Haryana, India</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Primary Crop</Label>
                  <p className="text-foreground">Rice</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Total Land</Label>
                  <p className="text-foreground">5.2 acres</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Member Since</Label>
                  <p className="text-foreground">January 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Current Credits Status */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Carbon Credits Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Earned</span>
                  <span className="font-semibold text-foreground">12.8 credits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Payout</span>
                  <span className="font-semibold text-foreground flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />
                    19,200
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">8.4 credits verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">4.4 credits pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <Card>
                <CardHeader>
                  <CardTitle>Submit New Carbon Credit Data</CardTitle>
                  <CardDescription>
                    Enter your farming practices and land details to calculate potential carbon credits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="landSize">Land Size (acres)</Label>
                      <Input
                        id="landSize"
                        placeholder="e.g., 2.5"
                        value={formData.landSize}
                        onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cropType">Crop Type</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rice">Rice</SelectItem>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="sugarcane">Sugarcane</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="agroforestry">Agroforestry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Field Location</Label>
                    <Input
                      id="location"
                      placeholder="Village, District, State"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practices">Sustainable Practices</Label>
                    <Textarea
                      id="practices"
                      placeholder="Describe your sustainable farming practices (e.g., organic fertilizers, water conservation, crop rotation, tree planting)"
                      value={formData.practices}
                      onChange={(e) => setFormData({ ...formData, practices: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Field Photos</Label>
                    <div className="space-y-4">
                      <label className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors block">
                        <input type="file" multiple accept="image/*" onChange={handleFileUpload} className="hidden" />
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                      </label>

                      {uploadedFiles.length > 0 && ( // Added display of uploaded files with remove functionality
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Uploaded Photos ({uploadedFiles.length})</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="relative group">
                                <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                                    <Upload className="h-4 w-4 text-primary" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      {(file.size / 1024 / 1024).toFixed(1)} MB
                                    </p>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeFile(index)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={handleCalculate}
                    className="w-full"
                    size="lg"
                    disabled={!formData.landSize || !formData.cropType}
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Carbon Credits
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Results Card */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <CheckCircle className="h-5 w-5" />
                      Carbon Credits Calculated
                    </CardTitle>
                    <CardDescription>Based on your submitted data and our AI analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-primary mb-2">{mockCredits}</div>
                        <div className="text-muted-foreground">Estimated Carbon Credits</div>
                      </div>
                      <div className="text-center p-6 bg-card rounded-lg border">
                        <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                          <IndianRupee className="h-6 w-6" />
                          {mockPayout.toLocaleString()}
                        </div>
                        <div className="text-muted-foreground">Estimated Payout</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Verification Process</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Data Submitted</p>
                            <p className="text-sm text-muted-foreground">Your farming data has been recorded</p>
                          </div>
                          <Badge variant="secondary">Complete</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Pending Verification</p>
                            <p className="text-sm text-muted-foreground">NGO verifier will review your submission</p>
                          </div>
                          <Badge variant="outline">In Progress</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                            <AlertCircle className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-muted-foreground">Payment Processing</p>
                            <p className="text-sm text-muted-foreground">Credits will be paid after verification</p>
                          </div>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={() => setShowResults(false)} variant="outline" className="flex-1">
                        Submit Another Entry
                      </Button>
                      <Button asChild className="flex-1">
                        <NextLink href="/farmer/history">View History</NextLink>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Breakdown Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Calculation Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Land Size</span>
                        <span className="font-medium">{formData.landSize} acres</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Crop Type</span>
                        <span className="font-medium capitalize">{formData.cropType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Carbon Sequestration Rate</span>
                        <span className="font-medium">0.48 credits/acre</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sustainable Practice Bonus</span>
                        <span className="font-medium">+15%</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total Carbon Credits</span>
                        <span className="text-primary">{mockCredits} credits</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
