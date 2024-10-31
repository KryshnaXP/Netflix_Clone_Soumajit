"use client";
import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

function Curve({ on }) {
    const [windowWidth, setWindowWidth] = useState(null); // Initial width from window
    const containerRef = useRef(null);
    const textContainerRef = useRef(null);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        // Function to handle resizing the window
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        // Set initial window size
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Adjust the styles based on window width
        if (containerRef.current && textContainerRef.current) {
            if (windowWidth < 768) {
                containerRef.current.style.left = `${(windowWidth - 768) / 2}px`;
                textContainerRef.current.style.left = `${(768 - windowWidth) / 2}px`;
                textContainerRef.current.style.width = `${windowWidth}px`;
            } else {
                // Reset styles for larger screens
                containerRef.current.style.left = '0px';
                textContainerRef.current.style.left = '0px';
                textContainerRef.current.style.width = ''; // Resetting width for larger screens
            }
        }
    }, [windowWidth]);

    if (!isClient) {
        return <div className='h-full max-w-[1920px] mx-auto overflow-hidden relative w-full md:right-0'>
            {/* Background gradient section */}
            <div className='gradient-curve h-full curve scale-x-[1.07]'></div>
            <div className='gradient-radial h-full w-full curve scale-x-110 absolute top-2'></div>

            {/* Black bar at the bottom with conditional rendering */}
            <div className='bg-black absolute bottom-0 h-8 w-full'>
                <h3 className='px-12 lg:px-36 3xl:px-[365px] pb-8 text-2xl font-bold'>
                    Trending Now
                </h3>
            </div>
        </div>
    }

    return (
        <div ref={containerRef} className='h-full max-w-[1920px] mx-auto overflow-hidden relative w-[768px] md:w-full md:right-0'>
            {/* Background gradient section */}
            <div className='gradient-curve h-full curve scale-x-[1.07]'></div>
            <div className='gradient-radial h-full w-full curve scale-x-110 absolute top-2'></div>

            {/* Black bar at the bottom with conditional rendering */}
            <div ref={textContainerRef} className='bg-black absolute bottom-0 h-8 w-full'>
                {on && (
                    <h3 className='px-12 lg:px-36 3xl:px-[365px] pb-8 text-2xl font-bold'>
                        Trending Now
                    </h3>
                )}
            </div>
        </div>
    );
}

export default Curve;