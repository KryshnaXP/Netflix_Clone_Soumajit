import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import PrivacyList from "@/components/privacy_components/PrivacyList"; // Component to display the privacy policy list
import { fetchContents } from "@/app/api/Data"; // Function to fetch content from the API

export const metadata = {
  title: "Netflix Clone - Privacy Policy", // Page title
  description: "Privacy Policy page for the Netflix clone application, outlining how user data is collected, used, and protected. Built with Next.js and backed by MongoDB to ensure compliance with data protection regulations and user privacy standards.", // Page description for SEO
  keywords: "Netflix clone, Privacy Policy, data protection, user privacy, Next.js, MongoDB, data collection, privacy standards, user information security", // Relevant keywords for SEO
  author: "Soumajit Mandal", // Author name
};

export default async function PrivacyStatement() {
  // Fetching privacy policy and overview content asynchronously
  const privacyPolicy = await fetchContents("Privacy");
  const overview = await fetchContents("OverView");

  return (
    <div className="relative">
      {/* Background gradient for the page */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5091460,transparent)]"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-black h-20">
        <Navbar on={true} /> {/* Rendering the Navbar component */}
      </nav>

      <div className="flex 3xl:w-[1920px] mx-auto relative">
        {/* Fixed PrivacyList sidebar */}
        <aside className="sticky left-[-10vw] top-20 w-0 xmd:w-80 h-[100dvh]">
          <PrivacyList list={privacyPolicy} /> {/* Rendering the PrivacyList component with fetched data */}
        </aside>

        {/* Scrollable content area */}
        <main className="flex-grow ms:px-8 py-12 ml-16 xmd:ml-0 xmd:pl-48 overflow-y-auto">
          <div className="text-black space-y-8">
            {/* Mapping through the overview content */}
            {overview.map((item, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                <h3 className="text-lg text-gray-600">{item.description}</h3>
                {/* If there are subpoints, map through them */}
                {item.subpoints && item.subpoints.map((points, number) => (
                  <div key={number} className="mt-4">
                    <h4 className="text-xl font-semibold text-gray-700">&#x2022; {points.title}</h4>
                    <h5 className="text-md text-gray-500">{points.description}</h5>
                  </div>
                ))}
              </div>
            ))}

            {/* Mapping through the privacy policy content */}
            {privacyPolicy.map((item, index) => (
              <div key={index} className="mt-8 p-4 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
                <div id={item.section}>
                  <h2 className="text-xl font-semibold text-gray-800 underline">
                    Section {item.section}: {item.title}
                  </h2>
                </div>
                <div className="text-gray-600">{item.description}</div>
                {/* If there are categories, map through them */}
                {item.categories && item.categories.map((category, number) => (
                  <div key={number} id={category.category} className="mt-2">
                    <div className="font-medium text-gray-700">&#x2022; {category.category}</div>
                    <div className="text-gray-500">{category.description}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="w-full bg-black">
        <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
          <Footer space={true} text={true}/> {/* Rendering the Footer component */}
        </div>
      </div>
    </div>
  );
}