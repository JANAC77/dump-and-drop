import React from "react";

const Help = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section - Identical to Blog */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Find answers to common questions about our services and delivery process
        </p>
      </div>

      {/* Help Content - Identical Grid to Blog */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Help Topic 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            How do I book a car service?
          </h2>
          <p className="text-slate-600 mb-4">
            You can book a service directly through our app or website by 
            selecting 'Car Service', choosing your preferred package, and 
            picking a time slot.
          </p>
          <p className="text-slate-600 italic">
            Need immediate help? Contact our 24/7 booking hotline.
          </p>
        </div>

        {/* Help Topic 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            What items are restricted for delivery?
          </h2>
          <p className="text-slate-600 mb-4">
            We do not transport hazardous materials, illegal substances, or 
            flammable liquids. This ensures the safety of our drivers and your goods.
          </p>
          <p className="text-slate-600">
            Please refer to our full terms and conditions for a detailed list 
            of prohibited items.
          </p>
        </div>

        {/* Help Topic 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Can I track my goods in real-time?
          </h2>
          <p className="text-slate-600 mb-4">
            Yes! Once your delivery starts, you will receive a tracking link 
            via SMS and email to monitor the progress live on our map.
          </p>
          <p className="text-slate-600">
            Live tracking provides ETA updates and the driver's current location.
          </p>
        </div>

        {/* Help Topic 4 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            What is your refund policy?
          </h2>
          <p className="text-slate-600 mb-4">
            Cancellations made 24 hours before the scheduled service are 
            eligible for a full refund. Late cancellations may incur a small fee.
          </p>
          <p className="text-slate-600">
            Refunds are typically processed within 3-5 business days to your 
            original payment method.
          </p>
        </div>

      </div>

      {/* Optional Contact Footer (Matches the same container width) */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-slate-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="mb-4">Email us at support@example.com or call +1 (555) 000-0000</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Contact Support
          </button>
        </div>
      </div>

    </div>
  );
};

export default Help;