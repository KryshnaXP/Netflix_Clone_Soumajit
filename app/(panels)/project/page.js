import Navbar from "@/components/common_components/nav_footer/Navbar"; // Navbar component for site navigation
import Footer from "@/components/common_components/nav_footer/FootBar"; // Footer component for site credits and links

export const metadata = {
    title: "Netflix Clone - Educational Project",
    description: "This is an educational project created for learning purposes. Netflix is not affiliated with this project in any way. It serves as a comprehensive platform showcasing various features including Home, Login, Sign Up, FAQ, Help Centre, Media Centre, and more.",
    keywords: "Netflix clone, educational project, learning, Next.js, MongoDB, user authentication, streaming platform, web app, project overview, dummy pages",
    author: "Soumajit Mandal 2023ETB016",
};


export default function InfoPage() {
    return (
        <div className="relative ">
            {/* Background Gradient */}
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#e5091470] opacity-50 blur-[80px] scale-125">
                </div>
                <div className="absolute bottom-auto left-auto right-[50vw] top-[50vh] h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#e5091470] opacity-50 blur-[80px] scale-75">
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-black h-20">
                <Navbar on={true} />
            </nav>

            {/* Main Content */}
            <div className="flex 3xl:w-[1920px] mx-auto relative">
                <main className="flex-grow px-8 py-12 md:ml-16 xmd:ml-0 xmd:pl-48 overflow-y-auto">
                    <div className="text-black mb space-y-1">
                        <h1 className="text-4xl font-bold text-gray-800">Netflix Clone - Educational Project</h1>
                        <p className="text-lg text-gray-600">
                            This is an educational project created for learning purposes.
                        </p>
                        <p className="text-lg text-gray-600">
                            Netflix is not affiliated with this project in any way.
                        </p>
                        <p className="text-lg text-gray-600">
                            By Soumajit mandal 2023ETB016
                        </p>

                        {/* Informative Div */}
                        <div className="mt-8 p-6 ">
                            <h2 className="text-2xl font-semibold text-gray-800">Accessible Pages</h2>
                            <p className="mt-2 text-gray-700">
                                The following pages are built and accessible:
                            </p>
                            <ul className="mt-4 list-disc list-inside bg-[#ffffff30] rounded-lg shadow-sm p-12 border-2 border-red-500">
                                <li>Home</li>
                                <li>Login</li>
                                <li>Sign Up</li>
                                <li>FAQ</li>
                                <li>Help Centre</li>
                                <li>Account</li>
                                <li>Media Centre</li>
                                <li>Terms of Use</li>
                                <li>Privacy</li>
                                <li>Contact Us</li>
                                <li>Social Media</li>
                            </ul>
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">Dummy Pages</h3>
                            <p className="mt-2 text-gray-700">
                                The following pages are dummy and will redirect here:
                            </p>
                            <ul className="mt-4 list-disc list-inside bg-[#ffffff30] rounded-lg shadow-sm p-12  border-2 border-red-500">
                                <li>Investor Relations</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                                <li>Corporate Information</li>
                                <li>Speed Test</li>
                                <li>Legal Notices</li>
                                <li>Ways to Watch</li>
                            </ul>
                            <p className="mt-4 text-gray-600">
                                Attempting to log in or sign up will redirect you with credentials stored locally or in database.
                            </p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <div className="w-full bg-black">
                <div className="3xl:w-[1920px] 3xl:px-56 mx-auto bg-black py-8">
                    <Footer space={true} text={true} />
                </div>
            </div>
        </div>
    );
}
