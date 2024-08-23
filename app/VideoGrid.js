"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const VideoGrid = () => {

  const boxRef = useRef(null);
  const TextRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 6 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      TextRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 7 }
    );
  }, []);



  return (
    <div>
      <div className="container mx-auto p-4 lg:mx-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 flex justify-center" id='video'>
            <video
              ref={boxRef}

              src="video.mp4"
              controls
              className="w-full h-auto max-w-md lg:ml-20 "
              autoPlay
              muted
            ></video>
          </div>
          <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 border border-black" ref={TextRef}>
            <h1 className="text-3xl font-extrabold">
              We are Providing Quality work with satisfaction
            </h1>
            <h2 className="text-gray-500 text-2xl leading-loose mt-4">
              Our well trained and experienced staff is specialized in outsourcing different taxi firms in UK, Canada, and USA.
              <ul className=" pl-5 mt-2">
                <li>2 years of Experience in Customer Service</li>
                <li>Working on different softwares like iCabbi, Cab 9, etc.</li>
                <li>Prefer quality work</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoGrid;
