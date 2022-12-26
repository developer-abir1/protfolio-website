import React from 'react';
import About from '../components/Home/About';
import Contactus from '../components/Home/Contactus';
import Header from '../components/Home/Header';
import Projects from '../components/Home/Projects';

const Home = () => {
  return (
    <div className="bg-[#222831]  ">
      <Header />
      <About />
      <Projects />
      <Contactus />
    </div>
  );
};

export default Home;
