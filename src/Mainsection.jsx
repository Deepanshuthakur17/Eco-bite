import React, { useRef, useEffect } from 'react';
// Note: Assuming 'react-router-dom' for modern use, adjust if using older 'react-router'
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Mainsection = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        const h1 = h1Ref.current;
        if (!h1) return; // Guard against null reference

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

        // Initialize the text splitting and animation only once
        splitTextToSpans(h1);

        const h1Spans = h1.querySelectorAll('span');

        const animation = gsap.to(h1Spans, {
            scrollTrigger: {
                trigger: h1,
                start: 'top 60%',
                // Use 'onEnter' and 'onLeaveBack' to trigger once when scrolled into view
                toggleActions: 'play reverse play reverse', 
            },
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            stagger: 0.05,
        });
        
        // Clean up ScrollTrigger instance
        return () => {
            animation.kill(); 
            ScrollTrigger.getById(h1)?.kill(); // You could set an ID for better targeting
        };
    }, []);

    return (
        // Full screen container for the section
        <div className="flex justify-center items-center min-h-screen bg-base-100 p-4 sm:p-8">
            {/* Main content area (Image/Text container) */}
            <div 
                className="relative 
                           w-full h-[70vh] sm:h-[80vh] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 
                           flex justify-center lg:mt-16 items-center rounded-xl sm:rounded-2xl overflow-hidden"
            >
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("/main-img.png")`,
                    }}
                ></div>
                
                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-5 sm:gap-6 items-center text-center px-4 sm:px-8">
                    <h1
                        ref={h1Ref}
                        // Adjusted text size for better mobile display
                        className="text-white inline-flex text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-normal"
                    >
                        Taste Sustainability
                    </h1>
                    <p
                        className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl tracking-wide"
                    >
                        EcoBites offers a range of edible cups, spoons, and plates, crafted from natural ingredients, designed to reduce waste and enhance your dining experience.
                    </p>
                    <Link
                        to="/product"
                        className="animate-bounce animate-delay-2s btn btn-secondary text-white text-md sm:text-lg font-bold px-6 sm:px-8 h-11 sm:h-12 rounded-full"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};