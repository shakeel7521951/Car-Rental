import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
    const contactDetails = [
        {
          title: "Address",
          icon: FaMapMarkerAlt,
          info1: "640 Chestnut Ridge Road",
          info2: "Spring Valley, NY 10977",
        },
        {
          title: "Email",
          icon: FaEnvelope,
          info1: "Contact@carlyrent.com",
          info2: "Support@carlyrent.com",
        },
        {
          title: "Phone",
          icon: FaPhoneAlt,
          info1: "+(62) 800-567-8990",
          info2: "+(62) 800-567-8990",
        },
        {
          title: "Working Hours",
          icon: FaClock,
          info1: "Mon – Fri: 9 AM – 11 PM",
          info2: "Sat – Sun: 9 AM – 5 AM",
        },
      ];
      
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 relative">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Let Us <span className="text-blue-700">Help You</span>
      </h1>

      {/* Contact Options */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="border-2 border-blue-300 shadow-lg rounded-xl p-6 bg-white hover:shadow-2xl transition"
          >
            <detail.icon className="text-blue-700 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-blue-700">{detail.title}</h2>
            <p className="text-gray-700">{detail.info1}</p>
            {detail.info2 && <p className="text-gray-700">{detail.info2}</p>}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Get in <span className="text-blue-700">Touch</span>
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-400 outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Find Us on the <span className="text-blue-700">Map</span>
        </h2>
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094096!2d144.95373531531577!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e0a2720a567!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633970294483!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};


export default ContactUs;
