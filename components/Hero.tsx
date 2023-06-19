
'use client'

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {}
  return (
    // <div className="hero">
    //     <div className="flex-1 pt-36 padding-x">
    //         <h1 className="hero__title">
    //             Cara mudah Booking di Pikaru
    //         </h1>
    //         <p className="hero__subtitle">
    //             mudah, cepat, dan terjamin !
    //         </p>
    //         <CustomButton
    //             title="Ayo Booking"
    //             containerStyle= "bg-primary-blue text-white rounded-full mt-10"
    //             handleClick={handleScroll}
    //         />
    //     </div>
    //     <div className="hero__image-container">
    //         <div className="hero__image">
    //             <Image src="/hero.jpg" alt="hero" fill className="object-contain" />
    //         </div>
    //     </div>
    // </div>
    

  //   <section>
  // <div
  //   className="mx-auto max-width p-4 sm:py-12 sm:px-6 lg:pt-2 lg:pb-8 lg:px-8"
  // >
  //   <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
  //     <div
  //       className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
  //     >
  //       <img
  //         alt="Party"
  //         src="hero.jpg"
  //         className="absolute inset-0 h-full w-full object-cover"
  //       />
  //     </div>

  //     <div className="lg:py-24">
  //       <h2 className="hero__title">Cara mudah Booking di Pikaru</h2>

  //       <p className="hero__subtitle">
  //         Mudah, Cepat dan Terjamin
  //       </p>

  //       <a
  //         href="#"
  //         className="mt-8 inline-block rounded bg-brand px-12 py-3 text-sm font-medium text-white transition hover:bg-brand-hover focus:outline-none focus:ring focus:ring-yellow-400"
  //       >
  //         Ayo <i>Booking</i> sekarang 
  //       </a>
  //     </div>
  //   </div>
  // </div>
  //   </section>

//   <div className="flex flex-col py-4 lg:pt-0 lg:flex-col lg:pb-0">
//   <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
//     <div className="mb-8 lg:my-40 lg:max-w-lg lg:pr-5">
//       <div className="mx-auto max-w-xl mb-8">
  
//         <h2 className="max-w-lg mb-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 sm:leading-none">
//           Cara baru
//           <span className="text-brand mx-2">Booking</span>
//           di PIKARU
//         </h2>
//         <p className="text-base text-gray-700 md:text-lg">
//           Mudah, Cepat dan Professional
//         </p>
//       </div>
//       <div className="flex flex-col items-center md:flex-row">
//         <a
//           href="/"
//           className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-brand hover:bg-brand-hover focus:shadow-outline focus:outline-none"
//         >
//           Book Now
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="hidden w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full md:block lg:absolute xl:px-0">
//     <img
//       className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
//       src="hero.jpg"
//       alt=""
//     />
//   </div>
// </div>
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-brand">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl sm:leading-none">
              Cara mudah
              <br className="hidden md:block" />
              <span className="text-brand ml-2 lg:ml-0 mr-2">
               Booking
              </span>
                di PIKARU
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-brand hover:bg-brand-hover focus:shadow-outline focus:outline-none"
            >
              <span className="text-xl">Book</span>
        
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-red-500 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Get 15% discount
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/hero.jpg"
            alt="heropic"
          />

        </div>
      </div>
    </div>
  )
}

export default Hero