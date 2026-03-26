import React from "react";

const ZeroTolerancePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Zero Tolerance Policy</h1>
          <p className="mt-2 text-lg">
            Strict standards to ensure safety, respect, and professionalism.
          </p>
        </div>
      </div>

      {/* Intro Banner */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Important Notice
          </h2>
          <p className="text-slate-700">
            Any form of harassment, abuse, violence, or illegal activity will
            result in immediate action including suspension or termination.
          </p>
        </div>
      </div>

      {/* Timeline Style Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Harassment & Abuse</h3>
          <p className="text-slate-600">
            Verbal, physical, or digital harassment of any kind is strictly
            prohibited.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Violence & Threats</h3>
          <p className="text-slate-600">
            Acts of violence or threats towards customers, staff, or partners
            will not be tolerated.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Fraud & Dishonesty</h3>
          <p className="text-slate-600">
            Providing false information or engaging in fraudulent activity is
            prohibited.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Substance Abuse</h3>
          <p className="text-slate-600">
            Use of alcohol or drugs while on duty is strictly forbidden.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Discrimination</h3>
          <p className="text-slate-600">
            Discrimination based on race, gender, religion, or background will
            not be tolerated.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">Non-Compliance</h3>
          <p className="text-slate-600">
            Failure to follow company policies may result in termination.
          </p>
        </div>

      </div>

      {/* Action Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Report a Violation
        </h2>
        <p className="mb-4">
          Help us maintain a safe environment.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Report Now
        </button>
      </div>

    </div>
  );
};

export default ZeroTolerancePolicy;
