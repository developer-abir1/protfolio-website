import React from 'react';
import photo from '../../images/icon/drow.png';
import images from '../../images/icon/72245378.png';
import { AiFillFacebook } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';

const About = () => {
  return (
    <div className="bg-[#222831]  container m-auto     ">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-4     ">
        <div className=" relative flex  items-center px-4     ">
          <div className=" ">
            <h2 className=" ml-9 text-5xl font-bold  uppercase">
              <span className="text-white ">About </span>
              <span className="text-[#00ADB5]"> Me</span>
            </h2>

            <p className="  mt-8 ml-9 text-gray-200  text-justify">
              I'm{' '}
              <b className=" border-0  border-b-2 border-green-600">
                MERN-Stack{' '}
              </b>{' '}
              WEB Developer I am working with React, Node.js and MongoDB. I also
              have experience in developing static websites using HTML5, CSS3
              and JavaScript (ES6). I am a quick learner. I believe in hard work
              and efficiency. That's why I am always ready to accomplish any
              task by working hard. I always focus on learning new technology.
              My goal is to become A World-Class Professional Web Developer.
            </p>

            <div className=" absolute top-32 ">
              <img src={photo} alt="" />
            </div>
            <div className=" ml-20 mt-4">
              <div className=" flex space-x-4">
                <AiFillFacebook size={50} className="text-[#f8faff] " />
                <FaLinkedinIn size={50} className="text-[#0072b1] " />
                <SiTwitter size={50} className="text-[#238091] " />
              </div>
            </div>
          </div>
        </div>
        <div className="  flex justify-center">
          <img src={images} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default About;
