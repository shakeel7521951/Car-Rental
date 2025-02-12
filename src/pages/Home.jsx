import React from 'react'
import Header from '../components/home/Header'
import Working from '../components/home/Working'
import WhyUs from '../components/home/WhyUs'
import PopularServices from '../components/home/PopularServices'
import Download from '../components/home/Download'

const Home = () => {
  return (
    <div>
        <Header />
        <Working />
        <WhyUs />
        <PopularServices />
        <Download />
    </div>
  );
};

export default Home;
