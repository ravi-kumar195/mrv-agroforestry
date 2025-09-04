import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Users,
  TrendingUp,
  Globe,
  Target,
  Heart,
  ArrowRight,
  CheckCircle,
  XCircle,
  IndianRupee,
  Smartphone,
  Award,
  MapPin,
} from "lucide-react"
import NextLink from "next/link"

export default function AboutPage() {
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
            <div className="hidden md:flex items-center gap-6">
              <NextLink href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </NextLink>
              <NextLink href="/farmer" className="text-muted-foreground hover:text-foreground transition-colors">
                Farmers
              </NextLink>
              <NextLink href="/verifier" className="text-muted-foreground hover:text-foreground transition-colors">
                Verifiers
              </NextLink>
              <NextLink href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                Marketplace
              </NextLink>
              <NextLink href="/about" className="text-foreground font-medium">
                About
              </NextLink>
            </div>
            <Button asChild>
              <NextLink href="/farmer">Get Started</NextLink>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Mission
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Empowering Smallholder Farmers Through Carbon Credits
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            AgriCarbon MRV is revolutionizing how smallholder farmers access carbon credit markets by making monitoring,
            reporting, and verification affordable, accurate, and accessible.
          </p>
        </div>
      </section>

      {/* Problem & Solution Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Before AgriCarbon vs After AgriCarbon
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  Before: Traditional MRV
                </CardTitle>
                <CardDescription className="text-red-600">
                  Expensive, complex, and inaccessible for small farmers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">High MRV Costs</p>
                      <p className="text-sm text-red-600">$50-100 per hectare for verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">Complex Paperwork</p>
                      <p className="text-sm text-red-600">Months of documentation in English</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">Limited Access</p>
                      <p className="text-sm text-red-600">Only large farms can participate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">Delayed Payments</p>
                      <p className="text-sm text-red-600">6-12 months to receive payment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">No Transparency</p>
                      <p className="text-sm text-red-600">Farmers don't understand the process</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  After: AgriCarbon MRV
                </CardTitle>
                <CardDescription className="text-green-600">
                  Affordable, simple, and accessible for all farmers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-green-800">80% Lower Costs</p>
                      <p className="text-sm text-green-600">$10-15 per hectare with AI automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-green-800">Voice & Local Languages</p>
                      <p className="text-sm text-green-600">Simple app in Hindi, Tamil, Telugu, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-green-800">Any Farm Size</p>
                      <p className="text-sm text-green-600">From 0.5 acres to large holdings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-green-800">Fast Payments</p>
                      <p className="text-sm text-green-600">2-4 weeks via mobile money</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-green-800">Full Transparency</p>
                      <p className="text-sm text-green-600">Real-time tracking and blockchain records</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact So Far</h2>
            <p className="text-xl text-muted-foreground">
              Transforming lives and the environment, one farmer at a time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">2,500+</div>
                <div className="text-muted-foreground">Farmers Onboarded</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">15,000</div>
                <div className="text-muted-foreground">tCO₂e Sequestered</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">₹2.25Cr</div>
                <div className="text-muted-foreground">Paid to Farmers</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">12</div>
                <div className="text-muted-foreground">States Covered</div>
              </CardContent>
            </Card>
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">RK</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Haryana</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  "I earned ₹18,000 from my 2.5 acres in just 3 months. The app is so easy to use, even in Hindi!"
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Rice Farmer</Badge>
                  <Badge variant="outline">₹18,000 earned</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">PS</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Punjab</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  "AgriCarbon helped me transition to organic farming and now I earn extra income from carbon credits."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Wheat Farmer</Badge>
                  <Badge variant="outline">₹25,000 earned</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AP</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Amit Patel</p>
                    <p className="text-sm text-muted-foreground">Gujarat</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  "My agroforestry project now generates consistent income. The verification process is transparent."
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Agroforestry</Badge>
                  <Badge variant="outline">₹42,000 earned</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision for India</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Scaling across India to empower millions of smallholder farmers
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">2025 Goal</h3>
              <p className="text-muted-foreground">50,000 farmers across 20 states</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">2027 Vision</h3>
              <p className="text-muted-foreground">1 million farmers, ₹500Cr in payments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Impact</h3>
              <p className="text-muted-foreground">Expand to Southeast Asia & Africa</p>
            </div>
          </div>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Why This Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">For Farmers</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Additional income stream (₹5,000-50,000/year)</li>
                    <li>• Incentive for sustainable practices</li>
                    <li>• Access to premium markets</li>
                    <li>• Climate resilience training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">For Climate</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 10M+ tCO₂e sequestered annually</li>
                    <li>• Improved soil health & biodiversity</li>
                    <li>• Reduced agricultural emissions</li>
                    <li>• Sustainable land management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Make It Possible</h2>
            <p className="text-xl text-muted-foreground">Cutting-edge technology meets grassroots accessibility</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Mobile-First Design</h3>
                <p className="text-muted-foreground text-sm">
                  Voice input, local languages, and offline capability for rural areas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">AI + Satellite Data</h3>
                <p className="text-muted-foreground text-sm">
                  Automated monitoring using satellite imagery and machine learning
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Blockchain Verification</h3>
                <p className="text-muted-foreground text-sm">Transparent, tamper-proof records for all stakeholders</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Human-Centered</h3>
                <p className="text-muted-foreground text-sm">NGO partnerships and local support for farmer success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Join the Carbon Credit Revolution</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a farmer, verifier, or buyer, be part of the solution for climate and livelihoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NextLink href="/farmer">
                Start as Farmer
                <ArrowRight className="h-4 w-4 ml-2" />
              </NextLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NextLink href="/marketplace">
                Buy Carbon Credits
                <ArrowRight className="h-4 w-4 ml-2" />
              </NextLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">AgriCarbon MRV</span>
              </div>
              <p className="text-muted-foreground">
                Empowering smallholder farmers through accessible carbon credit programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <NextLink href="/farmer" className="hover:text-foreground transition-colors">
                    Farmer Dashboard
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/verifier" className="hover:text-foreground transition-colors">
                    Verifier Portal
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/marketplace" className="hover:text-foreground transition-colors">
                    Carbon Marketplace
                  </NextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <NextLink href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#" className="hover:text-foreground transition-colors">
                    Support
                  </NextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: hello@agricarbon.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AgriCarbon MRV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
