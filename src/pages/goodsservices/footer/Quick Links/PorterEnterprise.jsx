import React from "react";

const PorterEnterprise = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Porter Enterprise Solutions</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Enterprise-grade logistics and transportation solutions
          for growing businesses.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            About Enterprise Services
          </h2>

          <p className="text-slate-600 mb-4">
            Our enterprise logistics solutions are designed to handle
            large-scale transportation and supply chain needs.
          </p>

          <p className="text-slate-600">
            We offer customized logistics strategies for businesses
            of all sizes.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Offer
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Dedicated Fleet</li>
            <li>✔ Bulk Goods Transport</li>
            <li>✔ Warehouse-to-Warehouse Delivery</li>
            <li>✔ Real-Time Tracking</li>
            <li>✔ Contract-Based Services</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Enterprise Solutions?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-slate-600">
                Grow logistics as your business grows.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Reliable Operations</h3>
              <p className="text-slate-600">
                Consistent and dependable deliveries.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
              <p className="text-slate-600">
                Reduce logistics costs effectively.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Partner With Us
        </h2>

        <p className="mb-6">
          Build your enterprise logistics with confidence.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Sales
        </button>
      </div>

    </div>
  );
};

export default PorterEnterprise;
