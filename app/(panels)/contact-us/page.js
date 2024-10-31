import Navbar from "@/components/common_components/nav_footer/Navbar";// Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links

export const metadata = {
  title: "Netflix Clone - Contact Us",
  description: "Contact Us page for the Netflix clone application, allowing users to reach out for support, feedback, or inquiries. Built with Next.js and powered by MongoDB to facilitate seamless communication and user engagement.",
  keywords: "Netflix clone, Contact Us, user support, feedback, inquiries, Next.js, MongoDB, customer service, communication, streaming platform",
  author: "Soumajit Mandal",
};

export default function ContactUs() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5091460,transparent)]"></div>
      </div>
      <nav className="bg-black h-20">
        <Navbar on={true} />
      </nav>

      <div className="flex flex-col 3xl:w-[1920px] mx-auto px-8 py-12 text-black space-y-8">
        <div className="p-6 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Tell us more and we&apos;ll find the best solution for you.
          </p>
        </div>

        <div className="p-6 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-2">Email: support@example.com</p>
          <p className="text-gray-600 mb-2">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-600 mb-2">Address: 123 Example Street, City, Country</p>
        </div>

        <div className="p-6 border-l-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Business Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
          <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>

      <div className="w-full bg-black">
        <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
          <Footer space={true} text={true}/>
        </div>
      </div>
    </div>
  );
}
