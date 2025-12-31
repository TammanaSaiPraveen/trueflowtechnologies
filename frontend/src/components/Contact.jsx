import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import api from "../lib/api";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('📤 Submitting contact form:', formData);
    console.log('🌐 API Base URL:', import.meta.env.VITE_API_URL || 'http://localhost:5000/api');

    try {
      const response = await api.post('/contact', formData);
      console.log('✅ Contact form submitted successfully:', response.data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We have received your message and will contact you soon.",
        variant: "success",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('❌ Contact form error:', error);
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
          description: error.message || "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-
    h-screen bg-gradient-to-b from-blue-50/20 via-white to-blue-50/30">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Have a project in mind? We'd love to hear from you. 
              Let's discuss how we can help transform your ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-5 md:mb-6 leading-tight">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us about your project..."
                      className="mt-2 min-h-[120px] md:min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-5 md:mb-6 leading-tight">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Email</h3>
                        <a 
                          href="mailto:info@trueflowtechnologies.com"
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                        >
                          info@trueflowtechnologies.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Primary Email</h3>
                        <a 
                          href="mailto:trueflowit@gmail.com"
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-words"
                        >
                          trueflowit@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1 text-sm md:text-base">Location</h3>
                        <p className="text-sm md:text-base text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-4 leading-tight">
                    Follow Us
                  </h3>
                  <div className="flex space-x-3 md:space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/true-flow-technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/trueflowtechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent to-accent/50 border-0">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-4 leading-tight">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
