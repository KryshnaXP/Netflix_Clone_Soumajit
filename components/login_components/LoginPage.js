"use client"; // Indicates that this component is a client component in Next.js
import { useState, useEffect, useRef } from 'react'; // Importing React hooks
import Image from 'next/image'; // Importing Image component from Next.js for optimized images
import Link from 'next/link'; // Importing Link component for client-side navigation
import { useRouter } from 'next/navigation'; // Importing useRouter for navigation control
import tick from '@/elememts/check-mark.png'; // Importing tick image for checkbox
import cross from '@/elememts/cross.svg'; // Importing cross image for error indication
import registerUser from '@/app/api/registerUser'; // Importing registerUser function from API

const LoginPage = () => {
  const router = useRouter(); // Initializing the router for navigation
  // State for form fields, border colors, error messages, and results
  const [form, setForm] = useState({ email: '', password: '', check: false, DB: false });
  const [borderColor, setBorderColor] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [myresult, setMyresult] = useState({ message: null, color: null, show: false });

  // Refs for managing focus and displaying placeholders
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const placeholderEmail = useRef(null);
  const placeholderPassword = useRef(null);
  const crossSvg_e = useRef(null);
  const crossSvg_p = useRef(null);

  // useEffect to check localStorage for user data on component mount
  useEffect(() => {
    const check = localStorage.getItem('check') === 'true'; // Check if 'remember me' was checked
    if (check) {
      movePlaceholder(placeholderEmail); // Move the placeholder for email
      movePlaceholder(placeholderPassword); // Move the placeholder for password
      setForm({ // Set form state with stored values
        email: localStorage.getItem('UserEmail'),
        password: localStorage.getItem('Password'),
        check
      });
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (isValidEmail(form.email) && isValidPassword(form.password)) { // Validate email and password
      if (form.check) { // If 'remember me' is checked
        localStorage.setItem("UserEmail", form.email); // Store email in localStorage
        localStorage.setItem("Password", form.password); // Store password in localStorage
      }
      if (form.DB) { // If 'Save to Database' is checked
        try {
          // Call the registerUser function and await its result
          const result = await registerUser(form.email, form.password);
          if (result.done) {
            // If registration is successful
            setMyresult({
              message: 'User successfully registered in the database.',
              color: 'shadow-[0_0_20px_rgba(0,255,0,1)] border-green-500 outline-green-500',
              show: true
            });
            await pause(4000); // Pause for 4 seconds to show message
            router.push('/project'); // Redirect to the project page
            setMyresult({ message: 'User successfully registered in the database.', show: false }); // Reset show state
          } else {
            // If user already exists in the database
            setMyresult({
              message: 'User already exists in the database.',
              color: 'shadow-[0_0_20px_rgba(0,0,255,1)] border-blue-500 outline-blue-500',
              show: true
            });
            await pause(4000); // Pause for 4 seconds to show message
            setMyresult({ message: 'User already exists in the database.', show: false }); // Reset show state
          }
        } catch (error) {
          // Handle registration error
          setMyresult({
            message: 'Registration failed.',
            color: 'shadow-[0_0_20px_rgba(255,0,0,1)] border-red-500 outline-red-500',
            show: true
          });
          await pause(4000); // Pause for 4 seconds to show message
          setMyresult({ message: 'Registration failed.', show: false }); // Reset show state
        }
      }

      localStorage.setItem("check", form.check); // Store 'remember me' status
      if (form.check && !form.DB) { // If 'remember me' is checked but not saving to DB
        setMyresult({
          message: 'Successfully stored data in localStorage.',
          color: 'shadow-[0_0_20px_rgba(0,255,0,1)] border-green-500 outline-green-500',
          show: true
        });
        await pause(4000); // Pause for 4 seconds to show message
        router.push('/project'); // Redirect to the project page
        setMyresult({ message: 'Successfully stored data in localStorage.', show: false }); // Reset show state
      }
    }
  };

  // Function to pause execution for a given duration
  function pause(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  // Function to move the placeholder up when input is focused
  const movePlaceholder = (ref) => {
    if (ref.current) {
      ref.current.className = 'absolute left-3 transition-all duration-200 ease-in-out top-1 text-gray-200 text-xs -z-[1]';
    }
  };

  // Function to reset input field on error
  const resetField = (errorText, ref, isEmail) => {
    if (ref.current) {
      ref.current.className = 'absolute left-3 transition-all duration-200 ease-in-out top-4 text-gray-200 text-md -z-[1]';
    }
    setBorderColor((prevBorderColor) => ({
      ...prevBorderColor,
      ...(isEmail ? { email: 'border-red-500' } : { password: 'border-red-500' })
    }));
    setFormError((prevFormError) => ({
      ...prevFormError,
      ...(isEmail ? { email: errorText } : { password: errorText })
    }));
    if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1'; // Show error icon for email
    if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1'; // Show error icon for password
  };

  // Function to validate input fields
  const validateField = (value, isEmail) => {
    const isValid = isEmail ? isValidEmail(value) : isValidPassword(value); // Validate based on field type
    if (isValid) {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        ...(isEmail ? { email: 'border-green-500' } : { password: 'border-green-500' })
      }));
      setFormError((prevFormError) => ({
        ...prevFormError,
        ...(isEmail ? { email: "" } : { password: "" })
      }));
      if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1 hidden'; // Hide error icon for email
      if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1 hidden'; // Hide error icon for password
    } else {
      // Set error state if validation fails
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        ...(isEmail ? { email: 'border-red-500' } : { password: 'border-red-500' })
      }));
      setFormError((prevFormError) => ({
        ...prevFormError,
        ...(isEmail ? { email: "Please enter a valid email address." } : { password: "Please enter a valid password." })
      }));
      if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1'; // Show error icon for email
      if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1'; // Show error icon for password
    }
  };

  // Function to handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setForm((prev) => ({ ...prev, [name]: value })); // Update form state
    validateField(value, name === 'email'); // Validate field based on input
  };

  // Function to toggle 'remember me' checkbox
  const toggleCheck = () => {
    setForm((prevForm) => ({
      ...prevForm,
      check: !prevForm.check // Toggle the check state
    }));
  };

  // Email validation regex
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  // Password validation regex for minimum requirements
  const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  return (
    <>
      {/* Result message display */}
      <div className={`${myresult.show ? 'opacity-100 bottom-[10%]' : 'opacity-0  bottom-[-10%]'} text-white fixed left-[50% - 144px] bg-black ${myresult.color} w-72 border-2 outline-double rounded-xl h-16 flex justify-center items-center transition-all duration-1000`}>
        <p className='italic text-center p-2'>{myresult.message}</p>
      </div>
      {/* Main container for login form */}
      <div className="w-full md:max-w-md mx-auto p-6 md:bg-[#000000b0] md:rounded-lg shadow-md mt-20 md:mt-12">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-center">Sign In</h1>
        </header>
        <form className="space-y-8 mx-auto" onSubmit={handleSubmit} aria-label="Sign In">
          {/* Email input field */}
          <div className='mb-8 flex justify-center relative'>
            <input
              name="email"
              ref={emailRef}
              onFocus={() => movePlaceholder(placeholderEmail)}
              onBlur={() => form.email === '' && resetField('Email is required.', placeholderEmail, true)}
              onChange={handleInputChange}
              type="email"
              value={form.email}
              autoComplete="off"
              className={`bg-[#ffffff00] h-14 ${borderColor.email} border-[1px] rounded-md px-4 w-full focus:outline-double focus:ring-2 focus:ring-white`}
              required
            />
            <div
              ref={placeholderEmail}
              className="absolute left-3 transition-all duration-200 ease-in-out top-4 text-gray-200 text-md -z-[1]"
            >
              Email address
            </div>
            <div className="absolute text-red-500 mt-2 flex gap-1 items-center text-sm top-[52px] left-0">
              <div ref={crossSvg_e} className="hidden">
                <Image src={cross} alt="Error icon" />
              </div>
              <span>{formError.email}</span>
            </div>
          </div>
          {/* Password input field */}
          <div className='mb-8 flex justify-center relative'>
            <input
              name="password"
              ref={passwordRef}
              onFocus={() => movePlaceholder(placeholderPassword)}
              onBlur={() => form.password === '' && resetField('Password is required.', placeholderPassword, false)}
              onChange={handleInputChange}
              type="password"
              value={form.password}
              autoComplete="off"
              className={`bg-[#ffffff00] h-14 ${borderColor.password} border-[1px] rounded-md px-4 w-full focus:outline-double focus:ring-2 focus:ring-white`}
              required
            />
            <div
              ref={placeholderPassword}
              className="absolute left-3 transition-all duration-200 ease-in-out top-4 text-gray-200 text-md -z-[1]"
            >
              Password
            </div>
            <div className="absolute text-red-500 mt-2 flex gap-1 items-center text-sm top-[52px] left-0">
              <div ref={crossSvg_p} className="hidden">
                <Image src={cross} alt="Error icon" />
              </div>
              <span>{formError.password}</span>
            </div>
          </div>
          {/* Sign In button */}
          <div className='mb-8 flex justify-center'>
            <button
              fdprocessedid="signin"
              type="submit"
              className='bg-[#e50914] hover:bg-red-700 rounded h-8 w-20 flex justify-center items-center text-sm md:text-md font-bold'
            >
              Sign In
            </button>
          </div>
          {/* Link for forgotten password */}
          <Link href="/help-center-faq" className="block mt-2 text-sm text-red-500 hover:underline text-center">Forgot password?</Link>
        </form>
        <footer className="mt-6 p-8">
          {/* 'Remember me' checkbox */}
          <div className="relative flex items-center" onClick={() => toggleCheck()}>
            <div className={`mb-6 w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center mr-2 ${(form.check == true) ? 'bg-gray-500' : 'bg-transparent'} transition-all duration-200`}>
              {(form.check == true) ? <Image src={tick} alt='tick' /> : null} {/* Show tick image if checked */}
            </div>
            <div htmlFor="rememberMe" className="text-sm w-32 text-right absolute top-0">Remember me</div>
          </div>
          {/* 'Save to Database' checkbox */}
          <div className="relative flex items-center" onClick={() => setForm(prevForm => ({ ...prevForm, DB: !prevForm.DB }))}>
            <div className={`mb-6 w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center mr-2 ${(form.DB == true) ? 'bg-gray-500' : 'bg-transparent'} transition-all duration-200`}>
              {(form.DB == true) ? <Image src={tick} alt='tick' /> : null} {/* Show tick image if checked */}
            </div>
            <div htmlFor="rememberMe" className="text-sm w-36 text-right absolute top-0">Save to DataBase</div>
          </div>
          {/* Sign up link for new users */}
          <p className="text-sm text-gray-500">New to Netflix? <Link href="/" className="text-red-500 hover:underline">Sign up now</Link>.</p>
          <div className="mt-4 text-xs text-gray-400">
            {/* Information about reCAPTCHA and privacy policy */}
            <p>Only 100 users will be saved in the database at a time; the oldest entries will be deleted as new ones are added.</p>
            <p>This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <button className="text-red-500 hover:underline" fdprocessedid='buttonxyz'>Learn more</button></p>
            <p>The formrmation collected is subject to the <Link href="/privacy" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> and <Link href="/terms-of-use" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</Link>.</p>
          </div>
        </footer >
      </div >
    </>
  );
};

export default LoginPage;
