import React from 'react'; // Importing React
import InfoCard from "@/components/home_components/cards/InfoCard"; // Importing the InfoCard component, renamed to Plates
// Array of content features to be displayed
import disp from '@/elememts/disp.png'; // Importing display image
import face from '@/elememts/face.png'; // Importing face image
import scope from '@/elememts/scope.png'; // Importing telescope image
import circle from '@/elememts/circle.png'; // Importing circle image

import { fetchContents } from "@/app/api/Data";

// PlaterContainer component to display a grid of features
export default async function InfoCardContainer() {

    const image = [disp, circle, scope, face]

    const contentFeatures = await fetchContents("Features")

    return (
        <div className="px-12 lg:px-36 grid grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-1 gap-4"> {/* Grid layout for features */}
            {contentFeatures.map((item, index) => (
                <InfoCard
                    src={image[item.src]}
                    key={index} // Using index as key for mapped items (consider using a unique ID if possible)
                    title={item.title}
                    desc={item.description}
                    type={item.title}
                />
            ))}
        </div>
    );
}

