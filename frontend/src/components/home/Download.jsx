import React from "react";
import phone from "../../assets/home/phonemockup.png";
import vector from "../../assets/home/Vector2.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="max-w-screen mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Section: Vector Background & Text */}
        <div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 py-10 min-h-[400px]"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="bg-blue-100 text-blue-700 px-8 py-2 rounded-full inline-block font-semibold text-sm">
            {"Download".toUpperCase()}
          </p>
          <h1 className="text-black poppins-semibold text-3xl md:text-5xl mt-4">
            Download Rentcars App for{" "}
            <span className="text-[#1572D3]">FREE</span>
          </h1>
          <p className="poppins-regular text-gray-700 mt-2">
            For faster, easier booking and exclusive deals
          </p>
          {/* Store Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link to="#">
              <img
                src="https://img.shields.io/badge/Playstore-4CAF50?style=for-the-badge&logo=google-play&logoColor=white"
                alt="Google Play Store"
                className="h-12 sm:h-8"
              />
            </Link>
            <Link to="#">
              <img
                src="https://img.shields.io/badge/App Store-00ADD8?style=for-the-badge&logo=apple&logoColor=white"
                alt="Apple App Store"
                className="h-12 sm:h-8"
              />
            </Link>
          </div>
        </div>

        {/* Right Section: Phone Mockup */}
        <div className="flex justify-center items-center mt-1 p-6 min-h-[400px]">
          <img
            src={phone}
            alt="Phone Mockup"
            className="w-full max-w-xs md:max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
