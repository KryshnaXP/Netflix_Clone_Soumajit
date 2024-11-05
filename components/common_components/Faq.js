"use client";
import { useState } from 'react'; // Importing useState hook from React
import Image from 'next/image'; // Importing Next.js Image component
import plus from '@/elememts/plus.svg'; // Importing plus icon for toggle


function Faq({ list }) { // Renamed Questions to Faq

    // State to track which FAQ is currently open
    const [show, setShow] = useState(0);

    // Function to handle toggling of FAQs
    function handleChange(value) {
        setShow(prevShow => (prevShow === value ? 0 : value)); // Toggle the current FAQ
    }

    return (
        <div className='px-12 lg:px-36 mb-12'>
            {/* Frequently Asked Questions section */}
            {list.map((item, index) => (
                <div key={index} > {/* Added key for the top-level div to avoid React warning */}
                    <div
                        className='bg-[#323232] h-[72px] px-6 lg:h-[82px] hover:bg-[#454545] transition-all duration-200 flex justify-between items-center cursor-pointer'
                        onClick={() => handleChange(index + 1)} // Toggle FAQ on click
                    >
                        <h5 className='sm:text-2xl ms:text-lg text-md font-medium'>{item.question}</h5>
                        <Image src={plus} alt="option" className={`${show === index + 1 ? 'rotate-45' : ''}`} /> {/* Rotate icon based on state */}
                    </div>

                    {/* Smooth toggleable answer */}
                    <div className={`overflow-hidden transition-all duration-300 ease-out mb-6 ${show === index + 1 ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <div className='bg-[#323232] text-2xl font-medium p-6 mt-[1px]'>
                            {item.answer.map((para, number) => (
                                <p key={number} className='mb-6 answer'>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Faq; // Exporting the Faq component
