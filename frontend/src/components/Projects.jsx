import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Full-featured e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒"
    },
    {
      title: "AI Chatbot System",
      category: "AI Solutions",
      description: "Intelligent customer support chatbot with natural language processing capabilities.",
      tech: ["Python", "TensorFlow", "OpenAI", "React"],
      image: "🤖"
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile Development",
      description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
      tech: ["React Native", "Firebase", "Redux"],
      image: "💪"
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      description: "Scalable cloud architecture with automated deployment and monitoring.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "☁️"
    },
    {
      title: "Business Dashboard",
      category: "Web Development",
      description: "Real-time analytics dashboard for business intelligence and reporting.",
      tech: ["Next.js", "PostgreSQL", "Chart.js"],
      image: "📊"
    },
    {
      title: "Predictive Analytics Tool",
      category: "AI Solutions",
      description: "Machine learning model for sales forecasting and demand planning.",
      tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"],
      image: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 via-white to-blue-50/30">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Our Projects
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Explore our portfolio of successful projects spanning web development, 
              mobile apps, AI solutions, and cloud infrastructure.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="animate-fade-in hover:shadow-primary-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-primary flex items-center justify-center text-5xl md:text-6xl">
                    {project.image}
                  </div>
                  <div className="p-5 md:p-6">
                    <Badge className="mb-3 text-xs">{project.category}</Badge>
                    <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 md:px-2.5 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 md:mt-20 text-center animate-fade-in">
            <Card className="bg-gradient-to-br from-accent to-accent/50 border-0 shadow-primary">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  More Projects Coming Soon
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We're constantly working on exciting new projects. Check back regularly 
                  to see our latest work and innovations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
