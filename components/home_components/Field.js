"use client" // Using Client Side for rendering
import React, { useRef, useState} from 'react';
import Image from 'next/image'; // Ensure you have Image component from Next.js
import cross from '@/elememts/cross.svg' // Importing the cross.svg

function Field(props) {

    // Refs to directly access the DOM elements
    const placeholder = useRef(null);
    const input = useRef(null);
    const crossSvg = useRef(null);

    // State variables for managing input focus, border color, value, and error message
    const [borderColor, setBorderColor] = useState('border-gray-500');
    const [info, setInfo] = useState('');
    const [infoError, setInfoError] = useState('');

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    // Function to handle moving the placeholder on focus
    function movePlaceholder() {
        if (placeholder.current) {
            placeholder.current.className = 'absolute left-3 transition-all duration-200 ease-in-out top-1 left-4 text-gray-200 text-xs -z-[1]';
        }
    };

    // Function to handle validation on input blur
    function checkInput() {
        const inputValue = input.current.value.trim();

        if (inputValue === '') {
            resetField('Email is required.');
        } else {
            validateField(inputValue);
        }
    };

    // Function to reset the field state when empty
    function resetField(errorText) {
        if (placeholder.current) {
            placeholder.current.className = 'absolute left-3 transition-all duration-200 ease-in-out top-4 text-gray-200 text-md -z-[1]';
        }
        setBorderColor('border-red-500');
        setInfoError(errorText);
        if (crossSvg.current) crossSvg.current.className = 'ml-1';
    };

    // Function to validate email or password based on prop
    async function validateField(value) {
        const isValid = isValidEmail(value);
        if (isValid) {
            localStorage.setItem('check', true)
            setBorderColor('border-green-500');
            setInfoError('');
            if (crossSvg.current) crossSvg.current.className = 'ml-1 hidden';
        } else {
            localStorage.setItem('check', false)
            localStorage.setItem('UserEmail', 'a')
            setBorderColor('border-red-500');
            setInfoError('Please enter a valid email address.');
            if (crossSvg.current) crossSvg.current.className = 'ml-1';
        }
    };

    // Function to handle input change and validate in real-time
    function changeInput() {
        const inputValue = input.current.value.trim();
        setInfo(inputValue);
        validateField(inputValue);
    };

    return (
        <div className='relative mb-8'>
            <input
                name='email'
                ref={input}
                onFocus={movePlaceholder}
                onBlur={checkInput}
                onChange={changeInput}
                type='email'
                value={info}
                autoComplete='off'
                fdprocessedid="notthistimehere"
                className={`bg-[#1c1b1b96] h-14 ${borderColor} border-[1px] rounded-md px-4 focus:outline-double focus:ring-2 focus:ring-white w-full  
                             ${props.size ? 'lg:w-[454px] xl:w-[562px]' : 'sm:w-[243px] lg:w-[320px] xl:w-[366.75px] 3xl:w-[442px]'}`}
                aria-describedby={`${props.isEmail ? 'emailError' : 'passwordError'}`}
                required
            />
            <div
                ref={placeholder}
                className='absolute left-3 transition-all duration-200 ease-in-out top-4 text-gray-200 text-md -z-[1]'
            >
                Email address
            </div>
            <div className='absolute text-red-500 mt-2 flex gap-1 items-center text-sm'>
                <div ref={crossSvg} className='hidden'>
                    <Image src={cross} alt='Error icon' />
                </div>
                <span id='emailError'>{infoError}</span>
            </div>
        </div>
    );
}

export default Field;
