import React from 'react'; // Importing React
import Image from "next/image"; // Importing Next.js Image component
import lang from "@/elememts/lang.svg"; // Importing the language icon
import dropdown from "@/elememts/dropdown.svg"; // Importing the dropdown icon

// Language selection component with optional styling based on isNav prop
function Lang({ isNav , id }) {
    return (
        <div className='relative flex items-center gap-4'> {/* Container for language selection */}
            <Image src={lang} alt='Language selection icon' className='absolute left-3'/> {/* Language icon */}
            <label htmlFor={id} className='sr-only'>Select Language</label> {/* Screen reader only label */}
            <select
                id={id} // Adding an ID for accessibility
                className={`appearance-none bg-[#323232aa] border-gray-500 border-[1px] pl-8 px-4 rounded focus:outline-double focus:ring-2 focus:ring-white h-8 items-center justify-around flex hover:bg-[#323232cc] focus:bg-[#ffffff38] ${isNav ? 'text-transparent md:text-white w-16 md:w-32' : 'text-white min-w-[120px]'}`}
                aria-label="Language selection" // ARIA label for better accessibility
                fdprocessedid="notthistime"
            >
                <option lang="en" className='text-black' value="en-IN">English</option> {/* English option */}
                <option lang="hi" className='text-black' value="hi-IN">हिन्दी</option> {/* Hindi option */}
            </select>
            <Image src={dropdown} alt='Dropdown icon' className={`absolute ${isNav ? "right-3" : "left-24"}`} /> {/* Dropdown icon */}
        </div>
    );
}

export default Lang; // Exporting the Lang component