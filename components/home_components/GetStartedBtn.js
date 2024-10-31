"use client";
import React, { useEffect, useState } from 'react'; // Importing React and hooks
import arrow from '@/elememts/rightarrow.svg'; // Importing the arrow image
import Image from 'next/image'; // Importing the Next.js Image component
import Link from 'next/link'; // Importing the Next.js Link component

// GetStartedBtn component for navigation
function GetStartedBtn({ set }) {
    const [Check, setCheck] = useState(null); // Initialize email state as null
    //const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted

    useEffect(() => {
        // Runs only in the client
        const check = localStorage.getItem("check");
        setCheck(check); // Update state with email from localStorage
        //setIsMounted(true); // Set mounted state to true
    }, []);

    function checkStorage() {
        const check = localStorage.getItem("check");
        setCheck(check); // Update state with email from localStorage
    }

    function cleanUp() {
        localStorage.removeItem("check"); // Clear UserEmail from localStorage
        setCheck(null); // Clear the email state
    }

    // Only render if the component has mounted to avoid hydration issues
    // if (!isMounted) {
    //     return null; // or a loading spinner
    // }
    return (
        <Link
            href={Check == 'true' ? '/sign-up' : '/#'}
            onClick={() => cleanUp()}
            onMouseEnter={() => checkStorage()}
            className='bg-[#e50914] hover:bg-red-700 rounded h-14 w-40 flex justify-center items-center text-xl mx-auto md:text-md font-semibold mt-4 sm:mt-0 sm:w-[180px] xl:w-[213px]'
        >
            Get Started {/* Button text */}
            < Image
                src={arrow}
                alt='arrow'
                className='ml-1' // Margin left for spacing
            />
        </Link >
    );
}

export default GetStartedBtn;
