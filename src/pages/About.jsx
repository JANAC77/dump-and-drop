import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We provide reliable car services and fast goods delivery solutions
          designed to make your life easier.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Who We Are
          </h2>
          <p className="text-slate-600 mb-4">
            We are a professional service company offering high-quality
            vehicle maintenance and quick goods transportation services.
            Our mission is to deliver excellent service with trust,
            safety, and affordability.
          </p>

          <p className="text-slate-600">
            Whether you need your car serviced or goods delivered safely,
            our experienced team is always ready to help.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Offer
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>✔ Car Washing & Detailing</li>
            <li>✔ Vehicle Repair & Maintenance</li>
            <li>✔ Door-to-Door Goods Delivery</li>
            <li>✔ Fast & Secure Transportation</li>
            <li>✔ Affordable Pricing</li>
          </ul>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Reliable Service
              </h3>
              <p className="text-slate-600">
                We value your time and always deliver on schedule.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Expert Team
              </h3>
              <p className="text-slate-600">
                Skilled professionals with years of experience.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Affordable Price
              </h3>
              <p className="text-slate-600">
                Best quality service at reasonable cost.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Ready to Get Started?
        </h2>
        <p className="mb-6">
          Contact us today for car service or goods delivery.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default About;
