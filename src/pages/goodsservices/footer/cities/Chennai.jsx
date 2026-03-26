import React from "react";

const Chennai = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Goods Service Delivery in Chennai
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Fast, safe, and affordable goods transportation services across Chennai.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Goods Delivery Services in Chennai
          </h2>

          <p className="text-slate-600 mb-4">
            Professional goods transport solutions for Chennai customers.
          </p>

          <p className="text-slate-600">
            Safe and timely doorstep delivery.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Deliver
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Household Goods</li>
            <li>✔ Office Equipment</li>
            <li>✔ Industrial Materials</li>
            <li>✔ E-commerce Parcels</li>
            <li>✔ Bulk Shipments</li>
          </ul>
        </div>

      </div>

      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Areas We Serve in Chennai
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 shadow rounded-lg">T Nagar</div>
            <div className="p-4 shadow rounded-lg">Velachery</div>
            <div className="p-4 shadow rounded-lg">Anna Nagar</div>
            <div className="p-4 shadow rounded-lg">Adyar</div>
            <div className="p-4 shadow rounded-lg">Tambaram</div>
            <div className="p-4 shadow rounded-lg">Porur</div>
            <div className="p-4 shadow rounded-lg">Ambattur</div>
            <div className="p-4 shadow rounded-lg">Guindy</div>
          </div>

        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Goods Delivered in Chennai?
        </h2>
        <p className="mb-4">
          Book your delivery now and experience hassle-free logistics.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default Chennai;
