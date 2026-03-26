import React, { useState } from "react";

const faqData = [
  {
    question: "What does insurance cover?",
    answer:
      "Insurance covers loss or damage to goods during transportation due to accidents, theft, fire, or natural disasters."
  },
  {
    question: "Is insurance mandatory?",
    answer:
      "Insurance is optional but highly recommended for valuable or fragile goods."
  },
  {
    question: "How do I add insurance to my booking?",
    answer:
      "You can select the insurance option while booking a service or request it from customer support."
  },
  {
    question: "How is claim amount calculated?",
    answer:
      "Claim amount is based on declared item value and policy terms."
  },
  {
    question: "How long does claim processing take?",
    answer:
      "Most claims are processed within 7–10 working days after document verification."
  }
];

const InsuranceFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold mb-2">Insurance FAQs</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Find answers to common questions about insurance coverage.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">
                {faq.question}
              </h3>
              <span className="text-blue-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-slate-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Still Have Questions?
        </h2>
        <p className="mb-4">
          Contact our support team for more details.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Support
        </button>
      </div>

    </div>
  );
};

export default InsuranceFAQs;
