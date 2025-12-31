import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become a leading global technology partner, recognized for delivering exceptional AI-powered solutions and IT services."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, integrity, excellence, and client success guide everything we do at Trueflow Technologies."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse team of skilled professionals passionate about technology and committed to delivering outstanding results."
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js & Express", "React Native", "Python & TensorFlow",
    "MongoDB & PostgreSQL", "AWS & Azure", "Docker & Kubernetes", "AI & Machine Learning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              About Trueflow Technologies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Trueflow Technologies is dedicated to delivering 
              cutting-edge IT solutions that transform businesses and drive innovation.
            </p>
          </div>

          {/* Company Story */}
          <Card className="mb-12 md:mb-16 animate-fade-in">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 md:mb-6 leading-tight">Our Story</h2>
              <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-sm md:text-base">
                  Trueflow Technologies was founded with a clear vision: to bridge the gap between 
                  traditional business operations and modern technology solutions. As a service-based 
                  IT company, we specialize in creating custom software solutions, mobile applications, 
                  and AI-powered automation systems.
                </p>
                <p className="text-sm md:text-base">
                  We've built a reputation for delivering high-quality, scalable solutions that meet the evolving 
                  needs of businesses across various industries.
                </p>
                <p className="text-sm md:text-base">
                  Our commitment to innovation, combined with our expertise in emerging technologies 
                  like artificial intelligence and cloud computing, enables us to create solutions 
                  that not only solve today's challenges but also prepare our clients for tomorrow's opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-primary-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center animate-fade-in mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">Technologies We Use</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              We leverage the latest and most powerful technologies to build robust, 
              scalable solutions for our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-medium hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-12 text-center leading-tight">Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Tammana Sai Praveen", role: "Founder & CEO", initials: "TS" },
                // { name: "Vadlamudi Sri Rama Karthik", role: "Co-Founder", initials: "VK" },
                { name: "Atyam Aravind", role: "CTO", initials: "AA" },
                { name: "Nadeem Mohamad", role: "COO", initials: "NM" },
                { name: "Komati Surya Prakash", role: "CMO", initials: "KS" }
              ].map((leader, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-primary-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-primary-foreground">{leader.initials}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2 leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-sm md:text-base text-primary font-medium">{leader.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
