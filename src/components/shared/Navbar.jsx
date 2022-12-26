import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icon/logo.png';
const Navbar = () => {
  return (
    <div className="bg-[#222831]   flex  justify-center items-center">
      <div className="navbar   container m-auto  ">
        <div className=" navbar-start  ">
          <Link to={'/'} className="btn btn-ghost    ">
            <img
              src={logo}
              alt=""
              className="    z-10 md:h-28 h-16  text-white"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="  hidden lg:flex  space-x-3">
            <li className="btn text-white   hover:border-b-2 border-white border-0 hover:border-orange-600 cursor-pointer ">
              Home
            </li>
            <li className="btn text-white   hover:border-b-2 border-white border-0 hover:border-orange-600 cursor-pointer ">
              About
            </li>
            <li className="btn text-white   hover:border-b-2 border-white border-0 hover:border-orange-600 cursor-pointer ">
              Projects
            </li>
            <li className="btn text-white   hover:border-b-2 border-white border-0 hover:border-orange-600 cursor-pointer ">
              Contacts us
            </li>
          </ul>
        </div>

        <div class=" navbar-end     lg:hidden  ">
          <div class="dropdown">
            <label
              tabindex="0"
              class="btn btn-ghost  hover:border-white   border-2   "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                  className="border-2   "
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
