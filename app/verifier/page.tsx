"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Leaf,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  MapPin,
  Calendar,
  User,
  FileText,
  BarChart3,
  IndianRupee,
} from "lucide-react"
import NextLink from "next/link"

interface Submission {
  id: string
  farmerName: string
  location: string
  landSize: number
  cropType: string
  practices: string
  submittedDate: string
  estimatedCredits: number
  status: "pending" | "approved" | "rejected"
  photos: string[]
}

const mockSubmissions: Submission[] = [
  {
    id: "SUB-001",
    farmerName: "Rajesh Kumar",
    location: "Karnal, Haryana",
    landSize: 2.5,
    cropType: "Rice",
    practices: "Organic fertilizers, drip irrigation, crop rotation with legumes, integrated pest management",
    submittedDate: "2024-01-15",
    estimatedCredits: 2.4,
    status: "pending",
    photos: ["/rice-field-with-organic-farming.jpg"],
  },
  {
    id: "SUB-002",
    farmerName: "Priya Sharma",
    location: "Ludhiana, Punjab",
    landSize: 4.0,
    cropType: "Wheat",
    practices: "Zero tillage, cover crops, composting, water conservation techniques",
    submittedDate: "2024-01-14",
    estimatedCredits: 3.8,
    status: "pending",
    photos: ["/wheat-field-with-sustainable-farming.jpg"],
  },
  {
    id: "SUB-003",
    farmerName: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    landSize: 1.8,
    cropType: "Agroforestry",
    practices: "Tree planting, intercropping, organic matter incorporation, rainwater harvesting",
    submittedDate: "2024-01-13",
    estimatedCredits: 4.2,
    status: "approved",
    photos: ["/agroforestry-with-trees-and-crops.jpg"],
  },
  {
    id: "SUB-004",
    farmerName: "Sunita Devi",
    location: "Patna, Bihar",
    landSize: 3.2,
    cropType: "Rice",
    practices: "System of Rice Intensification (SRI), organic inputs, water management",
    submittedDate: "2024-01-12",
    estimatedCredits: 3.1,
    status: "rejected",
    photos: ["/rice-field-with-sri-method.jpg"],
  },
]

export default function VerifierDashboard() {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [reviewComment, setReviewComment] = useState("")
  const [submissions, setSubmissions] = useState(mockSubmissions)

  const handleApprove = (submissionId: string) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === submissionId ? { ...sub, status: "approved" as const } : sub)),
    )
    setSelectedSubmission(null)
    setReviewComment("")
  }

  const handleReject = (submissionId: string) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === submissionId ? { ...sub, status: "rejected" as const } : sub)),
    )
    setSelectedSubmission(null)
    setReviewComment("")
  }

  const pendingSubmissions = submissions.filter((s) => s.status === "pending")
  const approvedSubmissions = submissions.filter((s) => s.status === "approved")
  const rejectedSubmissions = submissions.filter((s) => s.status === "rejected")

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
              <span className="text-muted-foreground">Verifier Portal - Green Earth NGO</span>
              <Button variant="outline" size="sm" asChild>
                <NextLink href="/">Home</NextLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-foreground">{pendingSubmissions.length}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold text-foreground">{approvedSubmissions.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold text-foreground">
                    {approvedSubmissions.reduce((sum, sub) => sum + sub.estimatedCredits, 0).toFixed(1)}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Payout</p>
                  <p className="text-2xl font-bold text-foreground flex items-center gap-1">
                    <IndianRupee className="h-5 w-5" />
                    {(approvedSubmissions.reduce((sum, sub) => sum + sub.estimatedCredits, 0) * 1500).toLocaleString()}
                  </p>
                </div>
                <IndianRupee className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending ({pendingSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Approved ({approvedSubmissions.length})
            </TabsTrigger>
            <TabsTrigger value="rejected" className="flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Rejected ({rejectedSubmissions.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} submission={submission} onReview={setSelectedSubmission} />
            ))}
            {pendingSubmissions.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No pending submissions to review</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            {approvedSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} submission={submission} onReview={setSelectedSubmission} readonly />
            ))}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            {rejectedSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} submission={submission} onReview={setSelectedSubmission} readonly />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Review Dialog */}
      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Review Submission - {selectedSubmission.id}</DialogTitle>
              <DialogDescription>
                Verify the farmer's data and practices for carbon credit calculation
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Farmer Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Farmer Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                      <p className="text-foreground">{selectedSubmission.farmerName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                      <p className="text-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedSubmission.location}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Submitted</Label>
                      <p className="text-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(selectedSubmission.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-4 w-4" />
                      Farm Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Land Size</Label>
                      <p className="text-foreground">{selectedSubmission.landSize} acres</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Crop Type</Label>
                      <p className="text-foreground">{selectedSubmission.cropType}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Estimated Credits</Label>
                      <p className="text-foreground font-semibold text-primary">
                        {selectedSubmission.estimatedCredits} credits
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Practices */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Sustainable Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{selectedSubmission.practices}</p>
                </CardContent>
              </Card>

              {/* Photos */}
              <Card>
                <CardHeader>
                  <CardTitle>Field Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedSubmission.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo || "/placeholder.svg"}
                        alt={`Field photo ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Review Actions */}
              {selectedSubmission.status === "pending" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Verification Decision</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="comment">Review Comments</Label>
                      <Textarea
                        id="comment"
                        placeholder="Add your verification notes and comments..."
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button onClick={() => handleApprove(selectedSubmission.id)} className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve & Send to Blockchain
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleReject(selectedSubmission.id)}
                        className="flex-1"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject Submission
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function SubmissionCard({
  submission,
  onReview,
  readonly = false,
}: {
  submission: Submission
  onReview: (submission: Submission) => void
  readonly?: boolean
}) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            Rejected
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-foreground">{submission.farmerName}</h3>
            <p className="text-muted-foreground flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {submission.location}
            </p>
          </div>
          {getStatusBadge(submission.status)}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <div>
            <Label className="text-sm font-medium text-muted-foreground">Land Size</Label>
            <p className="text-foreground">{submission.landSize} acres</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground">Crop</Label>
            <p className="text-foreground">{submission.cropType}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground">Credits</Label>
            <p className="text-foreground font-semibold">{submission.estimatedCredits}</p>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground">Submitted</Label>
            <p className="text-foreground">{new Date(submission.submittedDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">ID: {submission.id}</p>
          <Button variant="outline" onClick={() => onReview(submission)}>
            <Eye className="h-4 w-4 mr-2" />
            {readonly ? "View Details" : "Review"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
