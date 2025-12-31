import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Team = () => {
  const leaders = [
    {
      name: "Tammana Sai Praveen",
      role: "Founder & CEO",
      bio: "Visionary leader with a passion for technology and innovation. Specializes in AI, web development, and digital transformation strategies.",
      expertise: ["AI & Machine Learning", "Full-Stack Development", "Business Strategy", "Team Leadership"],
      initials: "TS"
    },
    // {
    //   name: "Vadlamudi Sri Rama Karthik",
    //   role: "Co-Founder",
    //   bio: "Co-founder driving strategic growth and innovation. Committed to delivering exceptional technology solutions.",
    //   expertise: ["Strategic Planning", "Business Development", "Technology Innovation", "Partnership Management"],
    //   initials: "VK"
    // },
    {
      name: "Atyam Aravind",
      role: "CTO",
      bio: "Technical leader overseeing architecture and development. Expert in building scalable and robust technology solutions.",
      expertise: ["System Architecture", "Cloud Infrastructure", "DevOps", "Technical Leadership"],
      initials: "AA"
    },
    {
      name: "Nadeem Mohamad",
      role: "COO",
      bio: "Operations expert ensuring seamless execution and delivery. Focused on optimizing processes and driving efficiency.",
      expertise: ["Operations Management", "Project Delivery", "Process Optimization", "Team Coordination"],
      initials: "NM"
    },
    {
      name: "Komati Surya Prakash",
      role: "CMO",
      bio: "Marketing strategist building brand presence and driving growth. Passionate about connecting technology with business needs.",
      expertise: ["Digital Marketing", "Brand Strategy", "Customer Engagement", "Growth Marketing"],
      initials: "KS"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-blue-50/40">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Meet Our Team
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Talented professionals dedicated to delivering exceptional technology solutions 
              and driving innovation.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center leading-tight">Leadership</h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {leaders.map((leader, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-primary-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center mb-5 md:mb-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-bold text-primary-foreground">
                          {leader.initials}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2 leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-sm md:text-base text-primary font-medium mb-3 md:mb-4">{leader.role}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-card-foreground mb-2.5 text-center">
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                        {leader.expertise.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-2 md:px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Growing Team Section */}
          <div className="animate-fade-in mb-12 md:mb-16 lg:mb-20">
            <Card className="bg-gradient-to-br from-accent to-accent/50 border-0 shadow-primary-lg">
              <CardContent className="p-8 md:p-10 lg:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                  We're Growing!
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                  Trueflow Technologies is expanding our team of talented professionals. 
                  We're looking for passionate individuals who want to make an impact in 
                  technology and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/careers">View Open Positions</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center leading-tight">
              Why Join Trueflow?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm md:text-base">Innovation First</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Work on cutting-edge projects using the latest technologies
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">📚</div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm md:text-base">Continuous Learning</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Grow your skills with ongoing training and mentorship
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <CardContent className="p-5 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm md:text-base">Collaborative Culture</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Be part of a supportive team that values your contribution
                  </p>
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

export default Team;
