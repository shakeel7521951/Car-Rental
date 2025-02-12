import React from "react";
import Header from "../components/home/Header";
import Working from "../components/home/Working";
import WhyUs from "../components/home/WhyUs";
import PopularServices from "../components/home/PopularServices";

const Home = () => {
  return (
    <div>
      <Header />
      <Working />
      <WhyUs />
      <PopularServices />
    </div>
  );
};

export default Home;
