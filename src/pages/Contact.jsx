import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Get in touch with us for car services or goods delivery
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Contact Details
          </h2>

          <p className="text-slate-600 mb-3">
            📍 Address: 123 Service Street, City, Country
          </p>

          <p className="text-slate-600 mb-3">
            📞 Phone: +91 98765 43210
          </p>

          <p className="text-slate-600 mb-3">
            ✉ Email: support@dumpdrop.com
          </p>

          <p className="text-slate-600">
            ⏰ Working Hours: Mon - Sat (9:00 AM - 7:00 PM)
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow">

          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Send Us a Message
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block text-slate-600 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-slate-600 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;
