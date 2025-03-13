import React from "react";
import logo from '../assets/footerContent/Frame.png';
import call from "../assets/footerContent/call.png";
import location from "../assets/footerContent/location.png";
import sms from "../assets/footerContent/sms.png";
import facebook from "../assets/footerContent/facebook.png";
import insta from "../assets/footerContent/instagram.png";
import youtube from "../assets/footerContent/youtube.png";
import whiteLogo from '../assets/whiteLogo.png';

const data = [
  {
    msg: "25566 Hc 1, Glenallen, Alaska, 99588, USA",
    icon: location,
    id: 1,
  },
  {
    msg: "(907) 555-1234",
    icon: call,
    id: 2,
  },
  {
    msg: "test@gmail.com",
    icon: sms,
    id: 3,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#051C34] text-white px-6 py-12">
      {/* Main Footer Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo & Contact Info */}
        <div>
          <div className="flex items-center gap-2">
            <img src={whiteLogo} alt="LOGO" className="w-52" />
          </div>
          <div className="mt-4">
            {data.map((item) => (
              <div key={item.id} className="flex items-center gap-2 py-2">
                <img src={item.icon} className="h-6 w-6" alt="icon" />
                <p className="poppins-regular text-[#D6D6D6]">{item.msg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {[
          {
            title: "Our Product",
            links: ["Career", "Car", "Packages", "Features", "Pricelines"],
          },
          {
            title: "Resources",
            links: [
              "Download",
              "Help Centre",
              "Guides",
              "Partner Network",
              "Cruises",
              "Developer",
            ],
          },
          {
            title: "About Rentcars",
            links: [
              "Why choose us",
              "Our Story",
              "Investor Relations",
              "Press Centre",
              "Advertise",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h1 className="poppins-semibold text-lg">{section.title}</h1>
            <ul className="mt-4 space-y-2">
              {section.links.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-[#D6D6D6] hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h1 className="poppins-semibold text-lg">Follow Us</h1>
          <div className="flex gap-4 mt-4">
            {[facebook, insta, youtube].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:opacity-75 transition-opacity"
              >
                <img src={item} alt="social-icon" className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8">
        <hr className="border-[#575757]" />
        <p className="text-center text-[#D6D6D6] poppins-regular mt-4">
          © 2023 Rentcars, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
