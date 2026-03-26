import React from "react";

const Trucks = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Truck Transport Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Reliable truck transportation for heavy and bulk goods delivery.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            About Truck Service
          </h2>

          <p className="text-slate-600 mb-4">
            Our truck service is designed for transporting heavy,
            large, and bulk goods safely and efficiently.
          </p>

          <p className="text-slate-600">
            We offer multiple truck sizes based on your delivery needs.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Offer
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Small, Medium & Large Trucks</li>
            <li>✔ Local & Long Distance Transport</li>
            <li>✔ Safe Loading & Unloading</li>
            <li>✔ GPS Tracking</li>
            <li>✔ Affordable Pricing</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Our Truck Service?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Heavy Load Experts</h3>
              <p className="text-slate-600">
                Specialized in heavy transportation.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-slate-600">
                Punctual and dependable service.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-slate-600">
                Competitive pricing.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Book Truck Service Now
        </h2>

        <p className="mb-6">
          Transport your heavy goods with confidence.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default Trucks;
