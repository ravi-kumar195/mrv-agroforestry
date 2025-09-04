"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Leaf,
  ShoppingCart,
  MapPin,
  Calendar,
  User,
  Filter,
  Search,
  CheckCircle,
  IndianRupee,
  Globe,
  Award,
  Truck,
} from "lucide-react"
import NextLink from "next/link"

interface CarbonCredit {
  id: string
  farmerName: string
  location: string
  projectType: string
  creditsAvailable: number
  pricePerCredit: number
  verificationDate: string
  certificationStandard: string
  description: string
  sustainablePractices: string[]
  vintage: string
  status: "available" | "sold" | "reserved"
}

const mockCarbonCredits: CarbonCredit[] = [
  {
    id: "CC-001",
    farmerName: "Rajesh Kumar",
    location: "Karnal, Haryana",
    projectType: "Sustainable Rice Farming",
    creditsAvailable: 2.4,
    pricePerCredit: 1500,
    verificationDate: "2024-01-20",
    certificationStandard: "Verified Carbon Standard (VCS)",
    description: "Organic rice farming with water conservation and reduced methane emissions",
    sustainablePractices: ["Organic fertilizers", "Drip irrigation", "Crop rotation", "Integrated pest management"],
    vintage: "2024",
    status: "available",
  },
  {
    id: "CC-002",
    farmerName: "Priya Sharma",
    location: "Ludhiana, Punjab",
    projectType: "Regenerative Wheat Farming",
    creditsAvailable: 3.8,
    pricePerCredit: 1400,
    verificationDate: "2024-01-18",
    certificationStandard: "Gold Standard",
    description: "Zero-tillage wheat farming with cover crops and soil carbon sequestration",
    sustainablePractices: ["Zero tillage", "Cover crops", "Composting", "Water conservation"],
    vintage: "2024",
    status: "available",
  },
  {
    id: "CC-003",
    farmerName: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    projectType: "Agroforestry System",
    creditsAvailable: 4.2,
    pricePerCredit: 1800,
    verificationDate: "2024-01-15",
    certificationStandard: "Climate Action Reserve (CAR)",
    description: "Mixed agroforestry with fruit trees and intercropping for enhanced carbon storage",
    sustainablePractices: ["Tree planting", "Intercropping", "Organic matter", "Rainwater harvesting"],
    vintage: "2024",
    status: "available",
  },
  {
    id: "CC-004",
    farmerName: "Sunita Collective",
    location: "Nashik, Maharashtra",
    projectType: "Organic Sugarcane",
    creditsAvailable: 5.6,
    pricePerCredit: 1600,
    verificationDate: "2024-01-12",
    certificationStandard: "Verified Carbon Standard (VCS)",
    description: "Organic sugarcane cultivation with biomass management and soil improvement",
    sustainablePractices: ["Organic inputs", "Biomass recycling", "Soil health", "Water efficiency"],
    vintage: "2024",
    status: "available",
  },
  {
    id: "CC-005",
    farmerName: "Green Valley Farmers",
    location: "Coimbatore, Tamil Nadu",
    projectType: "Mixed Agroforestry",
    creditsAvailable: 8.2,
    pricePerCredit: 1700,
    verificationDate: "2024-01-10",
    certificationStandard: "Gold Standard",
    description: "Large-scale agroforestry project with multiple crop integration and carbon sequestration",
    sustainablePractices: ["Diverse tree species", "Multi-crop system", "Organic farming", "Biodiversity conservation"],
    vintage: "2024",
    status: "available",
  },
]

