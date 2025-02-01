import { useState } from "react";

const offers = [
  { id: 1, title: "25% Off", details: "On first ride within 10 km", code: "FIRST25" },
  { id: 2, title: "₹500 Off", details: "On rides over 100 km", code: "SAVE500" },
  { id: 3, title: "New Year Deal", details: "70% off first ride, 50% off others", code: "NY2025" },
  { id: 4, title: "Chinese New Year", details: "25% off on every ride", code: "CNY25" },
  { id: 5, title: "Weekend Special", details: "30% off on Saturdays & Sundays", code: "WEEKEND30" },
  { id: 6, title: "Long Trip", details: "Flat 15% off on rentals above 5 days", code: "LONG15" },
];

export default function AvailableOffers() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div className="w-full p-6 text-center dark:bg-gray-900 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Available Offers</h2>
      <br/><br/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="p-4 rounded-lg shadow-md bg-blue-500 text-white hover:bg-red-500 dark:bg-blue-800 dark:text-white hover:dark:bg-red-600 transition-colors duration-300 cursor-pointer"
            onClick={() => setSelectedOffer(offer)}
          >
            <h3 className="text-lg font-bold">{offer.title}</h3>
            <p>{offer.details}</p>
          </div>
        ))}
      </div>

      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg dark:bg-gray-800 dark:text-white">
            <h3 className="text-xl font-bold">{selectedOffer.title}</h3>
            <p>{selectedOffer.details}</p>
            <p className="mt-2 font-semibold text-red-500 dark:text-red-400">Use Code: {selectedOffer.code}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded dark:bg-gray-600 dark:text-white"
              onClick={() => setSelectedOffer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
