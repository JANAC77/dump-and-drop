// Carservices.jsx - Complete Backend Integration
import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Search,
  Car,
  User,
  Phone,
  CreditCard,
  CheckCircle,
  Loader2,
  Navigation,
  Star,
  ChevronRight,
  AlertCircle,
  Search as SearchIcon,
  LogIn,
  X,
  Shield,
  Eye,
  Copy
} from "lucide-react";
import { FaUsers, FaCarSide, FaLeaf, FaStar, FaRupeeSign } from "react-icons/fa";

// API Configuration
const BASE_URL = 'http://192.168.1.4:5000';

// Helper functions
const getToken = () => localStorage.getItem('token');
const getUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// API Functions
async function sendOTP(phone) {
  const res = await fetch(`${BASE_URL}/api/auth/send-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  });
  return res.json();
}

async function verifyOTP(phone, otp) {
  const res = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp, role: 'customer' })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
}

async function searchRides(from, to, seats = 1) {
  const token = getToken();
  if (!token) return { success: false, message: "Please login first" };
  
  const res = await fetch(
    `${BASE_URL}/api/ride/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&seats=${seats}`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  return res.json();
}

async function bookRide(rideId, fromCity, toCity, seats, pickupIndex, dropIndex) {
  const token = getToken();
  if (!token) return { success: false, message: "Please login first" };
  
  const res = await fetch(`${BASE_URL}/api/ride/${rideId}/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ rideId, fromCity, toCity, seats, pickupIndex, dropIndex })
  });
  return res.json();
}

