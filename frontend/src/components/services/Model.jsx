import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/slices/OrderSlices";
import { toast } from "react-toastify";

const Modal = () => {
  const location = useLocation();
  const service = location.state?.service;
  const navigate = useNavigate();
  const { carId } = useParams();
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const [user, setUser] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
  });

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  if (!service) {
    return <p className="text-center text-gray-500">Service not found.</p>;
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const orderCar = async (e) => {
    e.preventDefault();

    // Combine date and time into a single datetime object
    const pickupDateTime = new Date(`${user.date}T${user.time}`);
    const currentDateTime = new Date();

    // Validate if the selected date and time are in the future
    if (pickupDateTime <= currentDateTime) {
      toast.error("Please select a future date and time.", { position: "top-center" });
      return;
    }

    const id = service._id;
    const orderData = {
      data: user,
      price: service.price,
    };

    try {
      const response = await createOrder({ id, data: orderData });

      if (response.error) {
        toast.error(response.error.data?.message || "Something went wrong", { position: "top-center" });
      } else {
        toast.success(response.data?.message || "Order created successfully!", { position: "top-center" });
        navigate("/");
      }
    } catch (error) {
      toast.error("Unexpected error occurred!", { position: "top-center" });
    }
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
                  min={getTodayDate()} // Disable past dates
                  required
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
                  min={user.date === getTodayDate() ? getCurrentTime() : "00:00"} // Disable past times if today's date is selected
                  required
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
                    required
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
                    required
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
              className={`hover:shadow-md w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none transition duration-200 hover:bg-blue-700 cursor-pointer ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Booking..." : "Book your Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;