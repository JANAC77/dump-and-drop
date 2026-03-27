import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-blue-600/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-extrabold text-lg">Dump & Drop</h3>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Your trusted partner for car pooling and goods delivery services across India and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-bold text-base">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Car Pooling
                </Link>
              </li>
              <li>
                <Link to="/goodsservices" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Goods Delivery
                </Link>
              </li>
              <li>
                <Link to="/carservices" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Car Services
                </Link>
              </li>
              <li>
                <Link to="/driverquickride" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Driver Quick Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-bold text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-blue-200/80 hover:text-cyan-300 text-sm transition-colors hover:translate-x-1 inline-block">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-bold text-base">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-blue-200/80 text-sm">+91 9090300300</span>
              </div>
              <div className="flex items-center space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-blue-200/80 text-sm">support@dumpdrop.com</span>
              </div>
              <div className="flex items-start space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200/80 text-sm">
                  123 Business District,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/70 text-sm font-medium">
              © {currentYear} Dump & Drop. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-blue-200/70 hover:text-cyan-300 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-blue-200/70 hover:text-cyan-300 transition-colors hover:underline">
                Terms of Service
              </Link>
              <span className="text-blue-200/60">
                Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold">INNOMATRICS TECH.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;