export default function CarbonMarketplace() {
  const [selectedCredit, setSelectedCredit] = useState<CarbonCredit | null>(null)
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStandard, setFilterStandard] = useState("all")

  const filteredCredits = mockCarbonCredits.filter((credit) => {
    const matchesSearch =
      credit.farmerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      credit.projectType.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || credit.projectType.toLowerCase().includes(filterType.toLowerCase())

    const matchesStandard =
      filterStandard === "all" || credit.certificationStandard.toLowerCase().includes(filterStandard.toLowerCase())

    return matchesSearch && matchesType && matchesStandard && credit.status === "available"
  })

  const totalCreditsAvailable = filteredCredits.reduce((sum, credit) => sum + credit.creditsAvailable, 0)
  const averagePrice = filteredCredits.reduce((sum, credit) => sum + credit.pricePerCredit, 0) / filteredCredits.length

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
              <span className="text-muted-foreground">Carbon Marketplace</span>
              <Button variant="outline" size="sm" asChild>
                <NextLink href="/">Home</NextLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Carbon Credit Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Purchase verified carbon credits directly from smallholder farmers practicing sustainable agriculture
          </p>
        </div>

        {/* Market Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Available Credits</p>
                  <p className="text-2xl font-bold text-foreground">{totalCreditsAvailable.toFixed(1)}</p>
                </div>
                <Leaf className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold text-foreground">{filteredCredits.length}</p>
                </div>
                <Globe className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Price</p>
                  <p className="text-2xl font-bold text-foreground flex items-center gap-1">
                    <IndianRupee className="h-5 w-5" />
                    {averagePrice.toFixed(0)}
                  </p>
                </div>
                <IndianRupee className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                </div>
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search farmers, location, or project..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All project types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="rice">Rice Farming</SelectItem>
                    <SelectItem value="wheat">Wheat Farming</SelectItem>
                    <SelectItem value="agroforestry">Agroforestry</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="standard">Certification</Label>
                <Select value={filterStandard} onValueChange={setFilterStandard}>
                  <SelectTrigger>
                    <SelectValue placeholder="All standards" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Standards</SelectItem>
                    <SelectItem value="vcs">Verified Carbon Standard</SelectItem>
                    <SelectItem value="gold">Gold Standard</SelectItem>
                    <SelectItem value="car">Climate Action Reserve</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setFilterType("all")
                    setFilterStandard("all")
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Carbon Credits Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCredits.map((credit) => (
            <Card key={credit.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {credit.farmerName}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {credit.location}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{credit.projectType}</h4>
                  <p className="text-muted-foreground text-sm">{credit.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Available Credits</Label>
                    <p className="text-lg font-bold text-primary">{credit.creditsAvailable} tCO₂e</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Price per Credit</Label>
                    <p className="text-lg font-bold text-foreground flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      {credit.pricePerCredit.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Sustainable Practices</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {credit.sustainablePractices.slice(0, 3).map((practice, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {practice}
                      </Badge>
                    ))}
                    {credit.sustainablePractices.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{credit.sustainablePractices.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Verified: {new Date(credit.verificationDate).toLocaleDateString()}
                    </span>
                  </div>
                  <Button onClick={() => setSelectedCredit(credit)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Credits
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCredits.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No credits found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Purchase Dialog */}
      {selectedCredit && (
        <Dialog open={!!selectedCredit} onOpenChange={() => setSelectedCredit(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Purchase Carbon Credits</DialogTitle>
              <DialogDescription>
                Complete your carbon credit purchase from {selectedCredit.farmerName}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Credit Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{selectedCredit.projectType}</CardTitle>
                  <CardDescription>
                    {selectedCredit.farmerName} • {selectedCredit.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Available</Label>
                      <p className="text-foreground">{selectedCredit.creditsAvailable} tCO₂e</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Price per Credit</Label>
                      <p className="text-foreground flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        {selectedCredit.pricePerCredit.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Certification</Label>
                    <p className="text-foreground">{selectedCredit.certificationStandard}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (tCO₂e)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="0.1"
                    max={selectedCredit.creditsAvailable}
                    step="0.1"
                    value={purchaseQuantity}
                    onChange={(e) => setPurchaseQuantity(Number.parseFloat(e.target.value) || 0)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Maximum available: {selectedCredit.creditsAvailable} tCO₂e
                  </p>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        {(purchaseQuantity * selectedCredit.pricePerCredit).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Platform Fee (2%)</span>
                      <span className="font-medium flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" />
                        {(purchaseQuantity * selectedCredit.pricePerCredit * 0.02).toLocaleString()}
                      </span>
                    </div>
                    <hr className="border-primary/20 my-2" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-primary text-lg flex items-center gap-1">
                        <IndianRupee className="h-5 w-5" />
                        {(purchaseQuantity * selectedCredit.pricePerCredit * 1.02).toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setSelectedCredit(null)} className="flex-1">
                    Cancel
                  </Button>
                  <Button
                    className="flex-1"
                    disabled={purchaseQuantity <= 0 || purchaseQuantity > selectedCredit.creditsAvailable}
                  >
                    <Truck className="h-4 w-4 mr-2" />
                    Complete Purchase
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Credits will be transferred to your account within 24 hours</p>
                  <p>Certificate of purchase will be emailed to you</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
