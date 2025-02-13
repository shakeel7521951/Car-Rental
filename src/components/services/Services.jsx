import React, { useState } from "react";
import { MdMenuOpen, MdOutlineElectricBike } from "react-icons/md";
import { FaCar, FaTaxi, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import p1 from "../../assets/home/p1.png";
import Audi from "../../assets/home/Audi.png";
import lambo from "../../assets/home/lambo.png";
import p4 from "../../assets/home/p4.png";
import user from "../../assets/home/user.png";
import Frame from "../../assets/home/Frame.png";
import airCondition from "../../assets/home/airCondition.png";
import doors from "../../assets/home/doors.jpg";

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const carDeals = [
    { id: 1, name: "Jaguar XE L P250", price: "$200/day", image: p1, category: "Cars", features: [
        { icon: user, label: "4 Passengers" },
        { icon: Frame, label: "Auto" },
        { icon: airCondition, label: "Air Conditioning" },
        { icon: doors, label: "4 Doors" },
      ],
    },
    { id: 2, name: "Audi R8", price: "$2100/day", image: Audi, category: "Cars", features: [
        { icon: user, label: "2 Passengers" },
        { icon: Frame, label: "Auto" },
        { icon: airCondition, label: "Air Conditioning" },
        { icon: doors, label: "2 Doors" },
      ],
    },
    { id: 3, name: "Lamborghini Huracan", price: "$1900/day", image: lambo, category: "Cars", features: [
        { icon: user, label: "2 Passengers" },
        { icon: Frame, label: "Auto" },
        { icon: airCondition, label: "Air Conditioning" },
        { icon: doors, label: "2 Doors" },
      ],
    },
    { id: 4, name: "BMW M3", price: "$1700/day", image: p4, category: "Cars", features: [
        { icon: user, label: "4 Passengers" },
        { icon: Frame, label: "Auto" },
        { icon: airCondition, label: "Air Conditioning" },
        { icon: doors, label: "4 Doors" },
      ],
    },
  ];

  const filteredDeals = carDeals.filter(car =>
    (selectedCategory === "All" || car.category === selectedCategory) &&
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { name: "All", icon: <MdMenuOpen /> },
    { name: "Bike", icon: <MdOutlineElectricBike /> },
    { name: "Taxi", icon: <FaTaxi /> },
    { name: "Cars", icon: <FaCar /> },
  ];

  return (
    <div className="w-full my-7 flex flex-col items-center">
      <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md w-[80%] mb-5">
        <FaSearch className="text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search for a car..." 
          className="w-full bg-transparent outline-none text-gray-700" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-4 mb-5">
        {categories.map(({ name, icon }) => (
          <button
            key={name}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md cursor-pointer ${selectedCategory === name ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'} transition-all duration-300`}
            onClick={() => setSelectedCategory(name)}
          >
            {icon} {name}
          </button>
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDeals.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transform transition hover:scale-105"
          >
            <div className="md:w-[40%] my-auto">
              <img src={car.image} alt={car.name} className="w-full h-auto" />
            </div>
            <div className="md:w-[60%] px-4 py-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={feature.icon} alt={feature.label} className="w-6 h-6" />
                      <p className="text-gray-700 text-sm">{feature.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mt-2" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Price</p>
                  <h3 className="text-2xl font-semibold text-gray-900">{car.price}</h3>
                </div>
                <Link
                  to="/"
                  className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
