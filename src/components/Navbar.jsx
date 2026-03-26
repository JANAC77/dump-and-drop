import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, LogIn, UserPlus, Menu, X } from "lucide-react"; 
import LoginForm from "./LoginForm";
import dumpLogo from "../assets/images/DUMP.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Updated style: added whitespace-nowrap to prevent text splitting
  const navLinkStyle = "relative flex items-center gap-3 text-gray-800 hover:text-blue-600 font-bold transition-all duration-300 text-[15px] cursor-pointer group px-4 py-2 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100";
  
  const navLinks = [
    { 
      name: "Car Pooling", 
      href: "/", 
      icon: <img src="/src/assets/images/car-icon.png" alt="Car Pooling" className="w-15 h-15 object-contain" />
    },
    { 
      name: "Goods Delivery", 
      href: "/goodsservices", 
      icon: <img src="/src/assets/images/delivery-icon.png" alt="Goods Delivery" className="w-15 h-15 object-contain" />
    },
    { 
      name: "About", 
      href: "/about", 
      icon: <img src="/src/assets/images/about-icon.png" alt="About" className="w-10 h-10 object-contain" />
    },
    { 
      name: "Blog", 
      href: "/blog", 
      icon: <img src="/src/assets/images/blog-icon.png" alt="Blog" className="w-10 h-10 object-contain" />
    },
    { 
      name: "Contact Us", 
      href: "/contact", 
      icon: <img src="/src/assets/images//contact-icon.png" alt="Contact Us" className="w-10 h-10 object-contain" />
    }
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-[100] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-24"> {/* Increased height to h-24 to accommodate w-15 icons */}
          
          {/* 1. Hamburger (Mobile) */}
          <div className="md:hidden flex">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={28} className="text-blue-600" /> : <Menu size={28} />}
            </button>
          </div>

          {/* 2. Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
    
                {/* Logo Image */}
                <img
                  src={dumpLogo}
                  alt="Dump & Drop Logo"
                  className="h-24 w-24 md:h-24 md:w-24 object-contain"
                />
                {/* Brand Name */}
                <span className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tighter">
                  Dump <span className="text-blue-600">&</span> Drop
                </span>

              </Link>
          </div>

          {/* 3. Desktop Navigation - Added 'flex-nowrap' here */}
          <div className="hidden md:flex flex-nowrap items-center justify-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={navLinkStyle}>
                <span className="shrink-0">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* 4. User Profile */}
          <div className="flex-shrink-0 relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border-2 
                ${open ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-400 bg-gray-50"}`}
            >
              <User className={open ? "text-blue-600" : "text-gray-600"} size={20} />
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-xl shadow-xl ring-1 ring-black/10 overflow-hidden">
                <div className="p-2">
                  <button onClick={() => { setAuthMode("login"); setShowAuth(true); setOpen(false); }} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                    <LogIn size={18} /> Login
                  </button>
                  <button onClick={() => { setAuthMode("signup"); setShowAuth(true); setOpen(false); }} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                    <UserPlus size={18} /> Create Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5. Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-20 w-full bg-white border-b border-gray-200 shadow-lg">
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={navLinkStyle}>
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {showAuth && (
        <LoginForm mode={authMode} onClose={() => setShowAuth(false)} />
      )}
    </>
  );
}

export default Navbar;