async function getMyBookings() {
  const token = getToken();
  if (!token) return { success: false, rides: [] };
  
  const res = await fetch(`${BASE_URL}/api/ride/bookings/my`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

// NEW API Functions
async function getVehicleTypes() {
  const token = getToken();
  const res = await fetch(`${BASE_URL}/api/vehicles`, {
    headers: token ? { 'Authorization': `Bearer ${token}` } : {}
  });
  return res.json();
}

async function getRideFareEstimate(from, to, vehicleTypeId) {
  const token = getToken();
  const res = await fetch(
    `${BASE_URL}/api/ride/fare-estimate?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&vehicleType=${vehicleTypeId}`,
    {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    }
  );
  return res.json();
}

async function getRideDistance(from, to) {
  const token = getToken();
  const res = await fetch(
    `${BASE_URL}/api/ride/distance?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`,
    {
      headers: token ? { 'Authorization': `Bearer ${token}` } : {}
    }
  );
  return res.json();
}

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyBB1nInTVCBvXEel1Gqx8rNpoEvEIIYda8";

function Carservices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Airport");
  const scrollRef = useRef(null);
  
  // Auth State
  const [user, setUser] = useState(getUser());
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  // Search & Booking State
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupQuery, setPickupQuery] = useState("");
  const [dropQuery, setDropQuery] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicleOptions, setVehicleOptions] = useState([]); // From backend
  const [fareEstimate, setFareEstimate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState("search");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || ""
  });
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [activeRides, setActiveRides] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  const tabs = ["Airport", "Rental", "Outstation", "Local"];

  // Load vehicle types from backend
  useEffect(() => {
    const loadVehicleTypes = async () => {
      try {
        const result = await getVehicleTypes();
        if (result.success && result.vehicles) {
          setVehicleOptions(result.vehicles);
        } else {
          // Fallback to default vehicles if API fails
          setVehicleOptions([
            { id: "economy", name: "Economy", icon: "🚗", basePrice: 8, perKm: 8, capacity: 4, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200", description: "Affordable rides for daily commute" },
            { id: "sedan", name: "Sedan", icon: "🚙", basePrice: 12, perKm: 12, capacity: 4, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200", description: "Comfortable sedan for family" },
            { id: "suv", name: "SUV", icon: "🚐", basePrice: 15, perKm: 15, capacity: 6, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200", description: "Spacious SUV for groups" },
            { id: "premium", name: "Premium", icon: "✨", basePrice: 20, perKm: 20, capacity: 4, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=200", description: "Luxury ride experience" }
          ]);
        }
      } catch (error) {
        console.error("Error loading vehicle types:", error);
      }
    };
    
    loadVehicleTypes();
  }, []);

  // Load Google Maps Script for Places API
  useEffect(() => {
    let isMounted = true;

    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        return;
      }

      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) return;

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    return () => {
      isMounted = false;
    };
  }, []);

  // Get user's bookings on load
  useEffect(() => {
    if (user) {
      fetchMyBookings();
    }
  }, [user]);

  const fetchMyBookings = async () => {
    const result = await getMyBookings();
    if (result.success && result.rides) {
      setActiveRides(result.rides);
    }
  };

  // Helper function to generate random OTP (for development)
  const generateDevOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Auth Functions
  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      setAuthError("Please enter a valid 10-digit phone number");
      return;
    }
    
    setAuthLoading(true);
    setAuthError("");
    
    try {
      const result = await sendOTP(phone);
      if (result.success) {
        setOtpSent(true);
        
        // Show OTP in popup for development/testing
        if (result.otp) {
          setGeneratedOtp(result.otp);
        } else {
          const mockOtp = generateDevOTP();
          setGeneratedOtp(mockOtp);
        }
        setShowOtpPopup(true);
        
      } else {
        setAuthError(result.message || "Failed to send OTP");
      }
    } catch (error) {
      setAuthError("Network error. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length < 4) {
      setAuthError("Please enter the OTP");
      return;
    }
    
    setAuthLoading(true);
    setAuthError("");
    
    try {
      const result = await verifyOTP(phone, otp);
      if (result.success) {
        setUser(result.user);
        setUserDetails({
          name: result.user.name || "",
          phone: result.user.phone,
          email: result.user.email || ""
        });
        setShowAuthModal(false);
        setShowOtpPopup(false);
        setPhone("");
        setOtp("");
        setOtpSent(false);
        setGeneratedOtp("");
        
        // Refresh bookings after login
        fetchMyBookings();
      } else {
        setAuthError(result.message || "Invalid OTP");
      }
    } catch (error) {
      setAuthError("Network error. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  // Copy OTP to clipboard
  const copyOtpToClipboard = () => {
    navigator.clipboard.writeText(generatedOtp);
    alert("OTP copied to clipboard!");
  };

  // Auto-fill OTP from popup
  const autoFillOtp = () => {
    setOtp(generatedOtp);
    setShowOtpPopup(false);
  };

  // Get place predictions from Google Places API
  const getPlacePredictions = (input, setSuggestions, setShowDropdown) => {
    if (!input || input.length < 2) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    if (!window.google || !window.google.maps || !window.google.maps.places) {
      return;
    }

    try {
      const service = new window.google.maps.places.AutocompleteService();
      const request = {
        input: input,
        componentRestrictions: { country: 'in' },
        types: ['establishment', 'geocode']
      };

      service.getPlacePredictions(request, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          const formattedSuggestions = predictions.slice(0, 5).map(prediction => ({
            description: prediction.description,
            place_id: prediction.place_id,
            structured_formatting: prediction.structured_formatting
          }));
          setSuggestions(formattedSuggestions);
          setShowDropdown(true);
        } else {
          setSuggestions([]);
          setShowDropdown(false);
        }
      });
    } catch (error) {
      console.error("Error getting predictions:", error);
    }
  };

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Debounced search for pickup
  const debouncedPickupSearch = useRef(
    debounce((query) => {
      getPlacePredictions(query, setPickupSuggestions, setShowPickupDropdown);
    }, 300)
  ).current;

  // Debounced search for drop
  const debouncedDropSearch = useRef(
    debounce((query) => {
      getPlacePredictions(query, setDropSuggestions, setShowDropDropdown);
    }, 300)
  ).current;

  // Handle pickup input change
  const handlePickupChange = (e) => {
    const value = e.target.value;
    setPickupQuery(value);
    setPickupLocation(value);
    debouncedPickupSearch(value);
  };

  // Handle drop input change
  const handleDropChange = (e) => {
    const value = e.target.value;
    setDropQuery(value);
    setDropLocation(value);
    debouncedDropSearch(value);
  };

  // Select pickup location
  const selectPickup = (suggestion) => {
    setPickupLocation(suggestion.description);
    setPickupQuery(suggestion.description);
    setShowPickupDropdown(false);
  };

  // Select drop location
  const selectDrop = (suggestion) => {
    setDropLocation(suggestion.description);
    setDropQuery(suggestion.description);
    setShowDropDropdown(false);
  };

  const swapLocations = () => {
    const tempLocation = pickupLocation;
    const tempQuery = pickupQuery;
    
    setPickupLocation(dropLocation);
    setPickupQuery(dropQuery);
    setDropLocation(tempLocation);
    setDropQuery(tempQuery);
  };

  // Calculate distance and fare from backend
  const calculateDistanceAndFare = async () => {
    if (!pickupLocation || !dropLocation) return;
    
    try {
      // Get distance from backend
      const distanceResult = await getRideDistance(pickupLocation, dropLocation);
      if (distanceResult.success) {
        setDistance(distanceResult.distance);
        setDuration(distanceResult.duration);
        
        // If vehicle is selected, calculate fare
        if (selectedVehicle) {
          const fareResult = await getRideFareEstimate(pickupLocation, dropLocation, selectedVehicle.id);
          if (fareResult.success) {
            setFareEstimate(fareResult.fare);
          } else {
            // Calculate locally if backend fails
            const totalFare = selectedVehicle.basePrice + (distanceResult.distance * selectedVehicle.perKm);
            setFareEstimate(Math.round(totalFare));
          }
        }
      }
    } catch (error) {
      console.error("Error calculating distance:", error);
      // Fallback mock data
      const mockDistance = 12;
      const mockDuration = 30;
      setDistance(mockDistance);
      setDuration(mockDuration);
      
      if (selectedVehicle) {
        const totalFare = selectedVehicle.basePrice + (mockDistance * selectedVehicle.perKm);
        setFareEstimate(Math.round(totalFare));
      }
    }
  };

  // Search for rides from backend
  const searchAvailableRides = async () => {
    if (!pickupLocation || !dropLocation) {
      alert("Please enter both pickup and drop locations");
      return false;
    }
    
    if (!user) {
      setShowAuthModal(true);
      alert("Please login to search for rides");
      return false;
    }
    
    setLoading(true);
    
    try {
      const result = await searchRides(pickupLocation, dropLocation, selectedVehicle?.capacity || 1);
      
      if (result.success && result.rides) {
        setSearchResults(result.rides);
        
        // Calculate distance and fare
        await calculateDistanceAndFare();
        
        if (result.rides.length === 0) {
          alert("No rides found for this route. Please try different locations.");
        }
      } else {
        alert(result.message || "Failed to search rides");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
    
    return true;
  };

  const handleVehicleSelect = async (vehicle) => {
    setSelectedVehicle(vehicle);
    // Recalculate fare when vehicle is selected
    if (pickupLocation && dropLocation) {
      await calculateDistanceAndFare();
    }
  };

  const handleSelectRide = (ride) => {
    setSelectedRide(ride);
    setFareEstimate(ride.price || ride.fare);
    setBookingStep("confirm");
  };

  const handleProceedToBook = () => {
    if (!selectedVehicle) {
      alert("Please select a vehicle type");
      return;
    }
    if (!pickupLocation || !dropLocation) {
      alert("Please enter pickup and drop locations");
      return;
    }
    if (!user) {
      setShowAuthModal(true);
      alert("Please login to book a ride");
      return;
    }
    setBookingStep("confirm");
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedRide) {
      alert("Please select a ride from search results");
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await bookRide(
        selectedRide._id || selectedRide.id,
        pickupLocation,
        dropLocation,
        selectedVehicle?.capacity || 1,
        0,
        0
      );
      
      if (result.success) {
        const booking = {
          id: result.bookingId || result._id,
          pickup: pickupLocation,
          drop: dropLocation,
          date: dateTime || new Date().toISOString(),
          vehicle: selectedVehicle,
          fare: result.fare || fareEstimate,
          distance: distance,
          duration: duration,
          user: userDetails,
          status: "confirmed",
          bookingTime: new Date().toISOString()
        };
        
        setBookingDetails(booking);
        setBookingStep("success");
        await fetchMyBookings(); // Refresh bookings
      } else {
        alert(result.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchAgain = () => {
    setBookingStep("search");
    setSelectedVehicle(null);
    setSelectedRide(null);
    setFareEstimate(null);
    setBookingDetails(null);
    setDistance(null);
    setDuration(null);
    setSearchResults([]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setUserDetails({ name: "", phone: "", email: "" });
    setActiveRides([]);
  };

  // Render OTP Popup
  const renderOtpPopup = () => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1100] p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setShowOtpPopup(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">OTP Generated</h2>
          <p className="text-gray-500 text-sm mt-1">For testing purposes only</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6 border-2 border-dashed border-blue-300">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Your One-Time Password is:</p>
            <div className="flex items-center justify-center gap-3 mb-3">
              <p className="text-4xl font-mono font-bold tracking-wider text-blue-600">
                {generatedOtp}
              </p>
              <button
                onClick={copyOtpToClipboard}
                className="p-2 hover:bg-white rounded-lg transition"
                title="Copy OTP"
              >
                <Copy size={20} className="text-gray-500 hover:text-blue-600" />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              This OTP is valid for 5 minutes
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={autoFillOtp}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} />
            Auto-fill OTP
          </button>
          
          <button
            onClick={() => {
              setShowOtpPopup(false);
              setTimeout(() => {
                const otpInput = document.querySelector('#otp-input-field');
                if (otpInput) otpInput.focus();
              }, 100);
            }}
            className="w-full py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            Enter Manually
          </button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            Note: In production, OTP will be sent via SMS
          </p>
        </div>
      </div>
    </div>
  );

  // Render Auth Modal
  const renderAuthModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={() => {
            setShowAuthModal(false);
            setShowOtpPopup(false);
            setOtpSent(false);
            setPhone("");
            setOtp("");
          }}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Login / Signup</h2>
          <p className="text-gray-500 text-sm mt-1">Verify your phone number to continue</p>
        </div>
        
        {!otpSent ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter 10-digit mobile number"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendOTP}
                disabled={authLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {authLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send OTP"}
              </button>
            </div>
            {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
            <p className="text-sm text-gray-500 mb-3">OTP sent to {phone}</p>
            <div className="flex gap-2">
              <input
                id="otp-input-field"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 4-digit OTP"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                onClick={handleVerifyOTP}
                disabled={authLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {authLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify"}
              </button>
            </div>
            <button
              onClick={() => setOtpSent(false)}
              className="text-blue-600 text-sm mt-3 hover:underline"
            >
              Change phone number
            </button>
            {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}
          </div>
        )}
      </div>
    </div>
  );

  // Render suggestion dropdown
  const renderSuggestions = (suggestions, onSelect, show) => {
    if (!show || suggestions.length === 0) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(suggestion)}
            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-start gap-3 border-b border-gray-100 last:border-0"
          >
            <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-gray-800">{suggestion.description}</p>
              {suggestion.structured_formatting?.secondary_text && (
                <p className="text-xs text-gray-500 mt-0.5">{suggestion.structured_formatting.secondary_text}</p>
              )}
            </div>
          </button>
        ))}
      </div>
    );
  };

  // Render search view
  const renderSearchView = () => (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="w-full relative bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#0052d4] rounded-[32px] overflow-hidden shadow-2xl py-16 px-6 md:px-12">
          <div className="text-center mb-10">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Best Ride. Best Fare</h1>
            <p className="text-white/90 text-lg">Type to search for locations - Real places from Google Maps</p>
          </div>

          {/* User Status */}
          <div className="flex justify-end mb-4">
            {user ? (
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white text-sm">👋 {user.name || user.phone}</span>
                <button onClick={handleLogout} className="text-white/80 hover:text-white text-sm">Logout</button>
              </div>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition">
                Login / Signup
              </button>
            )}
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Booking Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Pickup */}
            <div className="bg-white rounded-2xl p-4 shadow-sm relative">
              <label className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                <MapPin size={14} /> Pickup Location
              </label>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={pickupQuery}
                  onChange={handlePickupChange}
                  onFocus={() => pickupQuery.length >= 2 && setShowPickupDropdown(true)}
                  placeholder="Type to search pickup location..."
                  className="w-full pl-9 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-700 placeholder-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="off"
                />
              </div>
              {renderSuggestions(pickupSuggestions, selectPickup, showPickupDropdown)}
            </div>

            {/* Drop */}
            <div className="bg-white rounded-2xl p-4 shadow-sm relative">
              <label className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                <MapPin size={14} /> Drop Location
              </label>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={dropQuery}
                  onChange={handleDropChange}
                  onFocus={() => dropQuery.length >= 2 && setShowDropDropdown(true)}
                  placeholder="Type to search drop location..."
                  className="w-full pl-9 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-700 placeholder-slate-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="off"
                />
              </div>
              {renderSuggestions(dropSuggestions, selectDrop, showDropDropdown)}
            </div>

            {/* When */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <label className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 cursor-pointer">
                <Calendar size={14} /> When
              </label>
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-slate-700 text-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={swapLocations}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition"
            >
              🔄 Swap Locations
            </button>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={searchAvailableRides}
              disabled={loading}
              className="bg-black text-white px-14 py-4 rounded-full font-bold text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search size={22} />}
              {loading ? "SEARCHING..." : "SEARCH CABS"}
            </button>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Available Rides</h2>
            <div className="space-y-4">
              {searchResults.map((ride) => (
                <div key={ride._id || ride.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{ride.driver?.name || "Driver"}</p>
                      <p className="text-sm text-gray-500">{ride.vehicle?.name || "Car"} • {ride.vehicle?.number || "Not specified"}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-gray-600">{ride.driver?.rating || 4.5}</span>
                        <span className="text-xs text-gray-400">• {ride.seatsAvailable || 0} seats left</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600 text-xl">₹{ride.fare || ride.price || 0}</p>
                    <button
                      onClick={() => handleSelectRide(ride)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vehicle Selection Section */}
      {(distance !== null || fareEstimate !== null) && vehicleOptions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Choose Your Ride</h2>
                <p className="text-gray-500 mt-1">
                  {distance && `${Math.round(distance)} km • approx ${duration} mins`}
                </p>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <p className="text-blue-600 font-semibold">
                  <FaRupeeSign className="inline mr-1" /> Estimated Fare
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleOptions.map((vehicle) => {
                const estimatedFare = distance ? Math.round(vehicle.basePrice + (distance * vehicle.perKm)) : vehicle.basePrice;
                return (
                  <div
                    key={vehicle.id}
                    onClick={() => handleVehicleSelect(vehicle)}
                    className={`cursor-pointer rounded-2xl border-2 p-4 transition-all duration-300 ${
                      selectedVehicle?.id === vehicle.id
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-4xl">{vehicle.icon || "🚗"}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {vehicle.capacity} seats
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">{vehicle.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{vehicle.description}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="font-bold text-blue-600 text-xl">₹{estimatedFare}</p>
                      <p className="text-xs text-gray-400">Base: ₹{vehicle.basePrice} + ₹{vehicle.perKm}/km</p>
                    </div>
                    {selectedVehicle?.id === vehicle.id && (
                      <div className="mt-3 flex justify-end">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {selectedVehicle && fareEstimate && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleProceedToBook}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition flex items-center gap-2"
                >
                  Proceed to Book
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* My Bookings Section */}
      {activeRides.length > 0 && bookingStep === "search" && (
        <section className="max-w-7xl mx-auto px-4 mt-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Car className="w-6 h-6 text-blue-600" />
              My Bookings
            </h2>
            <div className="space-y-4">
              {activeRides.slice(0, 3).map((ride) => (
                <div key={ride._id || ride.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-slate-800">From: {ride.fromCity}</p>
                    <p className="text-sm text-gray-500">To: {ride.toCity}</p>
                    <p className="text-xs text-gray-400 mt-1">Status: {ride.status || "Confirmed"}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">₹{ride.fare || ride.price}</p>
                    <p className="text-xs text-gray-400">{ride.date ? new Date(ride.date).toLocaleDateString() : "Upcoming"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );

  // Render confirmation view
  const renderConfirmView = () => (
    <div className="max-w-4xl mx-auto mt-12 mb-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
          <h2 className="text-2xl font-bold text-white">Confirm Your Booking</h2>
          <p className="text-white/80 mt-1">Review your ride details</p>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              Trip Summary
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Pickup Location</p>
                  <p className="text-gray-600">{pickupLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Drop Location</p>
                  <p className="text-gray-600">{dropLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Date & Time</p>
                  <p className="text-gray-600">{dateTime ? new Date(dateTime).toLocaleString() : "As soon as possible"}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-blue-600" />
              Vehicle Details
            </h3>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-xl shadow flex items-center justify-center overflow-hidden">
                <span className="text-5xl">{selectedVehicle?.icon || "🚗"}</span>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-600">{selectedVehicle?.name}</p>
                <p className="text-gray-600">{selectedVehicle?.description}</p>
                <p className="text-sm text-gray-500 mt-1">Capacity: {selectedVehicle?.capacity} persons</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">Fare Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-medium">₹{selectedVehicle?.basePrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distance ({distance} km × ₹{selectedVehicle?.perKm}/km)</span>
                <span className="font-medium">₹{Math.round(distance * selectedVehicle?.perKm)}</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2">
                <div className="flex justify-between font-bold">
                  <span>Total Fare</span>
                  <span className="text-blue-600 text-xl">₹{fareEstimate}</span>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleBookingSubmit}>
            <h3 className="font-bold text-lg mb-4">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={userDetails.phone}
                  onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10-digit mobile number"
                  required
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setBookingStep("search")}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Confirm & Pay
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const renderSuccessView = () => (
    <div className="max-w-2xl mx-auto mt-12 mb-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Your ride has been successfully booked. A confirmation has been sent to your phone.
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-bold text-lg mb-4 text-blue-600">Booking Details</h3>
          <div className="space-y-3">
            <p><span className="font-semibold">Booking ID:</span> {bookingDetails?.id}</p>
            <p><span className="font-semibold">Vehicle:</span> {bookingDetails?.vehicle?.name}</p>
            <p><span className="font-semibold">From:</span> {bookingDetails?.pickup}</p>
            <p><span className="font-semibold">To:</span> {bookingDetails?.drop}</p>
            <p><span className="font-semibold">Fare:</span> ₹{bookingDetails?.fare}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleSearchAgain}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Book Another Ride
          </button>
          <button 
            onClick={() => window.location.href = "/"}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // Main render
  return (
    <div className="min-h-screen bg-[#f5f9ff] pb-20">
      <div className="text-center mb-16 pt-8">            
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
          Dump & Drop
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-4xl md:text-5xl mt-3">
            Seamless Transport Solutions
          </span>
        </h1>
        <p className="text-slate-600 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
          Type in the search box - Real places from Google Maps will appear as suggestions
        </p>
      </div>

      {bookingStep === "search" && renderSearchView()}
      {bookingStep === "confirm" && renderConfirmView()}
      {bookingStep === "success" && renderSuccessView()}
      {showAuthModal && renderAuthModal()}
      {showOtpPopup && renderOtpPopup()}
    </div>
  );
}

export default Carservices