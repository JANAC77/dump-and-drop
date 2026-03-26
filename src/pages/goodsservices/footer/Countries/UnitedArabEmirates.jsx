import React from "react";

const UnitedArabEmirates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">Services in United Arab Emirates</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Reliable logistics and transportation solutions across the UAE.
        </p>
      </div>

      {/* Info Blocks */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Our Presence</h2>
          <p className="text-slate-600">
            We operate across major emirates providing fast and efficient
            logistics services.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">What We Deliver</h2>
          <p className="text-slate-600">
            From small packages to heavy goods, we transport it all.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Business Solutions</h2>
          <p className="text-slate-600">
            Customized enterprise logistics for growing companies.
          </p>
        </div>

      </div>

      {/* Services List */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Available Services
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Two Wheeler Delivery</li>
            <li>✔ Truck Transport</li>
            <li>✔ Packers & Movers</li>
            <li>✔ Dump & Drop</li>
            <li>✔ Enterprise Logistics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Cities We Serve
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>Dubai</li>
            <li>Abu Dhabi</li>
            <li>Sharjah</li>
            <li>Ajman</li>
            <li>Ras Al Khaimah</li>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Logistics in UAE?
        </h2>
        <p className="mb-4">
          Contact us to get started today.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default UnitedArabEmirates;
