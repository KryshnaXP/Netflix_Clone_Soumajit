import React from 'react';
import Link from 'next/link';
import Lang from '@/components/common_components/Languages'; // Importing the language selection component
import { fetchContents } from "@/app/api/Data";

export default async function FootBar({space,text }) {
    
    const faqLinks = await fetchContents("Links")

    return (
        <div className={`px-12 lg:px-36 ${text?'text-[#ffffffb0]':'text-[#00000090]'} mt-12`}>
            {/* Contact information with a phone link */}
            <div className="mb-6">
                <p className="text-base">
                    Questions? Call <Link href="tel:000-800-919-1694" className="text-white underline hover:text-red-500">010-572-016-2023</Link>
                </p>
            </div>

            {/* Grid layout for FAQ links */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12'>
                {faqLinks.map((item, index) => (
                    <div key={index} className="mb-2"> {/* Added a key to the parent div for React's reconciliation */}
                        <Link href={item.link} target="_self" className="underline hover:text-red-500">
                            {item.text}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Language selection component */}
            <Lang id={'Foot-lang'}/>

            {/* Footer branding */}
            <div className={`mt-12 italic ${space?"mb-24" : null}`}>
                <p>Netflix India by Soumajit Mandal - 2023ETB016</p>
            </div>
        </div>
    );
}
