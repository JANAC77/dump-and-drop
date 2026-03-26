import React from "react";

const Chandigarh = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Goods Service Delivery in Chandigarh
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Reliable and fast goods transportation services across Chandigarh.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Services in Chandigarh
          </h2>
          <p className="text-slate-600 mb-4">
            We provide safe and affordable goods delivery solutions for
            individuals and businesses.
          </p>
          <p className="text-slate-600">
            From small packages to heavy goods, we handle everything with care.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Deliver
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>✔ Household Goods</li>
            <li>✔ Office Items</li>
            <li>✔ Commercial Goods</li>
            <li>✔ E-commerce Parcels</li>
            <li>✔ Bulk Shipments</li>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Delivery in Chandigarh?
        </h2>
        <p className="mb-4">Book your goods transport today.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default Chandigarh;
