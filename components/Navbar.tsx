'use client'

import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    // <header className="w-full">
    //     <nav className="max-w-[1440px] mx-auto h-20 flex justify-between items-center sm:px-16">
    //         <Link href='/' className="flex justify-center items-center pl-8">
    //             <Image src='/logo.png' alt="car hub logo" width={90} height={20} className="object-contain" />
    //         </Link>
    //         <div className="flex justify-end  w-44">
    //           <div className="justify-between">
    //           <CustomButton title="Beranda" btnType="button" containerStyle="text-black bg-white min-w-[90px] max-w-[100px] text-sm md: text-lg" />
    //         <CustomButton title="Pelayanan Kami" btnType="button" containerStyle="text-black bg-white min-w-[110px] max-w-[110px] text-sm md: text-lg" />
    //         <CustomButton title="Sign In" btnType="button" containerStyle="text-white bg-brand hover:bg-brand-hover rounded-full min-w-[100px] max-w-[190px]" />
    //           </div>
    //         </div>
           
    //     </nav>
    // </header>

<div className="max-width px-4 py-2 mx-auto h-[80px] sm:px-6 lg:px-8 sticky top-0 z-50 bg-white shadow-md rounded">
<div className="relative flex items-center justify-between">
  <div className="flex items-center">
    {/* <a
      href="/"
      aria-label="Company"
      title="Company"
      className="inline-flex items-center mr-8"
    > */}
    <Link href='/' className="flex justify-center items-center mr-8">
          <Image src='/logo.png' alt="car hub logo" width={70} height={70} className="object-contain" />
    </Link>
    {/* </a> */}
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
        >
          Pelayanan kami
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
        >
          Tentang Kami
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
        >
          Hubungi kami
        </a>
      </li>
    </ul>
  </div>
  <ul className="flex items-center hidden space-x-8 lg:flex">
    <li>
      <a
        href="/"
        aria-label="Sign in"
        title="Sign in"
        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
      >
        Sign in
      </a>
    </li>
    <li>
      <a
        href="/"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand hover:bg-brand-hover focus:shadow-outline focus:outline-none"
        aria-label="Sign up"
        title="Sign up"
      >
        Sign up
      </a>
    </li>
  </ul>
  <div className="lg:hidden">
    <button
      aria-label="Open Menu"
      title="Open Menu"
      className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-brand-hover focus:bg-brand-hover"
      onClick={() => setIsMenuOpen(true)}
    >
      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
        />
        <path
          fill="currentColor"
          d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
        />
        <path
          fill="currentColor"
          d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
        />
      </svg>
    </button>
    {isMenuOpen && (
      <div className="absolute top-0 left-0 w-full">
        <div className="p-5 bg-white border rounded shadow-sm z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  PIKARU
                </span>
              </a>
            </div>
            <div>
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
                >
                  Pelayanan kami
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
                >
                  
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
                >
                  Tentang kami
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
                >
                  Hubungi kami
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-brand-hover"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand hover:bg-brand-hover focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )}
  </div>
</div>
</div>
   
  )
}

export default Navbar