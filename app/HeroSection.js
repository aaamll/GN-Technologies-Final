"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const boxRef = useRef(null);
  const TextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 4 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      TextRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 5 }
    );
  }, []);

  

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="w-full h-auto">
              <img
                src="landing.jpeg"
                ref={boxRef}
                alt="heroSection"
                className="w-full h-full object-cover"
                id="landing"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-xl font-bold text-orange-500">
              INNOVATIVE SERVICE SOLUTION
            </h1>
            <h2 className="text-3xl text-black font-extrabold leading-loose">
              Empowering Your Customer Connections
            </h2>
            <p className="text-[1.5rem] text-gray-500 leading-10" ref={TextRef}>
              At GN Technologies, we understand the value of each customer interaction. Our cutting-edge solutions ensure seamless communication, helping you build lasting relationships and drive business success. Trust us to deliver exceptional support around the clock, tailored to meet your unique needs. Let’s elevate your customer service experience together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
