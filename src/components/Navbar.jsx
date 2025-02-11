import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon for Mobile Toggle
import logo from "/footerContent/Frame.png"; // Adjust path if needed
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(31%) sepia(89%) saturate(714%) hue-rotate(194deg) brightness(96%) contrast(97%)",
          }}
          className="w-10 h-10 "
          alt="Logo"
        />
        <h1 className="text-[#1572D3] text-lg md:text-xl font-bold">
          RENTCARS
        </h1>
      </div>

      {/* Center - Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex gap-6">
        {[
          "Become a renter",
          "Rental deals",
          "How it works",
          "Why choose us",
        ].map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            className="text-black hover:text-[#1572D3] transition-colors font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right - Buttons */}
      <div className="hidden md:flex gap-4">
        <button
          onClick={() => console.log("signup")}
          className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3]"
        >
          Sign up
        </button>
        <button
          onClick={() => console.log("login")}
          className="text-white bg-[#1572D3]  font-medium px-6 py-2 rounded-md "
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 z-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {[
            "Become a renter",
            "Rental deals",
            "How it works",
            "Why choose us",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="text-black hover:text-[#1572D3] transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => console.log("signup")}
            className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3] w-40"
          >
            Sign up
          </button>
          <button
            onClick={() => console.log("login")}
            className="text-white font-medium px-6 py-2 rounded-md bg-[#1572D3] w-40"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
