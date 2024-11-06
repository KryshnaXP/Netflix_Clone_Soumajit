import GetStartedButton from "@/components/home_components/GetStarted"; // Importing the button to initiate user engagement
import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site-wide navigation
import MainInfo from "@/components/home_components/MainInfo"; // Component displaying main informational content
import BottomCurve from "@/components/common_components/Curve"; // Component for decorative bottom curve
import RightVerticalCurve from "@/components/common_components/VerticalCurve"; // Right vertical curve component for enhanced aesthetics on larger screens
import MenuSelector from "@/components/home_components/Menu"; // Menu component for selecting content options
import InfoCardContainer from "@/components/home_components/InfoCardContainer"; // Container component for displaying informational cards
import FAQSection from "@/components/common_components/Faq"; // Component to display frequently asked questions
import Footer from '@/components/common_components/nav_footer/FootBar'; // Footer component for site credits and important links
import Image from "next/image"; // Image component from Next.js for optimized image loading
import { fetchContents } from "./api/Data"; // API function to fetch data from the server
import { unstable_cache } from 'next/cache'; // Importing unstable_cache

export default async function Home() {

   // Using unstable_cache for cacheable fetching with revalidation
  const contents = await unstable_cache(() => fetchContents("Contents"), ['contents'], { revalidate: 3600 }); // Fetching content data
  const faqData = await unstable_cache(() => fetchContents("FAQData"), ['faqData'], { revalidate: 3600 }); // Fetching frequently asked questions data
  const filter = await unstable_cache(() => fetchContents("Filter"), ['filter'], { revalidate: 3600 }); // Fetching filter options data

  return (
    <>
      <div className="relative home h-[664px] lg:h-[760px] xl:h-[862px] 3xl:h-[996px] w-full">

        {/* Background image to create a visually appealing backdrop */}
        <div>
          <Image
            src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg 959w"
            className="w-full h-full object-cover z-10 absolute inset-0 3xl:w-[1920px] 3xl:h-[996px] mx-auto"
            alt="background image" // Alt text for accessibility
            width={500} // Setting the width based on design specifications
            height={300} // Setting the height based on design specifications
            priority // Indicates to Next.js to load the image with high priority
          />
        </div>

        {/* Navbar positioned at the top with a high z-index to stay above other elements */}
        <nav className="bg-nav absolute inset-x-0 top-0 z-20 h-20">
          <Navbar on={true} />
        </nav>

        {/* Main content area with high z-index for visibility */}
        <div className="absolute inset-x-0 top-20 z-30 h-4/5 flex flex-col items-center justify-start mt-16 sm:mt-0 sm:justify-center">
          <MainInfo />
          <GetStartedButton set={false} /> {/* Button to encourage user registration or engagement */}
        </div>

        {/* Decorative bottom curve to enhance visual design */}
        <div className="absolute bottom-0 z-20 h-40 w-full overflow-hidden">
          <BottomCurve on={true} />
        </div>

        {/* Right vertical curve displayed on larger screens for added design interest */}
        <div className="hidden 3xl:block absolute inset-y-0 right-0 z-0 w-screen">
          <RightVerticalCurve />
        </div>

        {/* Background gradient overlay for visual effect */}
        <div className="bg-cover 3xl:w-[1920px] mx-auto absolute inset-0 z-10 bg-gradient-to-r from-black/85 to-transparent"></div>
      </div>

      {/* Container for additional content, ensuring responsive design */}
      <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black">
        <MenuSelector Contents={contents} Filter={filter} /> {/* Menu for content selection */}
        <h3 className='px-12 lg:px-36 py-8 text-2xl font-bold'>More reasons to join</h3>
        <InfoCardContainer /> {/* Container for displaying information cards */}
        <h3 className='px-12 lg:px-36 pt-16 pb-8 text-2xl font-bold'>Frequently Asked Questions</h3>
        <FAQSection list={faqData} /> {/* FAQ section with relevant data */}
        <div className="z-20 sticky">
          <GetStartedButton set={true} /> {/* Persistent button for user engagement */}
        </div>
        <Footer space={true} text={true} /> {/* Footer containing site credits and important links */}
      </div>
    </>
  );
}
