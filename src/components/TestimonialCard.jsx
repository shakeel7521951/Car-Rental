import React from "react";
import { useApi } from "../context";

const data1 = [
  {
    image:
      "https://images.unsplash.com/photo-1739056656210-7c3cab6fff42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    title: "CEO, Example Company",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus non neque bibendum finibus vel eget velit.",
  },
];

const TestimonialCard = () => {
  const { data, loading, error, fetchData } = useApi();
  console.log(data);
  return (
    <div className="max-w-md mx-auto">
      {data1.map((item, index) => {
        // Compute a random rating between 1 and 5
        const rating = Math.floor(Math.random() * 5) + 1;

        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white rounded-2xl shadow-lg mb-8"
          >
            {/* Left Column: Profile Image */}
            <div className="flex justify-center items-center">
              <img src={item.image} alt={item.name} className="h-auto" />
            </div>

            {/* Right Column: Testimonial Content */}
            <div className="flex flex-col justify-center">
              {/* Star Rating */}
              <div className="flex items-center mb-2">
                {Array.from({ length: rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {rating} Reviews
                </span>
              </div>
              {/* Testimonial Comment */}
              <p className="text-gray-700 mb-4">{item.content}</p>
              {/* User Info */}
              <div className="text-lg font-bold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-500">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialCard;
