import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import logobgrem from "@/assets/logobgrem.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
            <img 
              src={logobgrem} 
              alt="GI Technology Logo" 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-xl font-bold gradient-text">GI Technology</h1>
              <p className="text-xs text-muted-foreground">Building Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(link.path) ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="gradient-hero text-white shadow-glow">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-navigation" hidden={!isOpen} className="md:hidden mt-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive(link.path) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive(link.path) ? "text-secondary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full gradient-hero text-white">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
