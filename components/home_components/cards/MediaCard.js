import Image from 'next/image'
import React from 'react'

function MediaCard(props) {
    return (
        // Main container with key, title, and language attributes
        <div
            key={props.index}
            name={props.title}
            lang={props.lang}
            type={props.type}
            className='relative w-28 h-40 lg:w-36 xl:w-44 3xl:w-52 lg:h-52 xl:h-64 3xl:h-80'
        >
            {/* Display the movie image with a responsive layout and rounded corners */}
            <Image
                src={props.url}
                alt={props.title}
                width={600}
                height={400}
                className='w-full h-full object-contain ml-4'
            />

            {/* Single index text element with text-border class for border effect */}
            <p
                className='absolute left-1 bottom-1 text-7xl font-bold text-black text-border lg:bottom-2 xl:bottom-4 3xl:bottom-9 xl:text-8xl 3xl:text-9xl xl:-left-0 3xl:-left-1'
            >
                {props.index}
            </p>

        </div>
    );
}

export default MediaCard