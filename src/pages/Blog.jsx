import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Tips, guides and updates about car services and goods delivery
        </p>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Blog 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            How Regular Car Servicing Saves You Money
          </h2>
          <p className="text-slate-600 mb-4">
            Regular car servicing helps prevent major breakdowns and improves
            vehicle performance. Simple maintenance like oil change, brake
            check and tire inspection can increase your car's lifespan.
          </p>
          <p className="text-slate-600">
            Investing in small services today can save big repair costs in
            the future.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Benefits of Professional Car Washing
          </h2>
          <p className="text-slate-600 mb-4">
            Professional car washing protects your paint, removes dirt safely,
            and keeps your vehicle looking new.
          </p>
          <p className="text-slate-600">
            A clean car also improves resale value and creates a better
            driving experience.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Safe Goods Delivery: What You Should Know
          </h2>
          <p className="text-slate-600 mb-4">
            Proper packaging, tracking and professional handling ensure your
            goods reach safely.
          </p>
          <p className="text-slate-600">
            Always choose a trusted delivery partner for valuable shipments.
          </p>
        </div>

        {/* Blog 4 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            How to Prepare Goods for Transportation
          </h2>
          <p className="text-slate-600 mb-4">
            Use strong boxes, label fragile items and seal packages properly
            before shipping.
          </p>
          <p className="text-slate-600">
            Proper preparation reduces damage risk during transport.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Blog;
