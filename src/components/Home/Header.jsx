import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import image from '../../images/icon/font-img.png';
import { RiReactjsLine } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
const Header = () => {
  return (
    <div className="bg-[#222831]  ">
      <div className=" container m-auto ">
        <div className="  grid   grid-cols-1  h-[700px]  lg:grid-cols-2  text-white     place-items-center   relative">
          <div className="lx:mb-8  ">
            <h2 className="text-2xl  justify-end">Hello !</h2>
            <h2 className="lx:text-6xl  text-5xl   md:text-6xl  font-bold space-x-4 uppercase">
              <span className=" ">I'm</span>
              <span className="text-[#00ADB5]">Abir khan</span>
            </h2>
            <h2 className="md:text-4xl text-xl font-bold  ">
              <span className="text-[#00ADB5] xl:text-4xl md:text-3xl text-xl uppercase">
                <ReactTypingEffect
                  text={[' Javascript developer ', '  Web developer']}
                />
              </span>
            </h2>

            <div className=" my-4 flex  space-x-6 justify-center">
              <button className=" btn   bg-[#00ADB5] border-0 hover:bg-[#00ADB5]">
                Hire Me
              </button>
              <button className=" btn  btn-ghost bg-white hover:bg-white     text-black">
                download CV
              </button>
            </div>
          </div>
          <div>
            <img src={image} className="h-[400px]" alt="" />
          </div>
          <div>
            <RiReactjsLine
              size={80}
              className=" absolute md:top-60 top-[300px]  right-44 sm:right-40 md:right-[570px] text-[#0a5e77]  animate-spin "
            />
            <DiJavascript1
              size={80}
              color={' '}
              className=" absolute lg:bottom-[550px]   md:left-80  bottom-52 md:bottom-80  left-0  xl:left-96 text-yellow-400  animate-pulse"
            />
            <SiFirebase
              size={60}
              className=" absolute right-60  md:left-12 xl:right-96 md:top-16 top-60     text-yellow-400  animate-pulse  "
            />
            <SiMongodb
              size={60}
              className=" absolute   md:left-5 md:top-96  left-0  xl:left-0  xl:top-96 top-72    text-green-500  animate-pulse"
            />
            <GrNode className="  xl:text-[500px]    lg:text-[550px] xl:left-96 lg:left-70 md:text-[500px] text-[300px] absolute  md:top-20 top-0  right-8 md:left-32 opacity-5 text-green-500   " />
            <SiTypescript
              size={30}
              className=" absolute  md:top-52  top-60    right-2     text-[#07587e]    animate-pulse"
            />
            <SiTailwindcss
              size={40}
              className=" absolute  top-0   md:top-12  right-16  text-[#00ADB5]    animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
