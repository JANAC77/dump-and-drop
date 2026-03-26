import React, { useState } from "react";
import { Mail, Lock, UserPlus, LogIn, X } from "lucide-react";

function LoginForm({ mode = "login", onClose }) {
  const [formType, setFormType] = useState(mode);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      console.log("Login Data:", formData);
      alert("Login submitted");
    } else {
      console.log("Signup Data:", formData);
      alert("Signup submitted");
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen bg-slate-100/50 backdrop-blur-md flex items-center justify-center z-[9999] p-4">
      {/* Centered Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-100 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              {formType === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-slate-500 text-sm">
              {formType === "login" 
                ? "Sign in to continue your journey" 
                : "Join our community of travelers today"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 px-1">
                <Mail size={14} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Lock size={14} /> Password
                </label>
                {formType === "login" && (
                  <button type="button" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    Forgot?
                  </button>
                )}
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] hover:opacity-95 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-8"
            >
              {formType === "login" ? (
                <>Sign In <LogIn size={18} className="group-hover:translate-x-1 transition-transform" /></>
              ) : (
                <>Get Started <UserPlus size={18} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-medium">Or</span></div>
          </div>

          {/* Switch Mode */}
          <div className="text-center">
            <span className="text-sm text-slate-500">
              {formType === "login" ? "Don't have an account?" : "Already a member?"}{" "}
            </span>
            <button
              onClick={() => setFormType(formType === "login" ? "signup" : "login")}
              className="text-sm text-blue-600 hover:text-blue-800 font-bold hover:underline transition-all"
            >
              {formType === "login" ? "Create one now" : "Sign in here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;