import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <div className="font-bold text-xl text-white">
                  Sunrise <span className="text-orange-500">Pharma</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Committed to providing high-quality pharmaceutical and nutraceutical products with complete compliance to industry standards.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Pharmaceutical</li>
              <li className="text-gray-400">Nutraceuticals</li>
              <li className="text-gray-400">Wellness Products</li>
              <li className="text-gray-400">Healthcare Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">
                  123 Pharma Street, Medical District, Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:info@sunrisepharma.com" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  info@sunrisepharma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Sunrise Pharma. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
