import React from "react";
import headerCar from "../../assets/home/headerCar.png";
import blueShadow from "../../assets/home/blueShadow.png";
import googlePlay from "../../assets/home/googlePlay.png";
import appStore from "../../assets/home/appStore.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] my-4 sm:my-24 flex flex-col md:flex-row items-center justify-center w-full overflow-hidden px-6 md:px-12 lg:px-20 sm:gap-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Find, Book & Rent a Car{" "}
            <span className="text-blue-700">Easily</span>
          </h1>
          <p className="text-lg text-gray-600">
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>
          {/* App Store & Play Store Buttons */}
          <div className="flex gap-3 justify-center md:justify-start">
            <Link to="/">
              <img
                src={appStore}
                alt="Download on App Store"
                className="w-36 h-auto"
              />
            </Link>
            <Link to="/">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-36 h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Right Image with Shadow */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          {/* Shadow Image */}
          <img
            src={blueShadow}
            alt="Blue shadow"
            className="absolute inset-0 w-[55%] md:w-[80%] h-auto opacity-20"
          />
          {/* Car Image */}
          <img
            src={headerCar}
            alt="Header Car"
            className="relative z-10 w-full max-w-[50rem] h-auto drop-shadow-lg"
          />
        </div>
      </div>
      {/* <div className="shadow-lg w-[80%] ms-auto rounded-lg px-5">
        <div className="p-3">
            <div>
                <img src={location} alt="Location" />

            </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
