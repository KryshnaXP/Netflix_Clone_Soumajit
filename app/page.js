import GetStartedButton from "@/components/home_components/GetStarted"; // Improved import name for clarity
import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import MainInfo from "@/components/home_components/MainInfo"; // Main information section component
import BottomCurve from "@/components/common_components/Curve"; // Bottom decorative curve component
import RightVerticalCurve from "@/components/common_components/VerticalCurve"; // Right vertical curve component for large screens
import MenuSelector from "@/components/home_components/Menu"; // Menu component for content selection
import InfoCardContainer from "@/components/home_components/InfoCardContainer"; // Container for information cards
import FAQSection from "@/components/common_components/Faq"; // Frequently Asked Questions component
import Footer from '@/components/common_components/nav_footer/FootBar'; // Footer component for site credits and links
import Image from "next/image";
import { fetchContents } from "./api/Data";

export default async function Home() {

  const contents = await fetchContents("Contents")
  const faqData = await fetchContents("FAQData")
  const filter = await fetchContents("Filter")

  return (
    <>
      <div className="relative home h-[664px] lg:h-[760px] xl:h-[862px] 3xl:h-[996px] w-full">

        {/* Background image */}
        <div>
          <Image
            src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg 959w"
            className="w-full h-full object-cover z-10 absolute inset-0 3xl:w-[1920px] 3xl:h-[996px] mx-auto"
            alt="backgorund-image"
            width={500} // Set the width according to your design
            height={300} // Set the height according to your design
            priority // This tells Next.js to load the image with high priority
          />
        </div>

        {/* Navbar - Ensure high z-index */}
        <nav className="bg-nav absolute inset-x-0 top-0 z-20 h-20">
          <Navbar on={true} />
        </nav>

        {/* Content - Set high z-index */}
        <div className="absolute inset-x-0 top-20 z-30 h-4/5 flex flex-col items-center justify-start mt-16 sm:mt-0 sm:justify-center">
          <MainInfo />
          <GetStartedButton set={false} /> {/* Get started button */}
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 z-20 h-40 w-full overflow-hidden">
          <BottomCurve on={true} />
        </div>

        {/* Vertical curve visible on large screens */}
        <div className="hidden 3xl:block absolute inset-y-0 right-0 z-0 w-screen">
          <RightVerticalCurve />
        </div>

        {/* Background gradient overlay */}
        <div className="bg-cover 3xl:w-[1920px] mx-auto absolute inset-0 z-10 bg-gradient-to-r from-black/85 to-transparent"></div>
      </div>

      {/* Additional content */}
      <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black">
        <MenuSelector Contents={contents} Filter={filter} />
        <h3 className='px-12 lg:px-36 py-8 text-2xl font-bold'>More reasons to join</h3>
        <InfoCardContainer />
        <h3 className='px-12 lg:px-36 pt-16 pb-8 text-2xl font-bold'>Frequently Asked Questions</h3>
        <FAQSection list={faqData} />
        <div className="z-20 sticky">
          <GetStartedButton set={true} />
        </div>
        <Footer space={true} text={true} />
      </div>
    </>
  );
}
