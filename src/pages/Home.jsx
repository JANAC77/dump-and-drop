import { useState } from "react";
import { 
  ChevronRight, Car, Package, Sparkles, MapPin, 
  Calendar, Shield, Clock, Star, CheckCircle 
} from "lucide-react";
import { FaCarSide, FaWind, FaBox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("Airport");
  
  // State for Outstation sub-selection (One Way / Round Trip)
  const [tripType, setTripType] = useState("One Way");

  const tabs = ["Airport", "Rental", "Outstation", "Local"];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50 px-4 py-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
              Dump & Drop
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-4xl md:text-5xl mt-3">
                Seamless Transport Solutions
              </span>
            </h1>

            <p className="text-slate-600 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
              Choose your service to continue. Fast, reliable and secure transportation.<br></br>
              <span className="text-blue-600 font-semibold ml-2">Your journey begins here 🚀</span>
            </p>
          </div>

          {/* Main Booking Card */}
          <div className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-blue-500/20 mb-16 overflow-hidden animate-gradient">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Best Ride. Best Fare</h2>
              <p className="text-blue-100/80">Get instant pricing & book in seconds</p>
            </div>

            {/* Main Tabs with Images */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab 
                      ? "bg-white text-blue-600 shadow-lg shadow-white/20" 
                      : "bg-blue-500/80 hover:bg-blue-400 backdrop-blur-sm"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    {/* Image icons for each tab */}
                    {tab === "Airport" && (
                      <img src="/src/assets/images/airport-icon.png" alt="Airport" className="w-8 h-8 object-contain" />
                    )}
                    {tab === "Rental" && (
                      <img src="/src/assets/images/rental-icon.png" alt="Rental" className="w-8 h-8 object-contain" />
                    )}
                    {tab === "Outstation" && (
                      <img src="/src/assets/images/outstation-icon.png" alt="Outstation" className="w-8 h-8 object-contain" />
                    )}
                    {tab === "Local" && (
                      <img src="/src/assets/images/local-icon.png" alt="Local" className="w-8 h-8 object-contain" />
                    )}
                    {tab}
                  </div>
                </button>
              ))}
            </div>

            {/* Outstation Sub-Tabs: Shows only when Outstation is selected */}
            <div className={`flex justify-center gap-8 mb-8 transition-all duration-300 ${activeTab === "Outstation" ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
              <button 
                onClick={() => setTripType("One Way")}
                className={`text-xl font-bold pb-1 transition-all ${tripType === "One Way" ? "border-b-4 border-white text-white" : "text-blue-100/60"}`}
              >
                One Way
              </button>
              <button 
                onClick={() => setTripType("Round Trip")}
                className={`text-xl font-bold pb-1 transition-all ${tripType === "Round Trip" ? "border-b-4 border-white text-white" : "text-blue-100/60"}`}
              >
                Round Trip
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Column 1: Pickup */}
              <div className="bg-white/95 backdrop-blur-sm text-black p-5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
                <label className="font-semibold flex items-center gap-2 uppercase text-xs tracking-wider text-slate-500">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Pickup
                </label>
                <div className="flex items-center mt-3 border-b border-slate-200 pb-1">
                  <input 
                    placeholder="Enter pickup location" 
                    className="w-full outline-none bg-transparent placeholder-slate-400 text-lg"
                  />
                  <MapPin className="w-4 h-4 text-slate-400 cursor-pointer" />
                </div>
              </div>

              {/* Column 2: Drop Location OR Rental Packages */}
              <div className="bg-white/95 backdrop-blur-sm text-black p-5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
                {activeTab === "Rental" ? (
                  <>
                    <label className="font-semibold flex items-center gap-2 uppercase text-xs tracking-wider text-slate-500">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Select Package
                    </label>
                    <div className="flex items-center mt-3 border-b border-slate-200 pb-1">
                      <select className="w-full outline-none bg-transparent text-slate-700 text-lg cursor-pointer appearance-none">
                        <option value="">Select hourly package</option>
                        <option value="1">1 hr - 10 km</option>
                        <option value="2">2 hr - 20 km</option>
                        <option value="4">4 hr - 40 km</option>
                        <option value="8">8 hr - 80 km</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <label className="font-semibold flex items-center gap-2 uppercase text-xs tracking-wider text-slate-500">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Drop
                    </label>
                    <div className="flex items-center mt-3 border-b border-slate-200 pb-1">
                      <input 
                        placeholder="Enter drop location" 
                        className="w-full outline-none bg-transparent placeholder-slate-400 text-lg"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Column 3: Schedule */}
              <div className="bg-white/95 backdrop-blur-sm text-black p-5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
                <label className="font-semibold flex items-center gap-2 uppercase text-xs tracking-wider text-slate-500">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  When
                </label>
                <div className="flex items-center mt-3 border-b border-slate-200 pb-1">
                  <input 
                    type="datetime-local" 
                    className="w-full outline-none bg-transparent text-slate-700 text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button className="bg-black text-white px-16 py-4 rounded-full font-bold text-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-xl uppercase tracking-widest">
                SEARCH CABS
              </button>
            </div>
          </div>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
            {/* CAR CARD */}
            <div
              onMouseEnter={() => setHoveredCard("car")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border border-blue-100 cursor-pointer transition-all duration-500 overflow-hidden group
                ${hoveredCard === "car" ? "scale-[1.02] shadow-2xl shadow-blue-200" : "shadow-lg"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                      <Car className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Car Services</h3>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <img 
                    src="/src/assets/images/car-service.png" 
                    alt="Car Services"
                    className="rounded-xl w-full max-w-sm h-40 object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Book premium car services and enjoy comfortable rides with live tracking.
                  <span className="block text-sm text-slate-500 mt-2">AC • Live Tracking • 24/7 Support</span>
                </p>
                <button
                  onClick={() => navigate("/carservices")}
                  className="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold w-full group/btn hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Continue
                  <ChevronRight className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* GOODS CARD */}
            <div
              onMouseEnter={() => setHoveredCard("goods")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border border-blue-100 cursor-pointer transition-all duration-500 overflow-hidden group
                ${hoveredCard === "goods" ? "scale-[1.02] shadow-2xl shadow-blue-200" : "shadow-lg"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                      <Package className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Goods Delivery</h3>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <img 
                    src="/src/assets/images/delivery-service.png" 
                    alt="Goods Delivery"
                    className="rounded-xl w-full max-w-sm h-40 object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Secure delivery for packages of all sizes with live tracking.
                  <span className="block text-sm text-slate-500 mt-2">Insured • Tracking • Same Day Delivery</span>
                </p>
                <button
                  onClick={() => navigate("/goodsservices")}
                  className="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold w-full group/btn hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Continue
                  <ChevronRight className="ml-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;