"use client";
import React, { useState, useRef, useEffect } from 'react';
import dropdown from "@/elememts/dropdown.svg"; // Importing the dropdown image
import Image from 'next/image';
import MediaCard from './cards/MediaCard'; // Importing MediaCard component
import left from '@/elememts/arrow-left.svg'
import right from '@/elememts/arrow-right.svg'
import Script from 'next/script';

function Menu({Contents,Filter}) {

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    // State to track the selected region and its index
    const [selectedRegion, setSelectedRegion] = useState({
        region: Filter[0].region,
        index: 0
    });

    // State to track the selected type and its index
    const [selectedType, setSelectedType] = useState({
        type: Filter[0].content[0],
        index: 0
    });

    // Handler for region selection change
    const handleRegionChange = (event) => {
        const selected = event.target.value; // Get the selected region
        const index = Filter.findIndex(item => item.region === selected); // Find the index of the selected region

        // Update the selected region and reset the selected type
        setSelectedRegion({ region: selected, index });
        setSelectedType({ type: Filter[index].content[0], index: 0 });
    };

    // Handler for type selection change
    const handleTypeChange = (event) => {
        const selected = event.target.value; // Get the selected type
        const index = Filter[selectedRegion.index].content.findIndex(item => item === selected); // Find the index of the selected type

        // Update the selected type
        setSelectedType({ type: selected, index });
    };


    const filterArray = (array) => {
        const { lang } = Filter[selectedRegion.index]; // Get the language for the selected region
        const { type } = selectedType; // Get the selected type

        // If the selected region is 'Global', apply different filtering logic
        if (selectedRegion.region === 'Global') {
            // Check if selected type includes the language
            if (selectedType.type.includes(Filter[selectedRegion.index].lang)) {
                return array.filter(item => {
                    return item.lang === Filter[selectedRegion.index].lang && selectedType.type.includes(item.type);
                });
            } else {
                return array.filter(item => {
                    return item.lang !== Filter[selectedRegion.index].lang && selectedType.type.includes(item.type);
                });
            }
        }

        // Filter array based on selected language and type
        return array.filter(item => item.lang === lang && type.includes(item.type));
    };



    const scrollRef = useRef(null); // Create a ref for the scrollable div

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left'
                ? -scrollRef.current.clientWidth // Scroll left
                : scrollRef.current.clientWidth; // Scroll right

            // Get the current scroll position
            const start = scrollRef.current.scrollLeft;
            const end = start + scrollAmount;
            const duration = 600; // Duration for the scroll in milliseconds
            const startTime = performance.now(); // Get the start time

            // Function to animate the scroll
            const animateScroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1); // Calculate the progress (0 to 1)

                // Calculate the easing effect (you can change this for different effects)
                const easing = Math.sin(progress * Math.PI / 2); // Smooth start and end

                // Calculate the new scroll position
                scrollRef.current.scrollLeft = start + (end - start) * easing;

                // Continue the animation if not done yet
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            };

            // Start the animation
            requestAnimationFrame(animateScroll);
        } else {
            console.error("Error: scrollRef is null");
        }
    };


    if (!isClient) {
        return <div className='w-full h-[312px] lg:h-[304px] xl:h-[368px] 3xl:h-[432px] flex justify-center items-center invert-[0.2]'>
            <lord-icon
                className="w-64 h-20"
                src="https://cdn.lordicon.com/mdfymwpd.json"
                trigger="loop"
                delay="0"
                style={{ "width": "180px", "height": "180px" }}>
            </lord-icon>
            <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
        </div>; //loading state
    }

    return (
        <div className='w-full h-[312px] lg:h-[304px] xl:h-[368px] 3xl:h-[432px]'>
            {/* Dropdown for selecting region */}
            <div className='w-full flex flex-col lg:flex-row gap-4 my-2 px-12 lg:px-36'>
                <div className='relative flex justify-start items-center gap-4'>
                    <select
                        id='region'
                        className="appearance-none bg-[#1c1b1b96] border-gray-500 border-[1px] text-white rounded focus:outline-double pl-6 focus:ring-2 focus:ring-white h-10 w-full mx-auto lg:w-28"
                        value={selectedRegion.region} // Set the selected value
                        onChange={handleRegionChange} // Handle change event
                        autoComplete='off'
                        fdprocessedid="nothere"
                    >
                        {Filter.map((item, index) => (
                            <option key={index} className="text-black" value={item.region}>{item.region}</option>
                        ))}
                    </select>
                    <Image src={dropdown} alt='dropdown' className='absolute right-10 lg:right-4' />
                </div>
                {/* Dropdown for selecting type */}
                <div className='relative flex justify-start items-center gap-4'>
                    <select
                        id='type'
                        className={`appearance-none bg-[#1c1b1b96] border-gray-500 border-[1px] text-white rounded focus:outline-double pl-6 focus:ring-2 focus:ring-white h-10 w-full mx-auto ${Filter[selectedRegion.index].width}`}
                        value={selectedType.type} // Set the selected value
                        onChange={handleTypeChange} // Handle change event
                        autoComplete='off'
                        fdprocessedid="itsalreadyset"
                    >
                        {Filter[selectedRegion.index].content.map((item, index) => (
                            <option key={index} className="text-black" value={item}>{item}</option>
                        ))}
                    </select>
                    <Image src={dropdown} alt='dropdown' className='absolute right-10 lg:right-4' />
                </div>
            </div>
            {/* Displaying the filtered contents */}
            <div className='relative w-11/12 h-52 lg:h-64 xl:h-80 3xl:h-96 pl-12 lg:pl-36'>
                <div ref={scrollRef} className='w-full md:w-[85%] mx-auto h-full flex gap-8 overflow-x-scroll items-center no-scrollbar transition-all duration-300'>
                    {filterArray(Contents).map((item, index) => (
                        <div key={index} className='w-28 h-40 lg:w-36 xl:w-44 3xl:w-52 lg:h-52 xl:h-64 3xl:h-80 hover:scale-105 transition-all duration-300'>
                            <MediaCard title={item.names} index={index + 1} lang={item.lang} url={item.link} type={item.type} />
                        </div>
                    ))}
                </div>
                <div
                    onClick={() => scroll('left')}
                    className='bg-[#30303065] w-12 h-[40%] absolute top-[30%] rounded-l-xl hidden md:flex justify-center items-center'>
                    <Image className='invert-[0.3] p-2' src={left} alt="left" />
                </div>
                <div
                    onClick={() => scroll('right')}
                    className='bg-[#30303065] w-12 h-[40%] absolute top-[30%] right-0 rounded-r-3xl hidden md:flex justify-center items-center'>
                    <Image className='invert-[0.3] p-2' src={right} alt="right" />
                </div>
            </div>
        </div>
    );
}

export default Menu;