import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../assets/home/p1.png";
import Audi from '../../assets/home/Audi.png';
import lambo from '../../assets/home/lambo.png';
import p4 from '../../assets/home/p4.png';
import user from "../../assets/home/user.png";
import Frame from "../../assets/home/Frame.png";
import airCondition from "../../assets/home/airCondition.png";
import doors from "../../assets/home/doors.jpg";

// Car rental deals data
const carDeals = [
  {
    id: 1,
    name: "Jaguar XE L P250",
    price: "$200/day",
    image: p1,
    features: [
      { icon: user, label: "4 Passengers" },
      { icon: Frame, label: "Auto" },
      { icon: airCondition, label: "Air Conditioning" },
      { icon: doors, label: "4 Doors" },
    ],
  },
  {
    id: 1,
    name: "Audi R8",
    price: "$2100/day",
    image: Audi,
    features: [
      { icon: user, label: "2 Passengers" },
      { icon: Frame, label: "Auto" },
      { icon: airCondition, label: "Air Conditioning" },
      { icon: doors, label: "2 Doors" },
    ],
  },
  {
    id: 3,
    name: "Lamborghini Huracan",
    price: "$1900/day",
    image: lambo,
    features: [
      { icon: user, label: "2 Passengers" },
      { icon: Frame, label: "Auto" },
      { icon: airCondition, label: "Air Conditioning" },
      { icon: doors, label: "2 Doors" },
    ],
  },
  {
    id: 4,
    name: "BMW M3",
    price: "$1700/day",
    image: p4,
    features: [
      { icon: user, label: "4 Passengers" },
      { icon: Frame, label: "Auto" },
      { icon: airCondition, label: "Air Conditioning" },
      { icon: doors, label: "4 Doors" },
    ],
  },
];

const PopularServices = () => {
  return (
    <section className="mt-16 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center">
        <p className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full inline-block font-semibold text-sm">
          Popular Rental Deals
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-3">
          Most Popular Cars Rental Deals
        </h1>
      </div>

      {/* Car Rental Cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {carDeals.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Car Image */}
            <div className="md:w-[40%] my-auto">
              <img src={car.image} alt={car.name} className="w-full h-auto" />
            </div>

            {/* Car Details */}
            <div className="p-6 flex flex-col justify-between md:w-1/2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={feature.icon} alt={feature.label} className="w-6 h-6" />
                      <p className="text-gray-700 text-sm">{feature.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Button */}
              <hr className="mt-2" /> 
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Price</p>
                  <h3 className="text-2xl font-semibold text-gray-900">{car.price}</h3>
                </div>
                <Link
                  to="/"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
