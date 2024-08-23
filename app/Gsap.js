// components/AnimatedComponent.js
"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { duration:1, x: 100 });
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: 500, height: 500 }}>
        <img src='landing.jpeg'
        className='flex justify-center items-center text-center'/>
      </div>
    </div>
  );
};

export default AnimatedComponent;
