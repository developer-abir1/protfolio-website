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
        <div className="  grid   grid-cols-1  h-[700px]  md:grid-cols-2 text-white     place-items-center   relative">
          <div className="mb-8  ">
            <h2 className="text-2xl  justify-end">Hello !</h2>
            <h2 className="md:text-6xl text-5xl font-bold space-x-4 uppercase">
              <span className=" ">I'm</span>
              <span className="text-[#00ADB5]">Abir khan</span>
            </h2>
            <h2 className="text-5xl font-bold  ">
              <span className="text-[#00ADB5] md:text-4xl text-3xl uppercase">
                <ReactTypingEffect
                  text={[' Javascript developer ', '  Web developer']}
                />
              </span>
            </h2>

            <div className=" my-4 flex  space-x-6 justify-center">
              <button className=" btn   bg-[#00ADB5] border-0 hover:bg-[#00ADB5]">
                Hire Me
              </button>
              <button className=" btn  btn-ghost bg-white hover:bg-white text-black">
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
              className=" absolute top-60  right-[570px] text-[#0a5e77]  animate-spin "
            />
            <DiJavascript1
              size={80}
              color={' '}
              className=" absolute   bottom-40    left-96 text-yellow-400  animate-pulse"
            />
            <SiFirebase
              size={60}
              className=" absolute  right-96 md:top-16 top-72     text-yellow-400  animate-pulse  "
            />
            <SiMongodb
              size={60}
              className=" absolute    left-96  md:top-16 top-28    text-green-500  animate-pulse"
            />
            <GrNode
              size={40}
              className=" absolute  top-0  left-44     text-green-500  animate-pulse"
            />
            <SiTypescript
              size={30}
              className=" absolute  top-52    md:right-0  right-20  text-[#07587e]    animate-pulse"
            />
            <SiTailwindcss
              size={40}
              className=" absolute  top-4   md:top-12  right-16  text-[#00ADB5]    animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
