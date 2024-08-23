"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  w-full  top-0 start-0 border-b " id='navbar'>
      <div className="flex flex-wrap items-center justify-between mx-16 ">
        <img src="download (1).png" className="h-[110px] w-[116px] rounded-md" alt="GN Logo" id='logo' />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className=" bg-orange-500 hover:bg-orange-700   font-medium rounded-lg text-xl my-10 px-4 py-2 text-center "
          >
            <a href="/Contact" className='text-white'>Contact us</a>

          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 mt-10 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden sm:hidden hover:bg-gray-100 sm:mt-4"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  text-xl  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-orange-500 hover:bg-gray-100 rounded md:bg-transparent md:text-orange-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Services"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Testimonials"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 "
              >
                testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
