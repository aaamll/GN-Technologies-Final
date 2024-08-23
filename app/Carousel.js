"use client";



import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev % 7) + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? 7 : prev - 1));
  };

  return (
    <>
      <div className='bg-gray-500 w-full h-[40rem]'>
        <h1 className='text-center text-3xl font-extrabold my-3 pt-5'>Our brands</h1>
        <p className='text-center text-gray-100 text-xl lg:mx-56 px-10 my-3'>
          At GN Technologies, we offer top-quality brands spanning IT solutions and security systems.
          Our selection ensures exceptional performance and reliability, driven by continuous innovation
          to keep our clients competitive.
        </p>
        <section className='container relative ' >
          <div className='slider-wrapper'>
            <div className='slider'>
              <img src='1.jpg' className={`slide ${currentSlide === 1 ? 'active' : ''}`} />
              <img src='2.jpg' className={`slide ${currentSlide === 2 ? 'active' : ''}`} />
              <img src='3.jpg' className={`slide ${currentSlide === 3 ? 'active' : ''}`} />
              <img src='4.jpg' className={`slide ${currentSlide === 4 ? 'active' : ''}`} />
              <img src='5.jpg' className={`slide ${currentSlide === 5 ? 'active' : ''}`} />
              <img src='6.jpg' className={`slide ${currentSlide === 6 ? 'active' : ''}`} />
              <img src='7.jpg' className={`slide ${currentSlide === 7 ? 'active' : ''}`} />
            </div>
            <button onClick={handlePrev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" className='' width="20" height="20">
            <path d="M20 0H0v20h20zm-7.354 14.166-1.389 1.439-5.737-5.529 5.729-5.657 1.4 1.424-4.267 4.215z"
            /></svg>
            </button>
            <button onClick={handleNext} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white  p-2 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" className='' width="20" height="20">
            <path d="M20 0H0v20h20zM7.658 15.707l-1.414-1.414L10.537 10 6.244 5.707l1.414-1.414L13.365 10z"
            /></svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carousel;






// "use client";

// import React from 'react';

// const Carousel = () => {
  

//   return (
//     <>
//     <div className='bg-gray-500 w-full h-[40rem]'>
//       <h1 className='text-center text-3xl font-extrabold my-3 pt-5'>Our brands</h1>
//       <p className='text-center text-xl lg:mx-56 px-10 my-3'>At GN Technologies, we offer top-quality brands spanning IT solutions and security systems. 
//         Our selection ensures exceptional performance and reliability, driven by continuous innovation 
//         to keep our clients competitive.  </p>
//     <section className='container '>
//            <div className='slider-wrapper'>
//            <div className='slider'>
//            <img src='1.jpg' id='slide1'/>
//            <img src='2.jpg' id='slide2'/>
//            <img src='3.jpg' id='slide3'/>
//            <img src='4.jpg' id='slide3'/>
//            <img src='5.jpg' id='slide3'/>
//            <img src='6.jpg' id='slide3'/>
//            <img src='7.jpg' id='slide3'/>
//            </div>
//            <div className='slider-nav'>
//            <a href='#slide1'/>
//            <a href='#slide2'/>
//            <a href='#slide3'/>
//            <a href='#slide4'/>
//            <a href='#slide5'/>
//            <a href='#slide6'/>
//            <a href='#slide7'/>
//            </div>
//            </div>
//     </section>
//     </div>
    
//     </>
//   );
// };

// export default Carousel;


