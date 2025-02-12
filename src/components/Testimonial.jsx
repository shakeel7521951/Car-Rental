import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/testimonial/testimonial.png)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col justify-around items-center "
    >
      <div className=" flex items-center flex-col gap-4">
        <button
          disabled
          className="bg-[#1572D3]/10 w-1/3 rounded-lg text-[#1572D3] p-3 poppins-normal"
        >
          {"Testimonial".toUpperCase()}
        </button>
        <h1 className="poppins-semibold text-4xl font-medium">
          What People say about us?
        </h1>
      </div>
      <div className="mb-12">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
