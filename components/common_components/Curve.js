"use client"; // This component will only run on the client side
import React, { useState, useEffect, useRef } from 'react'; // Importing necessary hooks from React
import Script from 'next/script'; // Importing Script from Next.js (not used in this snippet)

function Curve({ on }) {
    // State to hold the current window width
    const [windowWidth, setWindowWidth] = useState(null); 
    const containerRef = useRef(null); // Ref for the main container
    const textContainerRef = useRef(null); // Ref for the text container

    const [isClient, setIsClient] = useState(false); // State to check if the component is rendered on the client
    useEffect(() => {
        // Set the isClient state to true after the first render
        setIsClient(true);
    }, []);

    useEffect(() => {
        // Function to handle resizing the window
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Update the window width state
        };

        handleResize(); // Call to set initial window size

        // Add event listener for window resize
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
                // For small screens, center the containers
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

    // Render loading state for server-side rendering
    if (!isClient) {
        return (
            <div className='h-full max-w-[1920px] mx-auto overflow-hidden relative w-full md:right-0'>
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
        );
    }

    // Render the component for client-side
    return (
        <div ref={containerRef} className='h-full max-w-[1920px] mx-auto overflow-hidden relative w-[768px] md:w-full md:right-0'>
            {/* Background gradient section */}
            <div className='gradient-curve h-full curve scale-x-[1.07]'></div>
            <div className='gradient-radial h-full w-full curve scale-x-110 absolute top-2'></div>

            {/* Black bar at the bottom with conditional rendering */}
            <div ref={textContainerRef} className='bg-black absolute bottom-0 h-8 w-full'>
                {on && ( // Conditional rendering based on the 'on' prop
                    <h3 className='px-12 lg:px-36 3xl:px-[365px] pb-8 text-2xl font-bold'>
                        Trending Now
                    </h3>
                )}
            </div>
        </div>
    );
}

export default Curve; // Exporting the Curve component