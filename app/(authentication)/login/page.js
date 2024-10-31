import React from "react";
import Navbar from "@/components/common_components/nav_footer/Navbar";
import Curve from "@/components/common_components/Curve";
import VerticalCurve from "@/components/common_components/VerticalCurve";
import Footer from '@/components/common_components/nav_footer/FootBar'
import LoginPage from "@/components/login_components/LoginPage";
import Image from "next/image";


export const metadata = {
    title: "Netflix Clone - Login",
    description: "Login page for the Netflix clone application, enabling user authentication and secure access to the streaming platform. Built with Next.js and powered by MongoDB for seamless data management.",
    keywords: "Netflix clone, login page, user authentication, Next.js, MongoDB, streaming platform, web app, secure login, database integration",
    author: "Soumajit Mandal",
};

function page() {
    return (
        <>
            <div className="relative home h-[664px] lg:h-[760px] xl:h-[862px] 3xl:h-[996px] w-full">

                {/* Background image */}
                <div>
                    <Image
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
                        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg 959w"
                        width={500} // Set the width according to your design
                        height={300} // Set the height according to your design
                        priority // This tells Next.js to load the image with high priority
                        alt="background-image"
                        className="w-full h-full object-cover z-10 absolute inset-0 3xl:w-[1920px] 3xl:h-[996px] mx-auto brightness-75 hidden md:block"
                    />
                </div>

                {/* Navbar - Ensure high z-index */}
                <nav className="bg-nav absolute inset-x-0 top-0 z-20 h-20">
                    <Navbar on={false} />
                </nav>

                <div className="absolute inset-x-0 top-44 lg:top-24 z-30 h-3/5 flex flex-col items-center justify-center">
                    <LoginPage />
                </div>

                {/* Bottom Curve */}
                <div className="hidden md:block absolute bottom-0 z-20 h-40 w-[1024px] sm:w-full">
                    <Curve on={false} />
                </div>

                {/* Vertical curve visible on large screens */}
                <div className="hidden 3xl:block absolute inset-y-0 right-0 z-0 w-screen">
                    <VerticalCurve />
                </div>

                {/* Background gradient overlay */}
                {/* <div className="bg-black md:bg-transparent bg-cover 3xl:w-[1920px] mx-auto absolute inset-0 z-10 bg-gradient-to-r from-black/85 to-transparent">
                </div> */}
            </div>

            {/* Additional content */}
            <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black">
                <Footer space={true} text={true} />
            </div>
        </>
    )
}

export default page
