import React from 'react';
import About from '../components/Home/About';
import Contactus from '../components/Home/Contactus';
import Header from '../components/Home/Header';
import Projects from '../components/Home/Projects';

const Home = () => {
  return (
    <div className="bg-[#222831]  ">
      <div className="container m-auto ">
        <Header />
        <About />
        <Projects />
        <Contactus />
      </div>
    </div>
  );
};

export default Home;
