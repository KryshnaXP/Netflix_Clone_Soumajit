import logo from "@/elememts/netflixlogo.svg"; // Importing the Netflix logo
import Link from 'next/link'; // Importing Link component from Next.js
import Lang from '@/components/common_components/Languages'; // Importing the language selection component
import Image from 'next/image'; // Importing Next.js Image component for optimized image loading

// Navbar component to display the logo, language selection, and sign-in button
function Navbar({ on }) {
  return (
    <div className='h-full w-full px-4 md:px-8 lg:px-20 xl:px-36 3xl:w-[1920px] 3xl:px-80 mx-auto flex items-center justify-between'>
      <Link href="/" className='cursor-pointer'> {/* Logo linking to the home page */}
        <Image src={logo} alt='Netflix Logo' className='h-6 w-36 md:h-11 ml-2'/>
      </Link>
      <div className='flex items-center gap-4'> {/* Container for language selection and sign-in button */}
        <Lang isNav={true} id={'Nav-lang'} /> {/* Language selection component */}
        {on ? (
          <Link href='/login' className='bg-[#e50914] hover:bg-red-700 rounded h-8 w-20 flex justify-center items-center text-sm md:text-md font-bold'>
            Sign In {/* Sign in button */}
          </Link>
        ) : null} {/* Render sign-in button conditionally based on 'on' prop */}
      </div>
    </div>
  );
}

export default Navbar; // Exporting the Navbar component