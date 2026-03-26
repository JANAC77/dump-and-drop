import React from "react";

const Ahmedabad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Goods Service Delivery in Ahmedabad
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Trusted goods transport services across Ahmedabad.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Services in Ahmedabad
          </h2>
          <p className="text-slate-600 mb-4">
            Safe and timely delivery of goods for personal and business needs.
          </p>
          <p className="text-slate-600">
            We ensure fast and secure transportation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Deliver
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>✔ Household Goods</li>
            <li>✔ Machinery</li>
            <li>✔ Office Items</li>
            <li>✔ Parcels</li>
            <li>✔ Bulk Goods</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Ahmedabad;
