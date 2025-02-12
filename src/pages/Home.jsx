import React from "react";
import Download from "../components/Download";
import Testimonial from "../components/Testimonial";
import { ApiProvider } from "../context";

const Home = () => {
  return (
    <>
      <ApiProvider>
        <Testimonial />
      </ApiProvider>
      <Download />
    </>
  );
};

export default Home;
