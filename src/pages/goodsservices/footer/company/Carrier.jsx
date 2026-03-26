import React from "react";

const Carrier = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Dump & Drop Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Fast, secure and affordable goods transportation services for your
          daily business and personal needs.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            About Dump & Drop
          </h2>

          <p className="text-slate-600 mb-4">
            Dump & Drop is our dedicated goods carrier service designed to
            transport items safely from pickup to drop location with speed
            and reliability.
          </p>

          <p className="text-slate-600">
            From small packages to bulk materials, we ensure smooth handling
            and timely delivery.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Provide
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Door-to-Door Pickup & Drop</li>
            <li>✔ Safe & Secure Transport</li>
            <li>✔ Real-Time Tracking</li>
            <li>✔ Professional Drivers</li>
            <li>✔ Affordable Pricing</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Dump & Drop?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-slate-600">
                Quick pickups and on-time delivery.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
              <p className="text-slate-600">
                Goods handled with proper safety measures.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Best Pricing</h3>
              <p className="text-slate-600">
                Cost-effective logistics solutions.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Book Dump & Drop Today
        </h2>

        <p className="mb-6">
          Send your goods safely with our trusted carrier service.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default Carrier;
