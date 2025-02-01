import { useState } from "react";

export default function AvailableCities() {
  const [cities] = useState([
    {
      name: "Mumbai",
      regional: "मुंबई",
      image: "/images/cities/mumbai.jpg",
    },
    {
      name: "Delhi",
      regional: "दिल्ली",
      image: "/images/cities/delhi.jpg",
    },
    {
      name: "Bengaluru",
      regional: "ಬೆಂಗಳೂರು",
      image: "/images/cities/bengaluru.jpg",
    },
    {
      name: "Chennai",
      regional: "சென்னை",
      image: "/images/cities/chennai.jpg",
    },
    {
      name: "Hyderabad",
      regional: "హైదరాబాద్",
      image: "/images/cities/hyderabad.jpg",
    },
    {
      name: "Pune",
      regional: "पुणे",
      image: "/images/cities/pune.png",
    },
    {
      name: "Kolkata",
      regional: "কলকাতা",
      image: "/images/cities/kolkata.jpg",
    },
    {
      name: "Amedabad",
      regional: "અમદાવાદ",
      image: "/images/cities/amedabad.jpg",
    },
    {
      name: "Jaipur",
      regional: "जयपुर",
      image: "/images/cities/jaipur.jpg",
    },
    {
      name: "Lucknow",
      regional: "लखनऊ",
      image: "/images/cities/lucknow.jpg",
    },
  ]);

  // Function to Open Google Maps
  const openGoogleMaps = (city) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city)}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="container mx-auto px-6 py-10 text-gray-800 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Cities</h1>
      <p className="text-center mb-8">
        Our car rental services are available in the following cities</p>

      {/* Grid Layout for City Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-blue-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md 
            transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 
            hover:bg-blue-200 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => openGoogleMaps(city.name)}
          >
            <img src={city.image} alt={city.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">{city.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{city.regional}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p>
          <strong>Wheels On Demand</strong> | © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
