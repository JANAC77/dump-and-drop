import React from "react";

const India = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">Services in India</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Delivering fast, reliable, and affordable logistics services across India.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Presence in India
          </h2>

          <p className="text-slate-600 mb-4">
            We operate in multiple cities across India, providing high-quality
            logistics, transportation, and delivery solutions.
          </p>

          <p className="text-slate-600">
            Our goal is to connect businesses and individuals with seamless
            transport services nationwide.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Services Available
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Two Wheeler Delivery</li>
            <li>✔ Truck Transport</li>
            <li>✔ Packers & Movers</li>
            <li>✔ Dump & Drop</li>
            <li>✔ Enterprise Logistics</li>
          </ul>
        </div>

      </div>

      {/* Cities Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Major Cities We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="p-4 shadow rounded-lg">Delhi</div>
            <div className="p-4 shadow rounded-lg">Mumbai</div>
            <div className="p-4 shadow rounded-lg">Bangalore</div>
            <div className="p-4 shadow rounded-lg">Hyderabad</div>
            <div className="p-4 shadow rounded-lg">Chennai</div>
            <div className="p-4 shadow rounded-lg">Pune</div>
            <div className="p-4 shadow rounded-lg">Kolkata</div>
            <div className="p-4 shadow rounded-lg">Ahmedabad</div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Looking for Services in Your City?
        </h2>
        <p className="mb-4">
          Contact us to check availability near you.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default India;
