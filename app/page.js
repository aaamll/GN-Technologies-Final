"use client"
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './HeroSection';
import Grid from './Grid';
import Grid2 from './Grid2';
import VideoGrid from './VideoGrid';
import Carousel2 from './Carousel2';
import Head from 'next/head';
import gsap from 'gsap';

// import useLocoScroll from '../hooks/useLocoScroll';

const App = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const main = document.getElementById("main-container");

    if (main && cursor) {
      main.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
          x: dets.clientX,
          y: dets.clientY
        });
      });
    }
  }, []);

  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='main-container'>
        <div id='cursor' className='w-3 h-3 lg:bg-orange-500 rounded-full fixed sm:bg-white'></div>
        <Navbar />
        <div className='my-3'>
        <h1 className='text-center font-semibold font-serif  text-6xl '>GN Technologies</h1>
        <h1 className='text-center text-2xl '>"Where Trust meets Quality"</h1>
        </div>
        <div id='call'>      
          <a href="tel:+92 518915551">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64" height="64" viewBox="0 0 48 48"
              className='z-40 cursor-pointer object-cover'>
              <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path>
              <path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
            </svg>
          </a>
        </div>
        <div id='whatsapp'>
          <a href="https://wa.me/447887989811?text=Hello,%20I%20need%20help%20with%20your%20services"
            target="_blank"
            rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="69" height="69" viewBox="0 0 48 48"
              className='z-40 cursor-pointer object-cover'>
              <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
              <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
              <path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        <Hero />
        <VideoGrid />
        <Carousel2/>
        <Grid2 />
        <Grid />
        <Footer />
      </div>
    </div>
  );
};

export default App;
