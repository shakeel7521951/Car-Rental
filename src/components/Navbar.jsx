import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/footerContent/Frame.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      {/* Left - Logo */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2">
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
      </div>

      {/* Center - Navigation Links (Hidden on Small & Medium Screens) */}
      <div className="hidden lg:flex gap-6">
        {[
          "Become a renter",
          "Rental deals",
          "How it works",
          "Why choose us",
        ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-black hover:text-[#1572D3] transition-colors font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right - Buttons (Hidden on Small & Medium Screens) */}
      <div className="hidden lg:flex gap-4">
        <button
          onClick={() => console.log("signup")}
          className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3] hover:bg-[#1572D3] hover:text-white transition"
        >
          Sign up
        </button>
        <button
          onClick={() => console.log("login")}
          className="text-white bg-[#1572D3] font-medium px-6 py-2 rounded-md hover:bg-[#125ca1] transition"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button (Visible on Small & Medium Screens) */}
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Dropdown, Visible on Small & Medium Screens) */}
      {isOpen && (
        <div className="absolute top-16 z-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 lg:hidden">
          {[
            "Become a renter",
            "Rental deals",
            "How it works",
            "Why choose us",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-black hover:text-[#1572D3] transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => console.log("signup")}
            className="text-[#1572D3] font-bold px-6 py-2 rounded-md border border-[#1572D3] w-40 hover:bg-[#1572D3] hover:text-white transition"
          >
            Sign up
          </button>
          <button
            onClick={() => console.log("login")}
            className="text-white font-medium px-6 py-2 rounded-md bg-[#1572D3] w-40 hover:bg-[#125ca1] transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
