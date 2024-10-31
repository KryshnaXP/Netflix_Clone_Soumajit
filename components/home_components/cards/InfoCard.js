import Image from 'next/image'; // Importing Next.js Image component
import React from 'react'; // Importing React

// InfoCard component to display information with an image
function InfoCard(props) { 
    return (
        <div className='rounded-2xl p-4 plates-bg relative'> {/* Card container with background and padding */}
            <h3 className='text-2xl font-bold'>{props.title}</h3> {/* Title of the card */}
            <h4 className='text-[#ffffffb0] mt-2 mb-12'>{props.desc}</h4> {/* Description under the title */}
            <div className='w-full h-20'></div> {/* Spacer for layout */}
            <div className='w-20 h-20 absolute bottom-4 right-6'> {/* Positioning the image */}
                <Image 
                    src={props.src} // Image source from props
                    alt={props.type} // Alt text for the image
                    width={600} // Image width
                    height={400} // Image height
                />
            </div>
        </div>
    );
}

export default InfoCard; // Correcting the export statement