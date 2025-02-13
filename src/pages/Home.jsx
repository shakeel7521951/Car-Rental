import React from "react";
import Header from "../components/home/Header";
import Working from "../components/home/Working";
import WhyUs from "../components/home/WhyUs";
import PopularServices from "../components/home/PopularServices";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Working />
      <WhyUs />
      <PopularServices />
      <Testimonial />
    </div>
  );
};

export default Home;
