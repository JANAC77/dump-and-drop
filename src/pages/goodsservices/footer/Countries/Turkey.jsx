import React from "react";

const Turkey = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Split Hero */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-3">Services in Turkey</h1>
            <p className="text-lg">
              Trusted logistics and transport solutions across Turkey.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xl font-semibold">
              Fast • Secure • Reliable
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
          <p className="text-slate-600">
            Serving major regions and cities across Turkey.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Flexible Transport</h3>
          <p className="text-slate-600">
            Small parcels to heavy cargo delivery.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Business Logistics</h3>
          <p className="text-slate-600">
            Enterprise logistics solutions for companies.
          </p>
        </div>

      </div>

      {/* Services & Cities */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-10">

        {/* Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Available Services
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Two Wheeler Delivery</li>
            <li>✔ Truck Transport</li>
            <li>✔ Packers & Movers</li>
            <li>✔ Dump & Drop</li>
            <li>✔ Enterprise Solutions</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Popular Cities
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Istanbul",
              "Ankara",
              "Izmir",
              "Bursa",
              "Antalya",
              "Adana"
            ].map((city, i) => (
              <span
                key={i}
                className="bg-white shadow px-4 py-2 rounded-full text-slate-700"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Logistics in Turkey?
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

export default Turkey;
