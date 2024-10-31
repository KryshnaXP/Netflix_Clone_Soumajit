import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import { fetchContents } from "@/app/api/Data";

export const metadata = {
  title: "Netflix Clone - Terms of Use",
  description: "Terms of Use page for the Netflix clone application, detailing the rules and guidelines for using the platform. Built with Next.js and supported by MongoDB to ensure clarity in user agreements and compliance with legal standards.",
  keywords: "Netflix clone, Terms of Use, user agreement, platform rules, Next.js, MongoDB, legal guidelines, user responsibilities, streaming platform",
  author: "Soumajit Mandal",
};

export default async function TermsOfUse() {

  const term = await fetchContents("Terms")

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5091460,transparent)]"></div>
      </div>
      <nav className="bg-black h-20">
        <Navbar on={true} />
      </nav>

      <div className="flex flex-col 3xl:w-[1920px] mx-auto px-8 py-12 text-black space-y-8">
        {term.map((item, index) => (
          <div key={index} className="p-6 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
            <div className="text-base md:text-3xl font-bold text-gray-800 mb-2">
              {index+1}. {item.title}
            </div>
            <div className="text-gray-600 space-y-2 text-sm md:text-base">
              {Array.isArray(item.description) ? (
                item.description.map((desc, i) => (
                  <p key={i} className="text-gray-500 pl-2 md:pl-8">
                    <strong className="text-gray-600">
                      {desc.slice(0, 4)}
                    </strong>
                    {desc.slice(4,)}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 pl-2 md:pl-8">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-black">
        <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
          <Footer space={true} text={true}/>
        </div>
      </div>
    </div>
  );
}

