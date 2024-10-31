import Field from '@/components/home_components/Field'; // Importing the Field component
import GetStartedBtn from './GetStartedBtn'; // Importing the GetStartedBtn component

// GetStarted component for user to input email and start membership
const GetStarted = ({ set }) => {

    function doNothing() {
        // Intentionally left blank
    }

    return (
        <div className='flex flex-col items-center p-4'> {/* Container for the Get Started section */}
            <div className='font-medium text-center mb-4 px-12 lg:px-36'> {/* Instructional text */}
                Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className={`gap-4 w-full justify-center ${set ? 'lg:flex px-12' : 'sm:flex '}`}> {/* Flex container for input field and button */}
                <Field
                    size={set}
                />
                <div>
                    <GetStartedBtn set={set} /> {/* Button to get started */}
                </div>

            </div>
        </div>
    );
};

export default GetStarted; // Exporting the GetStarted component