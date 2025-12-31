import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Cloud, 
  Palette, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using React Native for iOS and Android.",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent solutions powered by AI, including chatbots, automation, and predictive analytics.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services using AWS and Azure.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs with wireframing, prototyping, and brand identity.",
    },
    {
      icon: HeadphonesIcon,
      title: "IT Consulting",
      description: "Strategic technology consulting and implementation support for your business.",
    },
  ];

  const features = [
    "Expert team of developers and designers",
    "Cutting-edge AI integration",
    "On-time project delivery",
    "24/7 support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-50/80 to-blue-100/60">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="absolute top-16 right-8 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-8 left-8 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="max-w-[40rem] md:max-w-[48rem] lg:max-w-[56rem] mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center space-x-2 bg-accent/90 backdrop-blur-sm border border-border/50 px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full mb-5 md:mb-6 relative z-20 shadow-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-semibold text-accent-foreground whitespace-nowrap">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-5 lg:mb-6 leading-tight">
              Empowering Digital Transformation with{" "}
              <span className="text-gradient-primary">Trueflow</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-7 lg:mb-8 max-w-prose mx-auto leading-relaxed">
              We deliver cutting-edge IT solutions, web and mobile applications, and AI-driven automation 
              to help your business thrive in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="shadow-primary w-full sm:w-auto">
                <Link to="/contact" className="flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50/40 via-blue-50/20 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-5 lg:mb-6 leading-tight">
                Building Tomorrow's Technology, Today
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-5 leading-relaxed">
                Trueflow Technologies is a service-based IT company 
                dedicated to providing innovative digital solutions that transform businesses.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-5 md:mb-6 lg:mb-7 leading-relaxed">
                Our mission is to leverage cutting-edge technologies, especially AI, to create 
                powerful, scalable solutions that drive business growth and efficiency.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 order-1 md:order-2">
              {features.map((feature, index) => (
                <Card key={index} className="animate-fade-in min-w-0 hover:shadow-md transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 md:p-5 lg:p-6">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 md:mb-2.5" />
                    <p className="text-xs sm:text-sm md:text-base font-medium text-card-foreground leading-snug">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 lg:mb-5 leading-tight">
              Our Services
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary-lg transition-all duration-300 cursor-pointer animate-fade-in min-w-0 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 md:p-6 lg:p-7">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-12 lg:mt-14">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Solutions Highlight */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-[36rem] md:max-w-[44rem] lg:max-w-[52rem] mx-auto text-center text-primary-foreground animate-fade-in">
            <Brain className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-4 md:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-5 leading-tight px-4">
              AI-Powered Innovation
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-5 md:mb-6 lg:mb-7 opacity-90 leading-relaxed px-4">
              Transform your business with intelligent automation, predictive analytics, and 
              cutting-edge AI solutions designed to give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link to="/ai-solutions">Explore AI Solutions</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <Card className="bg-gradient-to-br from-accent to-accent/50 border-0 shadow-primary-lg">
            <CardContent className="p-8 md:p-10 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 lg:mb-5 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-5 md:mb-6 lg:mb-7 max-w-xl mx-auto leading-relaxed px-4">
                Let's discuss how Trueflow Technologies can help you achieve your digital goals 
                with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
