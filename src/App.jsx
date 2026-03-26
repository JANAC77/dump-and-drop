import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Cancellation from "./pages/Cancellation";
import DriverQuickRide from "./pages/DriverQuickRide";
import Contact from "./pages/Contact";
import Carservices from "./pages/carservices/Carservices";
import Goodsservices from "./pages/goodsservices/Goodsservices";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Carrier from "./pages/goodsservices/footer/company/Carrier";
import ApiIntegration from "./pages/goodsservices/footer/Quick Links/ApiIntegration";
import PackersMovers from "./pages/goodsservices/footer/Quick Links/PackersMovers";
import TwoWheeler from "./pages/goodsservices/footer/Quick Links/TwoWheeler";
import Trucks from "./pages/goodsservices/footer/Quick Links/Trucks";
import PorterEnterprise from "./pages/goodsservices/footer/Quick Links/PorterEnterprise";
import PrivacyPolicy from "./pages/goodsservices/footer/Support/PrivacyPolicy";
import TermsOfService from "./pages/goodsservices/footer/Support/TermsOfService";
import TermsOfServiceSSI from "./pages/goodsservices/footer/Support/TermsOfServiceSSI";
import InsuranceFAQs from "./pages/goodsservices/footer/Support/InsuranceFAQs";
import DriverPartnerTC from "./pages/goodsservices/footer/Support/DriverPartnerTC";
import ZeroTolerancePolicy from "./pages/goodsservices/footer/Support/ZeroTolerancePolicy";
import India from "./pages/goodsservices/footer/Countries/India";
import UnitedArabEmirates from "./pages/goodsservices/footer/Countries/UnitedArabEmirates";
import Turkey from "./pages/goodsservices/footer/Countries/Turkey";
import Delhi from "./pages/goodsservices/footer/cities/Delhi";
import Chandigarh from "./pages/goodsservices/footer/cities/Chandigarh";
import Ahmedabad from "./pages/goodsservices/footer/cities/Ahmedabad";
import Coimbatore from "./pages/goodsservices/footer/cities/Coimbatore";
import Visakhapatnam from "./pages/goodsservices/footer/cities/Visakhapatnam";
import Hyderabad from "./pages/goodsservices/footer/cities/Hyderabad";
import Jaipur from "./pages/goodsservices/footer/cities/Jaipur";
import Surat from "./pages/goodsservices/footer/cities/Surat";
import Kochi from "./pages/goodsservices/footer/cities/Kochi";
import Trivandrum from "./pages/goodsservices/footer/cities/Trivandrum";
import Bangalore from "./pages/goodsservices/footer/cities/Bangalore";
import Chennai from "./pages/goodsservices/footer/cities/Chennai";
import Nagpur from "./pages/goodsservices/footer/cities/Nagpur";
import Ludhiana from "./pages/goodsservices/footer/cities/Ludhiana";
import Mumbai from "./pages/goodsservices/footer/cities/Mumbai";
import Kolkata from "./pages/goodsservices/footer/cities/Kolkata";
import Lucknow from "./pages/goodsservices/footer/cities/Lucknow";
import Nashik from "./pages/goodsservices/footer/cities/Nashik";
import Vadodara from "./pages/goodsservices/footer/cities/Vadodara";
import Indore from "./pages/goodsservices/footer/cities/Indore";
import Pune from "./pages/goodsservices/footer/cities/Pune";
import Kanpur from "./pages/goodsservices/footer/cities/Kanpur";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Cancellation" element={<Cancellation />} />
            <Route path="/DriverQuickRide" element={<DriverQuickRide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Carservices />} />
            <Route path="/goodsservices" element={<Goodsservices />} />
            <Route path="carrier" element={<Carrier />} />
            <Route path ="ApiIntegration" element={<ApiIntegration />} />
            <Route path="/PackersMovers" element={<PackersMovers />} />
            <Route path="/two-wheeler" element={<TwoWheeler />} />
            <Route path="/Trucks" element={<Trucks />} />
            <Route path="/porter-enterprise" element={<PorterEnterprise />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/terms-ssi" element={<TermsOfServiceSSI />} />
            <Route path="/insurance-faqs" element={<InsuranceFAQs />} />
            <Route path="/driver-partner-terms" element={<DriverPartnerTC />} />
            <Route path="/zero-tolerance-policy" element={<ZeroTolerancePolicy />} />
            <Route path="/india" element={<India />} />
            <Route path="/uae" element={<UnitedArabEmirates />} />
            <Route path="/turkey" element={<Turkey />} />
            <Route path="/delhi" element={<Delhi />} />
            <Route path="/chandigarh" element={<Chandigarh />} />
            <Route path="/ahmedabad" element={<Ahmedabad />} />
            <Route path="/coimbatore" element={<Coimbatore />} />
            <Route path="/visakhapatnam" element={<Visakhapatnam />} />
            <Route path="/hyderabad" element={<Hyderabad />} />
            <Route path="/jaipur" element={<Jaipur />} />
            <Route path="/surat" element={<Surat />} />
            <Route path="/kochi" element={<Kochi />} />
            <Route path="/trivandrum" element={<Trivandrum />} />
            <Route path="/bangalore" element={<Bangalore />} />
            <Route path="/chennai" element={<Chennai />} />
            <Route path="/nagpur" element={<Nagpur />} />
            <Route path="/ludhiana" element={<Ludhiana />} />
            <Route path="/mumbai" element={<Mumbai />} />
            <Route path="/kolkata" element={<Kolkata />} />
            <Route path="/lucknow" element={<Lucknow />} />
            <Route path="/nashik" element={<Nashik />} />
            <Route path="/vadodara" element={<Vadodara />} />
            <Route path="/indore" element={<Indore />} />
            <Route path="/pune" element={<Pune />} />
            <Route path="/kanpur" element={<Kanpur />} />
          </Routes>
        </div>
        <Marquee />
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
