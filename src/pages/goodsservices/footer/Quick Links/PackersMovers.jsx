import React from "react";

const PackersMovers = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Packers & Movers</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Safe, fast and professional packing & moving services for homes
          and businesses.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            About Our Service
          </h2>

          <p className="text-slate-600 mb-4">
            We provide complete Packers & Movers solutions including packing,
            loading, transportation, unloading and unpacking.
          </p>

          <p className="text-slate-600">
            Our trained professionals ensure your goods are handled carefully
            and delivered safely.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Offer
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Home Relocation</li>
            <li>✔ Office Shifting</li>
            <li>✔ Packing & Unpacking</li>
            <li>✔ Loading & Unloading</li>
            <li>✔ Insurance Coverage</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Our Packers & Movers?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-slate-600">
                Skilled staff with years of experience.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Safe Packing</h3>
              <p className="text-slate-600">
                High-quality packing materials.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-slate-600">
                Fast and punctual service.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Book Packers & Movers Today
        </h2>
        <p className="mb-6">
          Move your goods safely with our trusted team.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default PackersMovers;
