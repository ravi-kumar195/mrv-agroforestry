import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Smartphone, Globe, FileText, DollarSign } from "lucide-react"
import NextLink from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
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
              <NextLink href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            AgriCarbon MRV – Affordable & Scalable Carbon Credit Platform
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Helping smallholder farmers earn from carbon credits with accurate, affordable MRV.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <NextLink href="/farmer">Get Started</NextLink>
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">High MRV Costs</h3>
              <p className="text-muted-foreground">
                Traditional monitoring, reporting, and verification processes are expensive and inaccessible to
                smallholder farmers.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Complex Processes</h3>
              <p className="text-muted-foreground">
                Current carbon credit systems are too complex for rural farmers to navigate without extensive support.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Fragmented Data</h3>
              <p className="text-muted-foreground">
                Lack of standardized data collection and verification makes it difficult to scale carbon credit
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Farmer App</CardTitle>
                <CardDescription>Easy data input with voice support and local languages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intuitive mobile app that allows farmers to record their agricultural practices using voice commands
                  in their native language.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI + Remote Sensing</CardTitle>
                <CardDescription>Accurate monitoring using satellite data and AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced AI algorithms combined with satellite imagery provide accurate, real-time monitoring of
                  carbon sequestration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Standardized Protocols</CardTitle>
                <CardDescription>Compliant with international carbon registries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our protocols meet international standards, ensuring credits are recognized by major carbon registries
                  worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Blockchain Verification</CardTitle>
                <CardDescription>Transparent and tamper-proof verification</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blockchain technology ensures transparent, immutable records of all carbon credit transactions and
                  verifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Direct Farmer Payouts</CardTitle>
                <CardDescription>Fair compensation directly to farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated payment system ensures farmers receive fair compensation quickly and directly for their
                  carbon credits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Earning Carbon Credits?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of farmers already benefiting from our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <NextLink href="/farmer">Start as Farmer</NextLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NextLink href="/verifier">Join as Verifier</NextLink>
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
                <li>Phone: +91 98765 XXXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 AgriCarbon MRV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
