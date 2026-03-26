import React from "react";

const DriverQuickRide = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Drive with Quick Ride</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Turn your spare time into earnings. Join our network of professional 
          drivers and delivery partners today.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Flexible Earning Schedule
          </h2>
          <p className="text-slate-600 mb-4">
            With Quick Ride, you are your own boss. You choose when you want to 
            drive and for how long. There are no minimum hours or fixed shifts.
          </p>
          <p className="text-slate-600">
            Simply toggle your status to 'Online' whenever you're ready to start 
            accepting ride or delivery requests.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Dual Income Streams
          </h2>
          <p className="text-slate-600 mb-4">
            Maximize your time on the road by switching between passenger rides 
            and goods delivery. Our smart dispatch system finds the closest job for you.
          </p>
          <p className="text-slate-600">
            Whether it's a quick commute for a passenger or a package delivery, 
            you'll always have opportunities to earn.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Instant Payouts
          </h2>
          <p className="text-slate-600 mb-4">
            No more waiting for the end of the month. Our Quick Pay feature 
            allows you to transfer your daily earnings directly to your bank 
            account instantly.
          </p>
          <p className="text-slate-600">
            Track your tips, bonuses, and base fares in real-time through the 
            integrated Driver Dashboard.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Driver Safety & Support
          </h2>
          <p className="text-slate-600 mb-4">
            Your safety is our priority. Every trip is GPS-tracked, and we 
            provide 24/7 emergency support through the app.
          </p>
          <p className="text-slate-600">
            We also offer vehicle maintenance discounts at our partner service 
            centers to keep your car in top shape.
          </p>
        </div>

      </div>

      {/* Call to Action Footer */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-blue-600 text-white p-10 rounded-lg text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to hit the road?</h2>
          <p className="mb-6 text-blue-100 max-w-xl mx-auto">
            Upload your documents, complete a quick background check, and start 
            earning within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Register as a Driver
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Download Driver App
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DriverQuickRide;