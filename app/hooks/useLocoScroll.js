import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocoScroll = (start) => {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main-container');

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: process.env.NODE_ENV === 'production',
    });

    console.log('Locomotive Scroll initialized');

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
