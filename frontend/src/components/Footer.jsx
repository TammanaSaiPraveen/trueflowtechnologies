import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import logo from '../assets/logo/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <img src={logo} alt="Trueflow Logo" className="w-10 h-10 object-contain rounded-lg bg-white shadow-sm" />
              <span className="font-bold text-lg text-foreground">Trueflow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Digital Transformation with AI-driven solutions.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/true-flow-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent/80 transition-all" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/trueflowtechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent/80 transition-all" 
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 md:mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 md:mb-5">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 md:mb-5">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-2.5">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@trueflowtechnologies.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-words">
                  trueflowit@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Coming Soon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Trueflow Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
