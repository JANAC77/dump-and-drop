import React from "react";

const TermsOfServiceSSI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service - SSI</h1>
          <p className="mt-2 text-lg">
            Simple, Secure & Intelligent service terms
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white shadow rounded-xl p-6 h-fit">
          <h3 className="font-semibold text-lg mb-4 text-slate-800">
            Sections
          </h3>
          <ul className="space-y-3 text-blue-600">
            <li>Acceptance</li>
            <li>Services</li>
            <li>User Duties</li>
            <li>Payments</li>
            <li>Liability</li>
            <li>Updates</li>
          </ul>
        </aside>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-6">

          {/* Card 1 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-slate-600">
              By using SSI services, you agree to follow and be bound by
              these Terms of Service.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Services Overview
            </h2>
            <p className="text-slate-600">
              SSI provides logistics, transportation, delivery and enterprise
              solutions based on customer needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              <li>Provide accurate information</li>
              <li>Use services lawfully</li>
              <li>Respect company policies</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Payments & Billing
            </h2>
            <p className="text-slate-600">
              Payments must be completed as per selected service plan.
              Delays may result in cancellation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p className="text-slate-600">
              SSI is not responsible for indirect, incidental or
              consequential damages.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              Updates to Terms
            </h2>
            <p className="text-slate-600">
              Terms may be updated periodically. Continued use means
              acceptance of changes.
            </p>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need Clarification?
        </h2>
        <p className="mb-4">
          Contact our support team for assistance.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Support
        </button>
      </div>

    </div>
  );
};

export default TermsOfServiceSSI;
