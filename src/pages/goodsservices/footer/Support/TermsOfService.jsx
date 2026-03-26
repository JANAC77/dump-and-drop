import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 text-slate-700">

        <section>
          <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by
            these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <p>
            We provide logistics, transportation, and delivery services
            as described on our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information</li>
            <li>Do not misuse the platform</li>
            <li>Follow applicable laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Payments</h2>
          <p>
            All payments must be completed before service execution
            unless stated otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cancellations & Refunds</h2>
          <p>
            Cancellation and refund policies vary depending on the
            service type.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
          <p>
            We are not responsible for indirect or consequential damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of
            services means acceptance of updates.
          </p>
        </section>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Need Help?
        </h2>
        <p className="mb-6">
          Contact us for any questions about our terms.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default TermsOfService;
