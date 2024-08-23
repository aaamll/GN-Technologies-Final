"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import { Elastic } from 'gsap/all';

export default function Test() {
  useEffect(() => {
    const vsOpts = {
      $slides: document.querySelectorAll('.v-slide'),
      $list: document.querySelector('.v-slides'),
      duration: 6,
      lineHeight: 50,
    };

    const vSlide = gsap.timeline({
      paused: true,
      repeat: -1,
    });

    vsOpts.$slides.forEach((_, i) => {
      vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
        y: i * -1 * vsOpts.lineHeight,
        ease: Elastic.easeOut.config(1, 0.4),
      });
    });

    vSlide.play();
  }, []);

  return (
    <div className="container p-8">
      <div className="row">
        <div className="v-slider-frame  h-12 overflow-hidden text-center col-sm-3 offset-sm-3">
          <ul className="v-slides list-none transform translate-y-12 p-0">
            <li className="v-slide text-2xl leading-loose">Websites</li>
            <li className="v-slide text-2xl leading-loose">Plugins</li>
            <li className="v-slide text-2xl leading-loose">Web Apps</li>
            <li className="v-slide text-2xl leading-loose">Portals</li>
            <li className="v-slide text-2xl leading-loose">Communities</li>
            <li className="v-slide text-2xl leading-loose">Digital Marketing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
