import { useState, useEffect } from "react";
import { Star } from "lucide-react"; // Importing star icon from lucide-react

const reviews = [
  { id: 1, name: "John Doe", rating: 5, text: "Excellent service!" },
  { id: 2, name: "Alice Smith", rating: 4, text: "Very convenient experience!" },
  { id: 3, name: "David Lee", rating: 5, text: "Great cars and smooth rides." },
  { id: 4, name: "Sophia Brown", rating: 4, text: "Loved the car and pricing." },
  { id: 5, name: "James Wilson", rating: 5, text: "Best rental service ever!" },
  { id: 6, name: "Emma Davis", rating: 4, text: "Very smooth experience!" },
  { id: 7, name: "Michael Clark", rating: 5, text: "Quick and easy booking!" },
  { id: 8, name: "Sarah Turner", rating: 4, text: "Affordable rates and good service." },
  { id: 9, name: "Chris Evans", rating: 5, text: "Great support and great cars!" },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center p-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      <br/><br/>
      <div className="overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 30.3333}%)`, // Adjust for three items in view
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-3 bg-gray-100 rounded-lg shadow-md flex-shrink-0 mx-2 sm:w-full md:w-1/3" // Responsive width
            >
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className={index < review.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="italic mt-2">{`"${review.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
