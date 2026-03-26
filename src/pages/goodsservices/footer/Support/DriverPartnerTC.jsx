import React from "react";

const DriverPartnerTC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Driver Partner Terms & Conditions
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Please read these terms carefully before joining as a driver partner.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 text-slate-700">

        {/* Section 1 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Eligibility
          </h2>
          <p>
            Driver partners must be at least 18 years old and possess a valid
            driving license along with required vehicle documents.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Registration & Verification
          </h2>
          <p>
            All drivers must complete identity verification and vehicle
            verification before accepting bookings.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Driver Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide safe and timely deliveries</li>
            <li>Maintain professional behavior</li>
            <li>Keep vehicle in good condition</li>
            <li>Follow traffic laws</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Earnings & Payments
          </h2>
          <p>
            Earnings will be credited based on completed trips. Payment cycles
            and deductions are subject to company policy.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Prohibited Activities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transporting illegal goods</li>
            <li>Misuse of platform</li>
            <li>Providing false information</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Termination
          </h2>
          <p>
            The company reserves the right to suspend or terminate driver
            accounts for violations of these terms.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Updates to Terms
          </h2>
          <p>
            These terms may be updated periodically. Continued usage means
            acceptance of updated terms.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Want to Become a Driver Partner?
        </h2>
        <p className="mb-4">
          Join us and start earning today.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default DriverPartnerTC;
