import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { useToast } from "../hooks/use-toast";
import { MapPin, Clock, Briefcase } from "lucide-react";
import api from "../lib/api";

const Careers = () => {
  const { toast } = useToast();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resumeLink: ""
  });

  const jobs = [
    {
      id: "web-dev-intern",
      title: "Web Developer Intern",
      location: "Remote",
      type: "Internship",
      description: "Join our team to work on modern web applications using React, Next.js, and Node.js.",
      requirements: [
        "Knowledge of React and JavaScript",
        "Understanding of HTML, CSS, and responsive design",
        "Good problem-solving skills",
        "Willingness to learn and grow"
      ]
    },
    {
      id: "ai-engineer",
      title: "AI/ML Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Develop and deploy AI models and machine learning solutions for various business applications.",
      requirements: [
        "Experience with Python and ML frameworks",
        "Knowledge of TensorFlow or PyTorch",
        "Understanding of NLP and computer vision",
        "2+ years of experience preferred"
      ]
    },
    {
      id: "mobile-dev",
      title: "Mobile Developer",
      location: "Remote",
      type: "Full-time",
      description: "Build cross-platform mobile applications using React Native for iOS and Android.",
      requirements: [
        "Experience with React Native",
        "Knowledge of mobile app development best practices",
        "Understanding of RESTful APIs",
        "1+ years of experience"
      ]
    },
    {
      id: "ui-designer",
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-time",
      description: "Create beautiful and user-friendly designs for web and mobile applications.",
      requirements: [
        "Proficiency in Figma or Adobe XD",
        "Strong portfolio of design work",
        "Understanding of user-centered design principles",
        "Experience with prototyping"
      ]
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('📤 Submitting job application:', formData);
    console.log('📋 Selected job:', selectedJob);
    console.log('🌐 API Base URL:', import.meta.env.VITE_API_URL || 'http://localhost:5000/api');

    try {
      const applicationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        resumeLink: formData.resumeLink,
        jobTitle: selectedJob?.title || "General Application",
        jobId: selectedJob?.id || "general",
        jobType: selectedJob?.type || "Full-time",
        location: selectedJob?.location || "Remote"
      };

      const response = await api.post('/internship', applicationData);
      console.log('✅ Application submitted successfully:', response.data);
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We have received your application and will review it. We'll contact you soon.",
        variant: "success",
      });
      
      setFormData({ name: "", email: "", phone: "", coverLetter: "", resumeLink: "" });
      setShowApplicationForm(false);
      setSelectedJob(null);
    } catch (error) {
      console.error('❌ Application submission error:', error);
      console.error('Error response:', error.response);
      console.error('Error message:', error.message);
      
      // Handle validation errors
      if (error.response?.data?.errors) {
        const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
        console.error('Validation errors:', errorMessages);
        toast({
          title: "Validation Error",
          description: errorMessages,
          variant: "destructive",
        });
      } else if (error.response) {
        // Server responded with error
        console.error('Server error:', error.response.status, error.response.data);
        toast({
          title: "Error",
          description: error.response.data?.message || `Server error: ${error.response.status}`,
          variant: "destructive",
        });
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response from server. Is the backend running?');
        toast({
          title: "Connection Error",
          description: "Could not connect to the server. Please make sure the backend is running.",
          variant: "destructive",
        });
      } else {
        // Something else happened
        console.error('Error setting up request:', error.message);
        toast({
          title: "Error",
          description: error.message || "Failed to submit application. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of an innovative team that's shaping the future of technology. 
              We're always looking for talented individuals to join us.
            </p>
          </div>

          {showApplicationForm ? (
            /* Application Form */
            <Card className="max-w-2xl mx-auto animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowApplicationForm(false)}
                    className="mb-4"
                  >
                    ← Back to Job Listings
                  </Button>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">
                    Apply for {selectedJob?.title || "General Application"}
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter / Why you're a great fit</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      required
                      placeholder="Tell us about yourself and why you'd be perfect for this role..."
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resumeLink">Resume Drive Link</Label>
                    <Input
                      id="resumeLink"
                      type="url"
                      value={formData.resumeLink}
                      onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                      required
                      placeholder="https://drive.google.com/file/d/..."
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Please provide a shareable Google Drive link to your resume
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            /* Job Listings */
            <div className="space-y-8">
              {jobs.map((job, index) => (
                <Card 
                  key={job.id}
                  className="animate-fade-in hover:shadow-primary-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-card-foreground mb-3">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button onClick={() => handleApply(job)}>
                        Apply Now
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {job.description}
                    </p>

                    <div>
                      <h3 className="font-semibold text-card-foreground mb-3">Requirements:</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Additional Info */}
          {!showApplicationForm && (
            <div className="mt-20 animate-fade-in">
              <Card className="bg-gradient-to-br from-accent to-accent/50 border-0">
                <CardContent className="p-12 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Don't See a Perfect Fit?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We're always looking for talented people. Send us your resume and tell us 
                    how you can contribute to Trueflow Technologies.
                  </p>
                  <Button size="lg" variant="outline" onClick={() => {
                    setSelectedJob({
                      id: "general",
                      title: "General Application",
                      type: "Full-time",
                      location: "Remote"
                    });
                    setShowApplicationForm(true);
                  }}>
                    Send General Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
