import React from "react";

const Cancellation = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Cancellation Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Transparent rules regarding booking changes, refunds, and service cancellations
        </p>
      </div>

      {/* Policy Content - Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Section 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Standard Car Services
          </h2>
          <p className="text-slate-600 mb-4">
            Cancellations made more than 24 hours before the scheduled appointment 
            are eligible for a full 100% refund to the original payment method.
          </p>
          <p className="text-slate-600">
            For cancellations within 24 hours, a 15% service fee will be deducted 
            to cover the technician's preparation time.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Goods Delivery & Logistics
          </h2>
          <p className="text-slate-600 mb-4">
            Once a driver has been dispatched to your pickup location, a 
            cancellation fee will apply based on the distance already traveled.
          </p>
          <p className="text-slate-600">
            If the goods have already been loaded onto the vehicle, the delivery 
            cannot be cancelled, but it can be rerouted for an additional fee.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            Refund Processing Time
          </h2>
          <p className="text-slate-600 mb-4">
            Approved refunds are initiated immediately. However, it may take 
            3 to 7 business days for the funds to appear in your bank account.
          </p>
          <p className="text-slate-600">
            This timeline depends entirely on your financial institution's 
            processing policies.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3 text-slate-800">
            How to Cancel
          </h2>
          <p className="text-slate-600 mb-4">
            You can cancel any active booking through the 'My Bookings' section 
            of your profile or by clicking the link in your confirmation email.
          </p>
          <p className="text-slate-600">
            For emergency cancellations, please contact our support team via 
            live chat for immediate assistance.
          </p>
        </div>

      </div>

      {/* Warning/Note Footer */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-orange-700">
                <strong>Note:</strong> Subscription members may be entitled to 
                free late cancellations twice per month. Please check your 
                membership dashboard for details.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cancellation;