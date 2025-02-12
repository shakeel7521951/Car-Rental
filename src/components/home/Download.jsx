import React from "react";
import phone from "../../assets/home/phonemockup.png";
import vector from "../../assets/home/Vector2.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 py-12">
      {/* Left Section: Vector Image & Text */}
      <div className="relative flex justify-center">
        <img src={vector} alt="Vector" className="w-full h-auto max-w-lg" />
        <div className="absolute md:top-1/4 sm:mx-auto left-6 md:left-12 flex flex-col sm:justify-center gap-4 text-white">
          <button className="text-[#1572D3]  poppins-normal w-2/3 px-6 py-3 bg-[#1572D3]/10 border border-[#1572D3] rounded-xl hover:bg-white transition">
            DOWNLOAD
          </button>
          <h1 className="text-black poppins-semibold text-3xl md:text-5xl">
            Download Rentcars App for{" "}
            <span className="text-[#1572D3]">FREE</span>
          </h1>
          <h6 className="poppins-regular text-black">
            For Faster, easier booking and exclusive deals
          </h6>
          {/* Store Buttons */}
          <div className="flex my-6 gap-4">
            <Link href="#">
              <img
                src="https://img.shields.io/badge/Playstore-4CAF50?style=for-the-badge&logo=google-play&logoColor=white"
                alt="Google Play Store"
                className="h-10"
              />
            </Link>
            <Link href="#">
              <img
                src="https://img.shields.io/badge/App Store-00ADD8?style=for-the-badge&logo=apple&logoColor=white"
                alt="Apple App Store"
                className="h-10"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section: Phone Mockup */}
      <div className="flex justify-center">
        <img
          src={phone}
          alt="Phone Mockup"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default Download;
