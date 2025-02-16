import { useState } from "react";
import { useParams } from "react-router-dom";

const Modal = ({
  carName = "Parado",
  Price = "$1700",
  carImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}) => {
  const { carId } = useParams();
  const [user, setuser] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
  });

  const handlechange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };

  const orderCar = (e) => {
    e.preventDefault();
    console.log("Car Ordered", user);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <div
          key={carId}
          className="relative flex flex-col justify-center items-center gap-4 mb-4"
        >
          <h1 className=" absolute text-3xl bottom-0 pb-4 font-semibold text-white">
            {carName}
          </h1>
          <img
            src={carImage}
            alt={carName}
            className="w-full h-64 object-cover "
          />
        </div>
        <form onSubmit={orderCar}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={user.date}
                  onChange={handlechange}
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  value={user.time}
                  onChange={handlechange}
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    onChange={handlechange}
                    id="area"
                    placeholder="From"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="to"
                    value={user.to}
                    onChange={handlechange}
                    id="city"
                    placeholder="To"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between px-3">
                <div className="text-2xl poppins-bold">Total Price</div>
                <div className="text-3xl poppins-semibold">{Price}</div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Book your Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
