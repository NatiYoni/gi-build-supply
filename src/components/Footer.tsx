import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";
import logobgrem from "@/assets/logobgrem.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logobgrem}
                alt="GI Technology Logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-bold">GI Technology</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Premium construction materials and reliable service for all your building needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Construction Sand</li>
              <li>Gravel & Aggregates</li>
              <li>Crushed Stone</li>
              <li>Building Materials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+251911711111" className="text-primary-foreground/80 hover:text-blue-600 hover:underline transition-colors">
                  +251 911 711 111
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:gizzetechnology21@gmail.com" className="text-primary-foreground/80 hover:text-blue-600 hover:underline transition-colors">
                  gizzetechnology21@gmail.com
                </a>
              </li>
              <li className="text-sm text-primary-foreground/80 font-medium mt-4">
                Open: Monday - Sunday
              </li>
              <li className="text-sm text-primary-foreground/80">
                6:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} GI Technology. All rights reserved.</p>
          <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
