import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 fill-primary-foreground" />
              <div>
                <h3 className="font-bold text-lg">Motherly Care</h3>
                <p className="text-sm opacity-90">Children's Home & School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing hope and building futures for vulnerable children in Kenya through education, 
              care, and empowerment programs.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/children", label: "Our Children" },
                { href: "/programs", label: "Programs" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-smooth"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get Involved</h4>
            <div className="space-y-2">
              {[
                { href: "/get-involved#sponsor", label: "Sponsor a Child" },
                { href: "/get-involved#volunteer", label: "Volunteer" },
                { href: "/get-involved#donate", label: "Make a Donation" },
                { href: "/get-involved#fundraise", label: "Fundraise" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 transition-smooth"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>Ruai, Nairobi</p>
                  <p>Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">info@motherlycare.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              <p>&copy; 2025 Motherly Care Children's Home. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/privacy" className="hover:opacity-100 transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;