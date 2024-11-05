import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import Link from 'next/link';
import Image from 'next/image';
import { fetchContents } from "@/app/api/Data";

export const metadata = {
    title: "Netflix Clone - Media",
    description: "Media page for the Netflix clone application, showcasing various content options available for streaming, including movies, series, and documentaries. Built with Next.js and powered by MongoDB to provide a rich media experience and easy content navigation.",
    keywords: "Netflix clone, Media, streaming content, movies, series, documentaries, Next.js, MongoDB, user experience, content navigation",
    author: "Soumajit Mandal",
};


export default async function MediaPage() {

    const profiles = await fetchContents('Media')

    return (
        <div className="relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="fixed bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e5091460,transparent)]"></div>
            </div>
            <nav className="bg-black h-20">
                <Navbar on={true} />
            </nav>

            <div className="flex flex-col 3xl:w-[1920px] mx-auto px-8 py-12 text-black space-y-8">
                <div className="p-6 border-l-4 border-r-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm text-center w-11/12 sm:w-4/5 lg:w-1/3 mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Connect with Us</h2>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">Follow us on social media to stay updated!</p>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-col space-y-6 w-5/6 sm:w-2/3 mx-auto">
                    {profiles.map(profile => (
                        profile.available == 'on' ? <div key={profile.name} className="flex items-center p-4 border-l-4 border-r-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm justify-start">
                            <Image className="mix-blend-darken w-[40px] h-[40px]" src={profile.image} alt={profile.alt} width={80} height={80} />
                            <div className="ml-4">
                                <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{profile.name}</h3>
                                <p className="text-gray-600 text-sm md:text-lg ">Profile Name: @{profile.username}</p>
                                <Link href={profile.url} className="text-red-500 text-sm md:text-lg ">View Profile</Link>
                            </div>
                        </div>
                            :
                            null
                    ))}
                </div>

            </div>

            <div className="w-full bg-black">
                <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
                    <Footer space={true} text={true} />
                </div>
            </div>
        </div>
    );
}