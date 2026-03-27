import { Phone } from "lucide-react";

function FloatingCallButton() {
  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 group">
      <a
        href="tel:+919090300300"
        className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 active:from-green-600 active:to-emerald-700 text-white p-4 rounded-full shadow-xl shadow-green-500/40 hover:shadow-2xl hover:shadow-green-500/60 transition-all duration-300 transform hover:scale-125 active:scale-100 flex items-center justify-center border-4 border-white/30 hover:border-white/50"
        aria-label="Call us at +91 9090300300"
      >
        <Phone size={24} className="animate-pulse" />
      </a>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-gray-700">
        📞 Call Now
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
}

export default FloatingCallButton;