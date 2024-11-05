import React from "react"; // Import React library
import Navbar from "@/components/common_components/nav_footer/Navbar"; // Import Navbar component for navigation
import Curve from "@/components/common_components/Curve"; // Import Bottom curve component
import VerticalCurve from "@/components/common_components/VerticalCurve"; // Import Vertical curve component
import Footer from '@/components/common_components/nav_footer/FootBar'; // Import Footer component for site credits and links
import LoginPage from "@/components/login_components/LoginPage"; // Import LoginPage component
import Image from "next/image"; // Import Next.js Image component for optimized images

// Metadata for the Login page for SEO
export const metadata = {
    title: "Netflix Clone - Login", // Page title
    description: "Login page for the Netflix clone application, enabling user authentication and secure access to the streaming platform. Built with Next.js and powered by MongoDB for seamless data management.", // Page description
    keywords: "Netflix clone, login page, user authentication, Next.js, MongoDB, streaming platform, web app, secure login, database integration", // Relevant keywords for SEO
    author: "Soumajit Mandal", // Author name
};

// Login component definition
function Login() {
    return (
        <>
            <div className="relative home h-[664px] lg:h-[760px] xl:h-[862px] 3xl:h-[996px] w-full">
                {/* Background image */}
                <div>
                    <Image
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg" // Image source
                        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg 959w" // Responsive image sizes
                        width={500} // Adjust width according to your design
                        height={300} // Adjust height according to your design
                        priority // Load the image with high priority
                        alt="background-image" // Alt text for the image
                        className="w-full h-full object-cover z-10 absolute inset-0 3xl:w-[1920px] 3xl:h-[996px] mx-auto brightness-75 hidden md:block" // Image styles
                    />
                </div>

                {/* Navbar */}
                <nav className="bg-nav absolute inset-x-0 top-0 z-20 h-20">
                    <Navbar on={false} /> {/* Rendering the Navbar component */}
                </nav>

                {/* Login Page Container */}
                <div className="absolute inset-x-0 top-44 lg:top-24 z-30 h-3/5 flex flex-col items-center justify-center">
                    <LoginPage /> {/* Rendering the LoginPage component */}
                </div>

                {/* Bottom Curve */}
                <div className="hidden md:block absolute bottom-0 z-20 h-40 w-[1024px] sm:w-full">
                    <Curve on={false} /> {/* Rendering the Curve component */}
                </div>

                {/* Vertical Curve visible on large screens */}
                <div className="hidden 3xl:block absolute inset-y-0 right-0 z-0 w-screen">
                    <VerticalCurve /> {/* Rendering the VerticalCurve component */}
                </div>
                
            </div>

            {/* Footer */}
            <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black">
                <Footer space={true} text={true} /> {/* Rendering the Footer component */}
            </div>
        </>
    );
}

export default Login; // Exporting the Login component

