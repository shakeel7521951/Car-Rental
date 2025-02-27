import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Modal = () => {
  const location = useLocation();
  const service = location.state?.service;
  const { carId } = useParams();
  const [user, setUser] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
  });

  if (!service) {
    return <p className="text-center text-gray-500">Service not found.</p>;
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const orderCar = (e) => {
    e.preventDefault();
    console.log("Car Ordered:", user);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white p-6 rounded-lg shadow-lg">
        <div key={carId} className="relative flex flex-col justify-center items-center gap-4 mb-4">
          <h1 className="absolute text-3xl bottom-0 pb-4 font-semibold text-white">
            {service.serviceName}
          </h1>
          <img src={service.servicePic} alt={service.serviceName} className="w-full h-full object-cover rounded-lg" />
        </div>
        
        <form onSubmit={orderCar}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={user.date}
                  onChange={handleChange}
                  id="date"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <input
                  type="time"
                  value={user.time}
                  onChange={handleChange}
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="from"
                    value={user.from}
                    onChange={handleChange}
                    id="from"
                    placeholder="From"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="to"
                    value={user.to}
                    onChange={handleChange}
                    id="to"
                    placeholder="To"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between px-3">
                <div className="text-2xl font-bold text-gray-800">Total Price</div>
                <div className="text-3xl font-semibold text-gray-900">{service.price}</div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-md w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none transition duration-200 hover:bg-blue-700"
            >
              Book your Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
