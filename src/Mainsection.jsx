import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Mainsection = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1 = h1Ref.current;

    const splitTextToSpans = (element) => {
      const text = element.innerText;
      element.innerHTML = '';

      text.split('').forEach((char) => {
        const span = document.createElement('span');

        if (char === ' ') {
          span.innerHTML = '&nbsp;';
          span.style.display = 'inline-block';
          span.style.width = '0.5em'; 
        } else {
          span.innerText = char;
          span.style.display = 'inline-block';
        }

        span.style.opacity = 0;
        span.style.marginRight = '1px';
        element.appendChild(span);
      });
    };

    splitTextToSpans(h1);

    const h1Spans = h1.querySelectorAll('span');

    gsap.to(h1Spans, {
      scrollTrigger: {
        trigger: h1,
        start: 'top 60%',
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.05,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="relative h-[70vh] w-[70vw] flex justify-center items-center rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("/main-img.png")`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col gap-6 items-center text-center px-4">
          <h1
            ref={h1Ref}
            className="text-white text-5xl md:text-7xl font-black tracking-normal"
          >
            Taste Sustainability
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl tracking-wide"
          >
            EcoBites offers a range of edible cups, spoons, and plates, crafted from natural ingredients, designed to reduce waste and enhance your dining experience.
          </p>
          <Link
            to="/product"
            className="animate-bounce animate-delay-2s btn btn-secondary text-white text-lg font-bold px-8 h-12 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};
