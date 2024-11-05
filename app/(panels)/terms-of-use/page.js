import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import { fetchContents } from "@/app/api/Data"; // Function to fetch terms of use content from the database

export const metadata = {
  title: "Netflix Clone - Terms of Use", // Page title
  description: "Terms of Use page for the Netflix clone application, detailing the rules and guidelines for using the platform. Built with Next.js and supported by MongoDB to ensure clarity in user agreements and compliance with legal standards.", // Page description for SEO
  keywords: "Netflix clone, Terms of Use, user agreement, platform rules, Next.js, MongoDB, legal guidelines, user responsibilities, streaming platform", // Relevant keywords for SEO
  author: "Soumajit Mandal", // Author name
};

export default async function TermsOfUse() {
  // Fetching the terms of use content from the database
  const term = await fetchContents("Terms");

  return (
    <div className="relative">
      {/* Background gradient for the entire page */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        {/* Radial gradient overlay */}
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5091460,transparent)]"></div>
      </div>

      {/* Navbar component */}
      <nav className="bg-black h-20">
        <Navbar on={true} />
      </nav>

      {/* Main content area for displaying terms of use */}
      <div className="flex flex-col 3xl:w-[1920px] mx-auto px-8 py-12 text-black space-y-8">
        {term.map((item, index) => (
          <div key={index} className="p-6 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
            {/* Title of each term */}
            <div className="text-base md:text-3xl font-bold text-gray-800 mb-2">
              {index + 1}. {item.title}
            </div>
            {/* Description of each term */}
            <div className="text-gray-600 space-y-2 text-sm md:text-base">
              {Array.isArray(item.description) ? (
                item.description.map((desc, i) => (
                  <p key={i} className="text-gray-500 pl-2 md:pl-8">
                    <strong className="text-gray-600">
                      {desc.slice(0, 4)} {/* Bold first four characters */}
                    </strong>
                    {desc.slice(4,)} {/* Remaining part of the description */}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 pl-2 md:pl-8">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="w-full bg-black">
        <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
          <Footer space={true} text={true} />
        </div>
      </div>
    </div>
  );
}
