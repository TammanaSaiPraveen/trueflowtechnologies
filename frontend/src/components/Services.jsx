import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Cloud, 
  Palette, 
  HeadphonesIcon,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites, web applications, and progressive web apps built with cutting-edge technologies.",
      features: [
        "React & Next.js Development",
        "Full-stack MERN Applications",
        "E-commerce Solutions",
        "Custom CMS Development",
        "API Development & Integration"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "React Native Development",
        "Cross-platform Solutions",
        "Native iOS & Android Apps",
        "App Store Deployment",
        "Mobile App Maintenance"
      ],
      technologies: ["React Native", "iOS", "Android", "Firebase"]
    },
    {
      icon: Brain,
      title: "AI & Automation Solutions",
      description: "Intelligent automation and AI-powered solutions that transform business operations and drive efficiency.",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Process Automation",
        "Predictive Analytics",
        "Machine Learning Models",
        "Natural Language Processing"
      ],
      technologies: ["Python", "TensorFlow", "LangChain", "OpenAI"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and deployment solutions for modern applications.",
      features: [
        "Cloud Architecture Design",
        "AWS & Azure Deployment",
        "Cloud Migration Services",
        "DevOps Implementation",
        "Infrastructure as Code"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that combine aesthetics with functionality to create memorable experiences.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Brand Identity Design",
        "Design Systems"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Illustrator"]
    },
    {
      icon: HeadphonesIcon,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and implement effective solutions.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "System Architecture",
        "Security Consulting",
        "Technical Support"
      ],
      technologies: ["Best Practices", "Industry Standards"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 via-white to-blue-50/30">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Comprehensive IT solutions and services designed to help your business 
              thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-10 md:space-y-14 lg:space-y-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="animate-fade-in hover:shadow-primary-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
                    <div>
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 md:mb-6">
                        <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3 md:mb-4 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                        {service.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2.5 md:px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button asChild size="lg">
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-3 md:mb-4 leading-tight">
                        Key Features
                      </h3>
                      <ul className="space-y-2.5 md:space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-2.5 md:mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 md:mt-20 text-center animate-fade-in">
            <Card className="bg-gradient-to-br from-accent to-accent/50 border-0 shadow-primary-lg">
              <CardContent className="p-8 md:p-10 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                  Need a Custom Solution?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                  We specialize in creating tailored solutions that meet your unique business needs. 
                  Let's discuss how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                    <Link to="/ai-solutions">Explore AI Solutions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
