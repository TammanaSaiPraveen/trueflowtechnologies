import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Brain, Bot, TrendingUp, Zap, Database, MessagesSquare } from "lucide-react";

const AISolutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI that provides 24/7 customer support and engagement.",
      useCases: ["Customer Service", "Lead Generation", "Internal Support"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce costs.",
      useCases: ["Data Entry", "Report Generation", "Workflow Automation"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Leverage machine learning to forecast trends and make data-driven decisions.",
      useCases: ["Sales Forecasting", "Demand Planning", "Risk Assessment"]
    },
    {
      icon: Database,
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable insights with AI-powered analytics.",
      useCases: ["Business Intelligence", "Customer Analytics", "Market Research"]
    },
    {
      icon: MessagesSquare,
      title: "Natural Language Processing",
      description: "Understand and process human language for sentiment analysis and text processing.",
      useCases: ["Sentiment Analysis", "Document Processing", "Content Moderation"]
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Develop tailored machine learning models specific to your business needs.",
      useCases: ["Image Recognition", "Recommendation Systems", "Fraud Detection"]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", 
    "Hugging Face", "Scikit-learn", "Pandas", "NumPy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20">
      <Navigation />
      
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-2xl mb-4 md:mb-6">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-4">
              AI & Automation Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and drive innovation.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="animate-fade-in hover:shadow-primary-lg transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm font-medium text-card-foreground">Use Cases:</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {solution.useCases.map((useCase, i) => (
                        <span 
                          key={i}
                          className="px-2 md:px-2.5 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <Card>
              <CardContent className="p-8 md:p-10 lg:p-12">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3 md:mb-4 leading-tight">
                    AI Technologies We Use
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                    We leverage cutting-edge AI frameworks and tools to build robust, 
                    scalable solutions.
                  </p>
                </div>
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
              </CardContent>
            </Card>
          </div>

          {/* Real-World Applications */}
          <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10 text-center leading-tight">
              Real-World Applications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 leading-tight">
                    Healthcare
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Predictive diagnostics, patient monitoring, and automated administrative tasks 
                    to improve healthcare delivery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 leading-tight">
                    Retail & E-commerce
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Personalized recommendations, inventory optimization, and customer behavior 
                    analysis for better sales.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2.5 md:mb-3 leading-tight">
                    Finance
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Fraud detection, risk assessment, and algorithmic trading to enhance 
                    financial operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <Card className="bg-gradient-primary border-0 shadow-primary-lg">
              <CardContent className="p-8 md:p-10 lg:p-12 text-primary-foreground">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                  Ready to Implement AI in Your Business?
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
                  Schedule a free consultation with our AI experts to discuss how we can 
                  help you leverage artificial intelligence for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Link to="/contact">Book Free Consultation</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                  >
                    <Link to="/projects">View AI Projects</Link>
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

export default AISolutions;
