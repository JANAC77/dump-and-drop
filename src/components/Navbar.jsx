import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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

  // Premium nav link styling with gradient effects
  const navLinkStyle = "relative flex items-center text-blue-100 hover:text-cyan-300 font-semibold transition-all duration-300 text-[14px] cursor-pointer group px-4 py-2 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-400 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 hover:bg-white/5 rounded-lg";
  
  const getNavLinkClass = ({ isActive }) => 
    isActive 
      ? "relative flex items-center text-cyan-300 font-semibold transition-all duration-300 text-[14px] cursor-pointer group px-4 py-2 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-400 after:scale-x-100 bg-white/10 rounded-lg"
      : navLinkStyle;
  
  const navLinks = [
    { 
      name: "Car Pooling", 
      href: "/", 
    },
    { 
      name: "Goods Delivery", 
      href: "/goodsservices", 
    },
    { 
      name: "About", 
      href: "/about", 
    },
    { 
      name: "Blog", 
      href: "/blog", 
    },
    { 
      name: "Contact Us", 
      href: "/contact", 
    }
  ];

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 backdrop-blur-xl shadow-2xl shadow-blue-900/50 sticky top-0 z-[100] px-4 sm:px-6 lg:px-16 border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          
          {/* 1. Hamburger (Mobile) */}
          <div className="md:hidden flex">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
              {mobileMenuOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>

          {/* 2. Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1">
    
                {/* Logo Image */}
                <img
                  src={dumpLogo}
                  alt="Dump & Drop Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain drop-shadow-lg"
                />
                {/* Brand Name */}
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white tracking-tighter">
                  Dump <span className="text-cyan-400">&</span> Drop
                </span>

              </Link>
          </div>

          {/* 3. Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.href} className={getNavLinkClass}>
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* 4. User Profile */}
          <div className="flex-shrink-0 relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border-2 
                ${open ? "border-cyan-400 bg-cyan-500/20" : "border-blue-400/30 hover:border-cyan-400 bg-blue-500/10 hover:bg-cyan-500/20"}`}
            >
              <User className={open ? "text-cyan-300" : "text-white"} size={20} />
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
          <div className="md:hidden absolute left-0 top-20 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-xl rounded-b-xl transition-all duration-300 ease-in-out">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={getNavLinkClass}>
                  <span>{link.name}</span>
                </NavLink>
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