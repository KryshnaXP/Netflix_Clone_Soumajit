"use client"; // This component will only run on the client side
import React, { useState, useEffect } from 'react'; // Importing necessary hooks from React
import arrow from '@/elememts/rightarrow.svg'; // Importing arrow icon
import menu from '@/elememts/menu.svg'; // Importing menu icon
import Image from 'next/image'; // Importing Image component from Next.js

function PrivacyList({ list }) {
    // State to manage the visibility of the menu
    const [show, setShow] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded section
    const [windowWidth, setWindowWidth] = useState(0); // Initial width from window

    useEffect(() => {
        // Function to handle resizing the window
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Update window width state
        };

        handleResize(); // Set initial window size

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Set 'show' to true if window width is greater than 920px
        if (windowWidth > 920) {
            setShow(true);
        }
    }, [windowWidth]);

    function check() {
        // Check window width to set 'show' state
        if (windowWidth > 920) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    function handleChange(index) {
        // Toggle the expanded section based on the index
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <>
            {/* Button to toggle menu visibility for smaller screens */}
            <div className='w-10 h-10 ms:w-16 ms:h-16 bg-gray-100 rounded-lg absolute top-2 left-4 xmd:hidden flex justify-center items-center'
                onClick={() => setShow(!show)} // Toggle show state on click
                onBlur={() => check()}> {/* Check window width on blur */}
                <Image src={menu} alt="menu" className='w-6 h-6 ms:w-12 ms:h-12' />
            </div>
            {/* Sidebar menu with conditional rendering based on 'show' state */}
            <div className={`max-h-[996px] text-black bg-gray-100 rounded-xl mx-24 my-8 w-48 text-xs ms:text-base ms:w-64 sm:w-80 h-2/3 relative ${show ? null : "hidden"}`}>
                <ul className='px-6 py-4 h-full overflow-y-scroll custom-scrollbar'>
                    {/* Static Overview section */}
                    <li className='h-1/5 p-4 rounded-2xl mt-2 hover:bg-black hover:text-white'>
                        <a href="#0" className='flex items-center h-full'>
                            <p className='font-semibold'>Overview</p>
                        </a>
                    </li>
                    {/* Divider between Overview and sections */}
                    <div className='h-1 bg-red-500 rounded-full mt-2'></div>
                    {/* Mapping through the list to create sections */}
                    {list.map((item, index) => (
                        <React.Fragment key={item.id || index}> {/* Use a unique identifier if available */}
                            <li className='h-1/5 p-4 mt-2 rounded-2xl hover:bg-black hover:text-white'>
                                <a
                                    href={"#" + item.section} // Link to the section
                                    onClick={() => handleChange(index)} // Pass index to the handler to toggle expansion
                                    className='flex items-center justify-between h-full'
                                >
                                    <p>Section {item.section} : {item.title}</p>
                                    {/* Arrow icon for expandable sections */}
                                    <Image src={arrow} alt="icon" className={`invert-[0.5] ${item.categories ? "" : "hidden"}`} />
                                </a>
                            </li>
                            {/* Conditional rendering for categories under each section */}
                            <ul className={`pl-8 ${expandedIndex === index ? "" : "hidden"}`}>
                                {item.categories && item.categories.map((category, number) => (
                                    <li key={category.id || number} className='h-1/5 p-4 mt-2 rounded-2xl hover:bg-black hover:text-white'>
                                        <a href={"#" + category.category}>
                                            <p>{category.category}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PrivacyList; // Exporting the PrivacyList component