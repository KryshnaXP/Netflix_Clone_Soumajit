// Import necessary components
import GetStartedButton from "@/components/home_components/GetStarted";
import FQASection from '@/components/common_components/Faq' // Create FAQItem component for individual FAQ items
import Footer from '@/components/common_components/nav_footer/FootBar';
import Navbar from "@/components/common_components/nav_footer/Navbar";
import { fetchContents } from "@/app/api/Data";

export const metadata = {
  title: "Netflix Clone - FAQ",
  description: "Frequently Asked Questions page for the Netflix clone application, providing users with answers to common queries about account management, features, and troubleshooting. Built with Next.js and backed by MongoDB for comprehensive user support.",
  keywords: "Netflix clone, FAQ, frequently asked questions, Next.js, MongoDB, user support, account management, troubleshooting, streaming platform",
  author: "Soumajit Mandal",
};

export default async function FAQPage() {

  const faqData = await fetchContents("HelpCenterFaq")

  return (
    <>
      <div className="bg-black text-white 3xl:w-[1920px] mx-auto px-6 lg:px-16 xl:px-24 py-16">
        <Navbar />
        <h2 className="text-3xl font-bold mb-6 text-center mt-20">Frequently Asked Questions</h2>

        <FQASection list={faqData} />

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <GetStartedButton set={true} />
        </div>
      </div>

      {/* Footer */}
      <Footer space={true} text={true} />
    </>
  );
};

