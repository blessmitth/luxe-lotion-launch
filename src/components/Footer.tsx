import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Luxe Cream
            </h3>
            <p className="font-poppins text-background/80 mb-6 leading-relaxed">
              Transform your skincare routine with our premium, naturally-inspired formulations. 
              Experience the luxury your skin deserves.
            </p>
            <div className="flex gap-4">
              <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-background/10 p-3 rounded-full hover:bg-background/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-poppins text-background/80">
                  hello@luxecream.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-poppins text-background/80">
                  1-800-LUXE-SKIN
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-poppins text-background/80">
                  New York, NY
                </span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Stay Updated
            </h4>
            <p className="font-poppins text-background/80 mb-4">
              Get skincare tips and exclusive offers
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-poppins text-background/60 text-sm">
              © 2024 Luxe Cream. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-poppins text-background/60 hover:text-background transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-poppins text-background/60 hover:text-background transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="font-poppins text-background/60 hover:text-background transition-colors text-sm">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;