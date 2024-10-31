"use client";
import React, { useState, useEffect } from 'react';
import arrow from '@/elememts/rightarrow.svg';
import menu from '@/elememts/menu.svg';
import Image from 'next/image';

function PrivacyList({ list }) {
    const [show, setShow] = useState(true);
    const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded section
    const [windowWidth, setWindowWidth] = useState(0); // Initial width from window

    useEffect(() => {
        // Function to handle resizing the window
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize()

        // Set initial window size
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 920) {
            setShow(true);
        }
    }, [windowWidth]);

    function check() {
        if (windowWidth > 920) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    function handleChange(index) {
        // Toggle the expanded section
        setExpandedIndex(expandedIndex === index ? null : index);
    }

    return (
        <>
            <div className=' w-16 h-16 bg-gray-100 rounded-lg absolute top-2 left-4 xmd:hidden flex justify-center items-center'
                onClick={() => setShow(!show)}
                onBlur={() => check()}>
                <Image src={menu} alt="menu" />
            </div>
            <div className={`max-h-[996px] text-black bg-gray-100 rounded-xl mx-24 my-8 w-48 text-xs ms:text-base ms:w-64 sm:w-80 h-2/3 relative ${show ? null : "hidden"}`}>
                <ul className='px-6 py-4 h-full overflow-y-scroll custom-scrollbar'>
                    <li className='h-1/5 p-4 rounded-2xl mt-2 hover:bg-black hover:text-white'>
                        <a href="#0" className='flex items-center h-full'>
                            <p className='font-semibold'>Overview</p>
                        </a>
                    </li>
                    <div className='h-1 bg-red-500 rounded-full mt-2'></div>
                    {list.map((item, index) => (
                        <React.Fragment key={item.id || index}> {/* Use a unique identifier if available */}
                            <li className='h-1/5 p-4 mt-2 rounded-2xl hover:bg-black hover:text-white'>
                                <a
                                    href={"#" + item.section}
                                    onClick={() => handleChange(index)} // Pass index to the handler
                                    className='flex items-center justify-between h-full'
                                >
                                    <p>Section {item.section} : {item.title}</p>
                                    <Image src={arrow} alt="icon" className={`invert-[0.5] ${item.categories ? "" : "hidden"}`} />
                                </a>
                            </li>
                            <ul className={`pl-8 ${expandedIndex === index ? "" : "hidden"}`}> {/* Conditional rendering */}
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

export default PrivacyList;



