"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import tick from '@/elememts/check-mark.png'
import cross from '@/elememts/cross.svg';
import registerUser from '@/app/api/registerUser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', check: false, DB: false });
  const [borderColor, setBorderColor] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const placeholderEmail = useRef(null);
  const placeholderPassword = useRef(null);
  const crossSvg_e = useRef(null);
  const crossSvg_p = useRef(null);

  useEffect(() => {
    const check = localStorage.getItem('check') === 'true';
    if (check) {
      movePlaceholder(placeholderEmail)
      movePlaceholder(placeholderPassword)
      setForm({
        email: localStorage.getItem('UserEmail'),
        password: localStorage.getItem('Password'),
        check
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail(form.email) && isValidPassword(form.password)) {
      if (form.check) {
        localStorage.setItem("UserEmail", form.email);
        localStorage.setItem("Password", form.password);
      }
      if (form.DB) {
        try {
          // Call the registerUser function and await its result
          const result = await registerUser(form.email, form.password);
          if (result.done) {
            toast.success('User registered successfully !', {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
          else {
            toast.warn('User Already Exists !', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          } // Set the message based on the result
        } catch (error) {
          toast.warn('Registration Failed !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      }

      localStorage.setItem("check", form.check);
      router.push('/project');
    }
  };

  const movePlaceholder = (ref) => {
    if (ref.current) {
      ref.current.className = 'absolute left-3 transition-all duration-200 ease-in-out top-1 text-gray-200 text-xs -z-[1]';
    }
  };

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
    if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1';
    if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1';
  };

  const validateField = (value, isEmail) => {
    const isValid = isEmail ? isValidEmail(value) : isValidPassword(value);
    if (isValid) {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        ...(isEmail ? { email: 'border-green-500' } : { password: 'border-green-500' })
      }));
      setFormError((prevFormError) => ({
        ...prevFormError,
        ...(isEmail ? { email: "" } : { password: "" })
      }));
      if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1 hidden';
      if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1 hidden';
    } else {
      setBorderColor((prevBorderColor) => ({
        ...prevBorderColor,
        ...(isEmail ? { email: 'border-red-500' } : { password: 'border-red-500' })
      }));
      setFormError((prevFormError) => ({
        ...prevFormError,
        ...(isEmail ? { email: "Please enter a valid email address." } : { password: "Please enter a valid password." })
      }));
      if (isEmail && crossSvg_e.current) crossSvg_e.current.className = 'ml-1';
      if (!isEmail && crossSvg_p.current) crossSvg_p.current.className = 'ml-1';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(value, name === 'email');
  };

  const toggleCheck = () => {
    setForm((prevForm) => ({
      ...prevForm,
      check: !prevForm.check
    }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
          <div className="relative flex items-center" onClick={() => toggleCheck()}>
            <div className={`mb-6 w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center mr-2 ${(form.check == true) ? 'bg-gray-500' : 'bg-transparent'} transition-all duration-200`}>
              {(form.check == true) ? <Image src={tick} alt='tick' /> : null} {/* Show tick image if checked */}
            </div>
            <div htmlFor="rememberMe" className="text-sm w-32 text-right absolute top-0">Remember me</div>
          </div>

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