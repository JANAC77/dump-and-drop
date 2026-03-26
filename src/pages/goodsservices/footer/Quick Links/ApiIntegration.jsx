import React, { useEffect, useState } from "react";

const ApiIntegration = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Example API Call
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setData(result.slice(0, 5)); // show only 5 records
      } catch (error) {
        console.error("API Error:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">API Integration</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Seamless and secure API integration solutions for your applications.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            What We Do
          </h2>

          <p className="text-slate-600 mb-4">
            We integrate third-party APIs and internal services into your
            applications to enable smooth data communication.
          </p>

          <ul className="space-y-3 text-slate-600">
            <li>✔ REST API Integration</li>
            <li>✔ Payment Gateway Integration</li>
            <li>✔ Authentication APIs</li>
            <li>✔ Real-time Data APIs</li>
            <li>✔ Secure & Scalable Setup</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Sample API Response
          </h2>

          {loading ? (
            <p className="text-slate-600">Loading data...</p>
          ) : (
            <div className="bg-white p-4 rounded-lg shadow">
              {data.map((item) => (
                <div key={item.id} className="border-b py-2">
                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why Choose Our API Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Fast Integration
              </h3>
              <p className="text-slate-600">
                Quick setup with clean architecture.
              </p>
            </div>

            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Secure
              </h3>
              <p className="text-slate-600">
                Encrypted and protected endpoints.
              </p>
            </div>

            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Scalable
              </h3>
              <p className="text-slate-600">
                Built to handle growth.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Need API Integration?
        </h2>
        <p className="mb-6">
          Let us connect your systems smoothly.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default ApiIntegration;
