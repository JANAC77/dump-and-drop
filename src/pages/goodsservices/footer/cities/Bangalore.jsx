import React from "react";

const Bangalore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Goods Service Delivery in Bangalore
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Fast, safe, and affordable goods transportation services across Bangalore.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Goods Delivery Services in Bangalore
          </h2>

          <p className="text-slate-600 mb-4">
            Reliable goods transportation for homes and businesses across Bangalore.
          </p>

          <p className="text-slate-600">
            From small packages to large cargo, we deliver safely and on time.
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

      {/* Areas */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Areas We Serve in Bangalore
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 shadow rounded-lg">Whitefield</div>
            <div className="p-4 shadow rounded-lg">Electronic City</div>
            <div className="p-4 shadow rounded-lg">Indiranagar</div>
            <div className="p-4 shadow rounded-lg">BTM Layout</div>
            <div className="p-4 shadow rounded-lg">Yelahanka</div>
            <div className="p-4 shadow rounded-lg">Hebbal</div>
            <div className="p-4 shadow rounded-lg">Marathahalli</div>
            <div className="p-4 shadow rounded-lg">Rajajinagar</div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Goods Delivered in Bangalore?
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

export default Bangalore;
