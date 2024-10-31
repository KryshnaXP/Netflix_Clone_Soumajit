import React from 'react'; // Importing React

function MainInfo() {
  return (
    <div className='flex flex-col items-center w-full mx-8 sm:w-[432px] lg:w-[508px] xl:w-[588px] 3xl:w-[664px] sm:mx-auto h-[124px] lg:h-[152px] xl:h-[213px] 3xl:h-[241px]'>
      {/* Container for the informational text */}
      <h1 className='lH text-3xl lg:text-4xl text-center font-extrabold'>
        Unlimited movies, TV shows and more
        {/* Main heading */}
      </h1>
      <h1 className='text-lg xl:text-xl text-center font-semibold mt-2'>
        Starts at ₹149. Cancel at any time.
        {/* Subheading with pricing information */}
      </h1>
    </div>
  );
}

export default MainInfo; // Exporting the Info component