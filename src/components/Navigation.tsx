import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/children", label: "Our Children" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Scroll to top on route change
  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:scale-105">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Motherly Care</span>
              <span className="text-xs text-muted-foreground -mt-1">Children's Home</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-smooth hover:text-primary relative bg-transparent border-none outline-none cursor-pointer ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="gradient-primary shadow-medium hover:shadow-strong transition-smooth"
              onClick={() => { handleNavClick('/get-involved?tab=donate'); }}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 bg-transparent border-none outline-none cursor-pointer ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 rounded-md"
                      : "text-foreground/80"
                  }`}
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="default" 
                className="gradient-primary shadow-medium mt-4 mx-2"
                onClick={() => { handleNavClick('/get-involved?tab=donate'); }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;