import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import Image from "next/image";
import devices from "@/elememts/Devices.png"
import Link from "next/link";

export const metadata = {
  title: "Netflix Clone - Sign Up",
  description: "Sign up page for the Netflix clone application, allowing users to create accounts for secure access to the streaming platform. Built with Next.js and powered by MongoDB for efficient data management and user authentication.",
  keywords: "Netflix clone, sign up page, user registration, Next.js, MongoDB, streaming platform, web app, secure account creation, database integration",
  author: "Soumajit Mandal",
};

export default function Page() {
  return (
    <div className="bg-white">
      <nav className="h-20">
        <Navbar on={true} />
      </nav>

      <div className="h-[1px] bg-gray-300"></div>

      <main className="h-screen flex justify-center py-40">
        <div className="flex flex-col justify-center items-center">
          <Image className="w-64" src={devices} alt="tv" />
          <div className="space-y-1 mt-12 mb-12">
            <p className="text-gray-800 text-center text-xs">STEP <strong>1</strong> OF <strong>4</strong></p>
            <p className="text-gray-800 text-center text-3xl font-semibold w-2/3 mx-auto">Finish setting up your account</p>
            <p className="text-gray-800 md:text-center w-1/2 mx-auto">Netflix is personalised for you. Create a password to watch on any device at any time.</p>
          </div>
          <Link href='/project' className="w-7/12 mx-auto bg-[#e50914] h-16 text-center pt-4 rounded-md text-2xl">
            Next
          </Link>
        </div>
      </main>

      <div className="w-full bg-[#f2f1f1]">
        <div className="3xl:w-[1920px] 3xl:px-56 mx-auto py-8">
          <Footer space={false} text={false} />
        </div>
      </div>
    </div>
  );
}
