import { useState } from "react";

const faqData = [
  {
    question: "How much does it cost to hire a car in Pune?",
    answer: "On average, a car hire in Pune costs ₹ 2,500 per day.",
  },
  {
    question: "What is the most popular car hire in Pune?",
    answer: "Hatchback cars (Maruti Swift or similar) are the most frequently booked car hire type in Pune.",
  },
  {
    question: "What is the cheapest car hire company in Pune?",
    answer: "In the past 72 hours, the cheapest car hires were found at Zoomcar (₹ 1,200/day), Revv (₹ 1,500/day), and Myles (₹ 1,800/day).",
  },
  {
    question: "Can I rent a car in Pune without a driver?",
    answer: "Yes, self-drive rental cars are available from companies like Zoomcar, Revv, and Myles.",
  },
  {
    question: "What are the document requirements for renting a car in Pune?",
    answer: "You need a valid driving license, Aadhaar card (or passport for international tourists), and a refundable security deposit.",
  },
  {
    question: "Are there any special offers for car rentals in Pune?",
    answer: "Many companies offer weekend discounts, first-time user offers, and long-duration rental discounts.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
        FAQs About Car Rentals in Pune
      </h2>

      {faqData.slice(0, showAll ? faqData.length : 3).map((faq, index) => (
        <div key={index} className="border-b border-gray-300 dark:border-gray-600">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left flex justify-between items-center p-4 text-lg font-semibold text-gray-900 dark:text-white focus:outline-none"
          >
            {faq.question}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>

          {openIndex === index && (
            <p className="p-4 text-gray-700 dark:text-gray-300">{faq.answer}</p>
          )}
        </div>
      ))}

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full text-center mt-4 py-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Show More FAQs
        </button>
      )}
    </div>
  );
}
