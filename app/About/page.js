"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Footer from "../Footer";
import Navbar from "../Navbar";

const About = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2 }
    );
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center my-5 underline font-serif font-extrabold text-4xl">Discover Who We Are</h1>
      <img src="https://images.unsplash.com/photo-1521737451536-00a86f630f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjB3aXRoJTIwaGVhZHBob25lfGVufDB8fDB8fHww" 
      alt="about-alt pic"
      ref={boxRef}
      className="mx-auto
      "/>
      <div className="lg:mx-52 my-5 " id="resizeQuery">

        <h1 className="text-xl sm:text-center">At GN Technologies, we're revolutionizing the way companies connect with their customers. Our cutting-edge technology and customer-centric approach enable us to deliver exceptional experiences that drive loyalty, retention, and growth.</h1>
        <h1 className="text-center  text-3xl font-bold text-orange-500 hover:text-orange-600 my-3">Our Story</h1>

        <h1 className="text-xl sm:text-center">        Founded in 2020, we're celebrating 4 years of innovation, growth, and customer success! Our journey began with a simple yet ambitious goal: to harness the power of technology to transform customer care. Today, we're a leading provider of innovative solutions that bridge the gap between humans and machines.
        </h1>
        <h1 className="text-center  text-3xl font-bold text-orange-500 hover:text-orange-600 my-3">Our Mission</h1>

        <h1 className="text-xl sm:text-center">       "Our mission is to empower businesses worldwide through comprehensive, tailored outsourcing
              services that optimize operations, enhance customer service, and drive sustainable growth.
              By integrating advanced technology with deep industry expertise, we are committed to delivering
              exceptional service and fostering long-term partnerships."
        </h1>
        <h1 className="text-center  text-3xl font-bold text-orange-500 hover:text-orange-600 my-3">Our Values</h1>

        <h1 className="text-xl sm:text-center"> - Customer Obsession: We put customers at the heart of everything we do.<br />
          - Innovation: We embrace change and continuously push the boundaries of what's possible.<br />
          - Collaboration: We believe that together, we can achieve more.<br />
          - Excellence: We strive for perfection in all aspects of our work.<br /></h1>

        <h1 className="text-center  text-3xl font-bold text-orange-500 hover:text-orange-600 my-3"> Our Team</h1>

        <h1 className="text-xl sm:text-center">        Meet the talented individuals who make GN Technologies tick. Our team of experts is dedicated to delivering exceptional customer experiences and driving business success.
        </h1>
        
      </div>
      <Footer />
    </>
  );
};

export default About;