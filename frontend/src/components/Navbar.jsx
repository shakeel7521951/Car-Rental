import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import logo from "../assets/footerContent/Frame.png";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await logout();
    if (response.error) {
      toast.error(response.error.data?.message || "Logout failed!", {
        position: "top-center",
      });
    } else {
      toast.success(response.data?.message || "Logout successful!", {
        position: "top-center",
      });
    }
    dispatch(clearProfile());
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={logo}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(31%) sepia(89%) saturate(714%) hue-rotate(194deg) brightness(96%) contrast(97%)",
          }}
          className="w-10 h-10"
          alt="Logo"
        />
        <h1 className="text-[#1572D3] text-lg lg:text-xl font-bold">
          RENTCARS
        </h1>
      </Link>

      <div className="hidden lg:flex gap-6">
        {["Home", "Services", "Blogs", "About Us" , "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-black hover:text-[#1572D3] transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex gap-4">
        {userProfile ? (
          <div className="relative">
            {/* Profile Icon */}
            <div
              className="w-10 h-10 flex items-center justify-center bg-[#1572D3] text-white font-bold rounded-full cursor-pointer overflow-hidden border-2 border-white hover:opacity-90 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {userProfile.profilePic ? (
                <img
                  src={userProfile.profilePic}
                  alt="User Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-lg">
                  {userProfile.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-30">
                <ul className="py-2 text-gray-700">
                  {userProfile.role === "Admin" && (
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate("/dashboard");
                        setDropdownOpen(false);
                      }}
                    >
                      Dashboard
                    </li>
                  )}
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/my-profile");
                      setDropdownOpen(false);
                    }}
                  >
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/my-orders");
                      setDropdownOpen(false);
                    }}
                  >
                    My Orders
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/sign-up"
              className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3] hover:bg-[#1572D3] hover:text-white transition"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="text-white bg-[#1572D3] font-medium px-6 py-2 rounded-md hover:bg-[#125ca1] transition"
            >
              Login
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button & Profile Icon */}
      <div className="lg:hidden flex items-center gap-4">
        {/* Profile Icon for Mobile */}
        {userProfile && (
          <div className="relative">
            <div
              className="w-10 h-10 flex items-center justify-center bg-[#1572D3] text-white font-bold rounded-full cursor-pointer overflow-hidden border-2 border-white hover:opacity-90 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {userProfile.profilePic ? (
                <img
                  src={userProfile.profilePic}
                  alt="User Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-lg">
                  {userProfile.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-30">
                <ul className="py-2 text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/my-profile"), setDropdownOpen(false);
                    }}
                  >
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Menu Icon */}
        <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 z-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 lg:hidden">
          {["Home", "Services", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-black hover:text-[#1572D3] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          {!userProfile && (
            <>
              <Link
                to="/sign-up"
                className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3] w-40 hover:bg-[#1572D3] hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="text-white font-medium px-6 py-2 rounded-md bg-[#1572D3] w-40 hover:bg-[#125ca1] transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
