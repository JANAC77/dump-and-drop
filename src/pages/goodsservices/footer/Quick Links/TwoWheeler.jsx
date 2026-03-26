import React from "react";

const TwoWheeler = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Two Wheeler Transport</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Fast and safe two-wheeler transportation and delivery services.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            About Two Wheeler Service
          </h2>

          <p className="text-slate-600 mb-4">
            Our two-wheeler service is perfect for quick deliveries,
            small goods transport, and short-distance logistics.
          </p>

          <p className="text-slate-600">
            We ensure speed, safety, and reliability for every delivery.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Offer
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Quick Pickups</li>
            <li>✔ Same Day Delivery</li>
            <li>✔ Secure Handling</li>
            <li>✔ Affordable Rates</li>
            <li>✔ Trained Riders</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Two Wheeler Service?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-slate-600">
                Reach destination quickly.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Low Cost</h3>
              <p className="text-slate-600">
                Budget-friendly pricing.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-slate-600">
                Trusted delivery partners.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Book Two Wheeler Service
        </h2>

        <p className="mb-6">
          Send your goods quickly with our two-wheeler service.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default TwoWheeler;
