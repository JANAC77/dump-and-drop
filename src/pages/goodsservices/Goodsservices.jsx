import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaXTwitter 
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  User, 
  Phone, 
  ChevronRight, 
  Search,
  Truck,
  ArrowLeft,
  Coins,
  Globe,
  Zap,
  Package,
  ChevronDown,
  ArrowRight
} from "lucide-react";

// Assets
import light from "../../assets/images/light.png";
import heavy from "../../assets/images/heavy.png";
import banner from "../../assets/images/banner.jpg";


function GoodsServices() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('light');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const vehicleData = {
    light: [
      { id: 1, name: '3 Wheeler', weight: '500kg', price: '160', size: '5ft x 6ft', img: light },
      { id: 2, name: 'Tata Ace', weight: '750kg', price: '205', size: '6ft x 7ft', img: light },
    ],
    heavy: [
      { id: 3, name: 'Pickup 8ft', weight: '1000kg', price: '300', size: '8ft x 5ft', img: heavy },
      { id: 4, name: 'Tata 407', weight: '2500kg', price: '550', size: '14ft x 6ft', img: heavy },
    ]
  };

  const routesData = [
    { destination: "Sabar Kantha", distance: "112 Kms", fare: "2000" },
    { destination: "Bharuch", distance: "112 Kms", fare: "4000" },
    { destination: "Banas Kantha", distance: "216 Kms", fare: "2500" },
    { destination: "Bhavnagar", distance: "171 Kms", fare: "2600" },
    { destination: "Panch Mahals", distance: "124 Kms", fare: "2800" },
    { destination: "Patan", distance: "129 Kms", fare: "2600" }
  ];

  const faqs = [
    {
      question: "What happens in case of an accident or breakdown?",
      answer: "We provide comprehensive assistance to handle logistics smoothly. Our support team is available 24/7 to coordinate vehicle replacements and ensure your goods remain safe and on schedule."
    },
    {
      question: "How do I determine the right truck size?",
      answer: "Consider the total weight and dimensions of your cargo. Our 'Light' category is perfect for household items or small business deliveries under 750kg, while 'Heavy' handles industrial loads."
    },
    {
      question: "Are the drivers background-checked?",
      answer: "Yes, every partner driver undergoes a rigorous ID verification and background check process to ensure the highest standards of safety for your cargo."
    },
    {
      question: "Can I book a 1.7-ton pickup truck for business or personal goods?",
      answer: "Absolutely! You can instantly book a 1.7-ton pickup truck to transport business or personal goods anywhere in Ahmedabad. Our cost-effective solutions allow you to shift items safely, reliably, and within your budget."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <style>
        {`
          .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(5, 71, 148, 0.1);
          }
          .gradient-bg {
            background: linear-gradient(135deg, #054794 0%, #00AFF5 100%);
          }
          .footer-hover:hover {
            color: #bfdbfe !important;
          }
          .social-hover:hover {
            background: rgba(0, 175, 245, 0.2) !important;
          }
          .input-divider {
            position: relative;
          }
          @media (min-width: 768px) {
            .input-divider::after {
              content: '';
              position: absolute;
              right: 0;
              top: 20%;
              height: 60%;
              width: 1px;
              background-color: #e5e7eb;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-[380px] md:min-h-[520px] pt-10 md:pt-20 pb-20 px-4 overflow-hidden bg-contain bg-center bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: `url(${banner})`,
          backgroundColor: '#30b0c6' 
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="md:-ml-20 flex items-center gap-2 text-white/90 hover:text-white mb-4 md:mb-6 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-2 rounded-full group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={22} />
            </div>
          </button>

          <div className="text-center mb-12 text-sky-1000">
            <h1 className="text-4xl md:text-6xl font-extrabold  mb-4 md:mb-6 leading-tight">
              Smart & Seamless
            </h1>
            <p className="text-sky-1000 text-lg md:text-xl max-w-3xl mx-auto px-4">
              Economical rates, real-time tracking, and verified vehicles for all your personal and business logistics.
            </p>
          </div>

          {/* UI BOOKING CARD */}
          <div className="max-w-6xl mx-auto mt-10">
            {/* City Selection Tag */}
            <div className="inline-flex items-center bg-white px-5 py-3 rounded-t-xl shadow-lg border-b border-gray-50">
              <MapPin className="text-blue-600 mr-2" size={18} />
              <span className="font-bold text-gray-800 border-b border-dotted border-gray-400 pb-0.5">Choose City</span>
              <ChevronDown className="ml-2 text-gray-400" size={16} />
            </div>

            {/* Main Search Container */}
            <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 w-full">
                
                {/* Pickup Address */}
                <div className="px-6 py-4 md:py-5 input-divider">
                  <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-1">
                    Pickup Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Pickup Location" 
                    className="w-full focus:outline-none text-[15px] font-medium text-gray-600 placeholder:text-gray-300" 
                  />
                </div>

                {/* Drop Address */}
                <div className="px-6 py-4 md:py-5 input-divider">
                  <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-1">
                    Drop Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Drop Location" 
                    className="w-full focus:outline-none text-[15px] font-medium text-gray-600 placeholder:text-gray-300" 
                  />
                </div>

                {/* Name */}
                <div className="px-6 py-4 md:py-5 input-divider">
                  <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Name" 
                    className="w-full focus:outline-none text-[15px] font-medium text-gray-600 placeholder:text-gray-300" 
                  />
                </div>

                {/* Phone Number */}
                <div className="px-6 py-4 md:py-5">
                  <label className="block text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter Mobile" 
                    className="w-full focus:outline-none text-[15px] font-medium text-gray-600 placeholder:text-gray-300" 
                  />
                </div>

              </div>
              {/* Action Button */}
              <button className="w-full md:w-auto px-8 md:px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-bold transition-all duration-300 shadow-xl text-md flex items-center justify-center gap-3 whitespace-nowrap">
                Get Fare Estimate <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16 -mt-6 md:-mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg card-hover transition-all duration-300 border border-blue-50">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-fit mb-6">
              <Coins className="text-[#054794]" size={32} />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 text-[#054794]">Transparent Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              No hidden costs. Get instant fare estimates based on your vehicle choice and distance, ensuring you stay within budget every time.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg card-hover transition-all duration-300 border border-blue-50">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-fit mb-6">
              <Zap className="text-[#054794]" size={32} />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 text-[#054794]">Instant Booking</h3>
            <p className="text-gray-600 leading-relaxed">
              Book a mini-truck in seconds. Our wide network of partners ensures a vehicle is dispatched to your location almost immediately.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg card-hover transition-all duration-300 border border-blue-50">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl w-fit mb-6">
              <Globe className="text-[#054794]" size={32} />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4 text-[#054794]">Intercity Hub</h3>
            <p className="text-gray-600 leading-relaxed">
              Moving goods between cities? Our specialized long-distance fleet handles bulk transport across major industrial corridors with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-blue-50">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#054794]">Select Your Fleet</h2>
              <p className="text-gray-500 mt-1">Choose the right capacity for your cargo</p>
            </div>
            <div className="flex bg-blue-50 p-1.5 rounded-2xl w-full md:w-auto">
              <button 
                onClick={() => setActiveTab('light')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'light' ? 'bg-white text-[#054794] shadow-md' : 'text-gray-500 hover:text-[#054794]'}`}
              >
                Light ({"<"}750kg)
              </button>
              <button 
                onClick={() => setActiveTab('heavy')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'heavy' ? 'bg-white text-[#054794] shadow-md' : 'text-gray-500 hover:text-[#054794]'}`}
              >
                Heavy ({">"}750kg)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleData[activeTab].map((vehicle) => (
              <div key={vehicle.id} className="bg-white p-8 rounded-2xl border border-blue-50 card-hover transition-all duration-300 flex flex-col items-center text-center shadow-sm">
                <div className="relative mb-6">
                  <div className="absolute -left-10 top-1/2 -rotate-90 text-[10px] font-bold text-blue-300 uppercase tracking-widest">{vehicle.size}</div>
                  <img src={vehicle.img} alt={vehicle.name} className="h-32 md:h-40 object-contain" />
                </div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  <Package size={16} /> Capacity: {vehicle.weight}
                </div>
                <h3 className="text-2xl font-bold text-[#054794] mb-2">{vehicle.name}</h3>
                <p className="text-gray-500 mb-6">Base fare starts at <span className="text-[#00AFF5] font-bold text-xl">₹{vehicle.price}</span></p>
                <button className="w-full py-3 rounded-xl border-2 border-blue-100 text-[#054794] font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Check Availability <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intercity Routes Section */}
      <section className="bg-gradient-to-r from-[#054794] to-[#2a6cbb] py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Popular Intercity Routes</h2>
              <p className="text-blue-100">Competitive long-distance fares from Ahmedabad</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routesData.map((route, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 cursor-pointer transition-all duration-300 border border-white/10 group">
                <div>
                  <span className="font-semibold text-white text-lg">to {route.destination}</span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-blue-100 text-sm italic">
                      <Truck size={14} /> {route.distance}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white text-xl">₹{route.fare}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#054794] mb-4">Logistics FAQs</h2>
        <div className="max-w-3xl mx-auto mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-sm border border-blue-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#054794] pr-8">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronRight className="text-[#00AFF5]" size={24} />
                  </div>
                </div>
                <div className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BLUE THEME FOOTER */}
      <footer className="bg-gradient-to-b from-[#054794] to-[#003366] text-white pt-16 pb-12 font-sans px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white">DUMP & DROP</h2>
              <div className="w-full border-b border-blue-700 mb-8"></div>
              
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Follow us on</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 cursor-pointer transition-colors social-hover">
                    <FaFacebookF size={16} className="text-blue-200" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 cursor-pointer transition-colors social-hover">
                    <FaXTwitter size={16} className="text-blue-200" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 cursor-pointer transition-colors social-hover">
                    <FaYoutube size={16} className="text-blue-200" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 cursor-pointer transition-colors social-hover">
                    <FaInstagram size={16} className="text-blue-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li>
                  <a href="/about" className="footer-hover cursor-pointer transition-colors duration-300">About Us</a>
                </li>
                <li>
                  <a href="/Carrier" className="footer-hover cursor-pointer transition-colors duration-300">Careers</a>
                </li>
                <li>
                  <a href="/blog" className="footer-hover cursor-pointer transition-colors duration-300">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li>
                  <a href="/ApiIntegration" className="footer-hover cursor-pointer transition-colors duration-300">API Integrations</a>
                </li>
                <li>
                  <a href="/PackersMovers" className="footer-hover cursor-pointer transition-colors duration-300">Packers & Movers</a>
                </li>
                <li>
                  <a href="/two-wheeler" className="footer-hover cursor-pointer transition-colors duration-300">Two Wheelers</a>
                </li>
                <li>
                  <a href="/trucks" className="footer-hover cursor-pointer transition-colors duration-300">Trucks</a>
                </li>
                <li>
                  <a href="/porter-enterprise" className="footer-hover cursor-pointer transition-colors duration-300">Porter Enterprise</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li>
                  <a href="/contact" className="footer-hover cursor-pointer transition-colors duration-300">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy" className="footer-hover cursor-pointer transition-colors duration-300">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service" className="footer-hover cursor-pointer transition-colors duration-300">Terms of Service</a>
                </li>
                <li>
                  <a href="/terms-ssi" className="footer-hover cursor-pointer transition-colors duration-300">Terms of Service - SSI</a>
                </li>
                <li>
                  <a href="/insurance-faqs" className="footer-hover cursor-pointer transition-colors duration-300">Insurance FAQs</a>
                </li>
                <li>
                  <a href="/driver-partner-terms" className="footer-hover cursor-pointer transition-colors duration-300">Driver Partner T&C</a>
                </li>
                <li>
                  <a href="/zero-tolerance-policy" className="footer-hover cursor-pointer transition-colors duration-300">Zero Tolerance Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Countries</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li>
                  <a href="/india" className="footer-hover cursor-pointer transition-colors duration-300">India</a>
                </li>
                <li>
                  <a href="/uae" className="footer-hover cursor-pointer transition-colors duration-300">United Arab Emirates</a>
                </li>
                <li>
                  <a href="/turkey" className="footer-hover cursor-pointer transition-colors duration-300">Turkey</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-10 mb-12">
          <h4 className="text-lg font-bold mb-8 text-white">Domestic Cities</h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-4 text-sm text-blue-300">

            {[
              { name: "Delhi NCR", path: "/delhi" },
              { name: "Hyderabad", path: "/hyderabad" },
              { name: "Bangalore", path: "/bangalore" },
              { name: "Mumbai", path: "/mumbai" },
              { name: "Vadodara", path: "/vadodara" },

              { name: "Chandigarh", path: "/chandigarh" },
              { name: "Jaipur", path: "/jaipur" },
              { name: "Chennai", path: "/chennai" },
              { name: "Kolkata", path: "/kolkata" },
              { name: "Indore", path: "/indore" },

              { name: "Ahmedabad", path: "/ahmedabad" },
              { name: "Surat", path: "/surat" },
              { name: "Nagpur", path: "/nagpur" },
              { name: "Lucknow", path: "/lucknow" },
              { name: "Pune", path: "/pune" },

              { name: "Coimbatore", path: "/coimbatore" },
              { name: "Kochi", path: "/kochi" },
              { name: "Ludhiana", path: "/ludhiana" },
              { name: "Nashik", path: "/nashik" },
              { name: "Kanpur", path: "/kanpur" },

              { name: "Visakhapatnam", path: "/visakhapatnam" },
              { name: "Trivandrum", path: "/trivandrum" }
            ].map((city) => (
              <span key={city.name}>
                <Link
                  to={city.path}
                  className="footer-hover cursor-pointer transition-colors duration-300"
                >
                  {city.name}
                </Link>
              </span>
            ))}

          </div>
        </div>


        </div>
      </footer>
    </div>
  );
}

export default GoodsServices;