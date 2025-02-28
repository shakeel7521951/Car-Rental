import React from "react";
import { Link } from "react-router-dom";
import { useGetAllServicesQuery } from "../../redux/slices/ServiceApi";
import { FaUser, FaCarSide, FaSnowflake, FaDoorOpen } from "react-icons/fa";

const PopularServices = () => {
  const { data, isLoading, error } = useGetAllServicesQuery();
  const services = Array.isArray(data?.services)
    ? data.services.slice(0, 4)
    : [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading services</p>;

  return (
    <section className="mt-16 px-6 sm:px-10 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center">
        <p className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full inline-block font-semibold text-sm">
          Popular Rental Deals
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-3">
          Most Popular Cars Rental Deals
        </h1>
      </div>

      {/* Car Rental Cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transform transition hover:scale-105"
          >
            <div className="md:w-[40%] my-auto">
              <img
                src={service.servicePic || "https://via.placeholder.com/150"}
                alt={service.serviceName}
                className="w-full h-full max-h-[100]"
              />
            </div>
            <div className="md:w-[60%] px-4 py-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.serviceName}
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaUser className="w-6 h-6" />
                    <p>Passengers: {service.passengers || "N/A"}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaCarSide className="w-6 h-6" />
                    <p>Auto</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaSnowflake className="w-6 h-6" />
                    <p>Air Conditioning</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaDoorOpen className="w-6 h-6" />
                    <p>Doors: {service.doors || "N/A"}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-2" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Price</p>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    ${service.price}/day
                  </h3>
                </div>
                <Link
                  to={`/booking/${service._id}`}
                  state={{ service }}
                  className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition"
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
