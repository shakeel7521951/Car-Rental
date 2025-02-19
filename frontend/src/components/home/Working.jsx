import React from 'react';
import locationTic from '../../assets/home/location-tick.png';
import calendar from '../../assets/home/calendar.png';
import car from '../../assets/home/car.png';

const Working = () => {
  return (
    <div className="mt-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Section Tagline */}
      <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit mx-auto font-semibold text-sm">
        HOW IT WORKS
      </p>

      {/* Section Title */}
      <h1 className="font-bold text-4xl text-gray-900 mt-4">
        Rent With These <span className="text-blue-700">3 Easy Steps</span>
      </h1>

      {/* Steps Container */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1: Choose Location */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <div className="bg-blue-100 p-6 rounded-full">
            <img src={locationTic} className="w-16 h-16" alt="Location Tick" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Choose Location</h2>
          <p className="text-gray-600 mt-2">Select your location and find the best car for you.</p>
        </div>

        {/* Step 2: Pick-up Date */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <div className="bg-blue-100 p-6 rounded-full">
            <img src={calendar} className="w-16 h-16" alt="Calendar" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Pick-up Date</h2>
          <p className="text-gray-600 mt-2">Select your pick-up date and time to book your car.</p>
        </div>

        {/* Step 3: Book Your Car */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <div className="bg-blue-100 p-6 rounded-full">
            <img src={car} className="w-16 h-16" alt="Car" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Book Your Car</h2>
          <p className="text-gray-600 mt-2">Book your car and we will deliver it directly to you.</p>
        </div>
      </div>
    </div>
  );
};

export default Working;
