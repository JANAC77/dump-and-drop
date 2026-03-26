import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Your privacy is important to us. This policy explains how we
          collect, use, and protect your information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8 text-slate-700">

        <section>
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, phone
            number, email address, and delivery details when you use our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our services</li>
            <li>To process bookings and payments</li>
            <li>To improve customer experience</li>
            <li>To send service-related updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Data Protection</h2>
          <p>
            We use secure systems and industry-standard practices to
            protect your data from unauthorized access or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Sharing of Information</h2>
          <p>
            We do not sell or rent your personal data. Information may
            be shared only with trusted partners to complete services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            Our website may use cookies to improve performance and user
            experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any
            changes will be posted on this page.
          </p>
        </section>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Questions About Privacy?
        </h2>
        <p className="mb-6">
          Contact us for more information.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
