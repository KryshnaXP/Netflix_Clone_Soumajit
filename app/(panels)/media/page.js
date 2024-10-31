import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Netflix Clone - Media",
    description: "Media page for the Netflix clone application, showcasing various content options available for streaming, including movies, series, and documentaries. Built with Next.js and powered by MongoDB to provide a rich media experience and easy content navigation.",
    keywords: "Netflix clone, Media, streaming content, movies, series, documentaries, Next.js, MongoDB, user experience, content navigation",
    author: "Soumajit Mandal",
};


export default function MediaPage() {

    const profiles = [
        { name: 'Instagram', url: 'https://instagram.com/profile_name', alt: 'Instagram logo', image: "data:image/jpeg;base64,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" },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/profile_name', alt: 'LinkedIn logo', image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=" },
        { name: 'GitHub', url: 'https://github.com/in/profile_name', alt: 'GitHub logo', image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD5+fnk5OSRkZFQUFBxcXHZ2dksLCzExMTu7u7f39/29vZ8fHzo6OjLy8u8vLyzs7NBQUGYmJhKSkpjY2MYGBjT09M5OTmsrKyEhISmpqZcXFwTExOKiopVVVUkJCSS2/+7AAACIElEQVRIiZ2W54KDIAyACVitq+7Rdd77P+UpMiIyes2vpuSDLIKEOISyZJoSRl3rVqmiCyi5RNVn1BTDSeIpiNXXM7bJtfaf5sA46jm1dGOblA6MjX4OYGQ2Lg1hm6RnrvmEA2i+5E5k9SkHcGiH7HMOIEPgLHfL763d+tIwmb1Zc53467opua3leB1+hdadHH3set5C/2jShLEkbR49tLnRH9LZQf5xl1sdLpNS7tJuEAcoj05FcpVsd0HHdPeD6kSIN7XQOXB1MTFiBChW9Ymy5weR4XNVe61aWhgLugb9mjNULT+HswEUd2kWAlFnVijEV4gj5IWC1KkKFGMTXZASbZKEwQS5N6vftzB4U8YzGb8DR1TVf4FA3t/F+CZ6dvuHPJdaGV+JfpeiMBgp4wtqozkM6oEUo03C2UEtFyG34ScE/mjbGmeYX0+PoCu/eafrsUbsFfS+v1f1gfbx3sgBGW6DNEE6tM4EsRnb8WbhLdBHYsPSirLjY81H/p7XdcBlIoa2qzI0kWlWdeaDIpqMX5CB4iieGuzgJKNYStXxcqXHbvYnUE3DBYS3cnId+r02uUUticoyNToP8+5mgqhPUnnk+rJ0T+PbrTC4w9jeu9BeRHrkjI7mCR2t5BEczGWRoOpGCc3d4GJyx1akLvB03iZRGHRMF/3+FHbQ+alMYx8Y+77P88UFLrmLkWi5328k6yUoQxiXyZg9he2j+g9XjBQ+RkOnvAAAAABJRU5ErkJggg==" },
        { name: 'YouTube', url: 'https://youtube.com/in/profile_name', alt: 'YouTube logo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/180px-YouTube_social_white_square_%282017%29.svg.png' }
    ];

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
                        <div key={profile.name} className="flex items-center p-4 border-l-4 border-r-4 border-red-500 bg-[#ffffff30] rounded-lg shadow-sm justify-start">
                            <Image className="mix-blend-darken w-[40px] h-[40px]" src={profile.image} alt={profile.alt} width={80} height={80} />
                            <div className="ml-4">
                                <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{profile.name}</h3>
                                <p className="text-gray-600 text-sm md:text-lg ">Profile Name: @{profile.url.split('/').pop()}</p>
                                <Link href={profile.url} className="text-red-500 text-sm md:text-lg ">View Profile</Link>
                            </div>
                        </div>
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