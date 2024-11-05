// Import necessary components
import GetStartedButton from "@/components/home_components/GetStarted"; // Button to start using the application
import FQASection from '@/components/common_components/Faq'; // FAQ section component for displaying FAQs
import Footer from '@/components/common_components/nav_footer/FootBar'; // Footer component for site credits and links
import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import { fetchContents } from "@/app/api/Data"; // Function to fetch content from the API

export const metadata = {
  title: "Netflix Clone - FAQ", // Page title for SEO
  description: "Frequently Asked Questions page for the Netflix clone application, providing users with answers to common queries about account management, features, and troubleshooting. Built with Next.js and backed by MongoDB for comprehensive user support.", // Page description for SEO
  keywords: "Netflix clone, FAQ, frequently asked questions, Next.js, MongoDB, user support, account management, troubleshooting, streaming platform", // Relevant keywords for SEO
  author: "Soumajit Mandal", // Author name
};

export default async function FAQPage() {
  // Fetching FAQ data asynchronously
  const faqData = await fetchContents("HelpCenterFaq");

  return (
    <>
      <div className="bg-black text-white 3xl:w-[1920px] mx-auto px-6 lg:px-16 xl:px-24 py-16">
        <Navbar /> {/* Rendering the Navbar component */}
        <h2 className="text-3xl font-bold mb-6 text-center mt-20">Frequently Asked Questions</h2> {/* Title for FAQ section */}

        <FQASection list={faqData} /> {/* Rendering the FAQ section with fetched data */}

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center">
          <GetStartedButton set={true} /> {/* Button to encourage users to start using the app */}
        </div>
      </div>

      {/* Footer */}
      <Footer space={true} text={true} /> {/* Rendering the Footer component */}
    </>
  );
};
