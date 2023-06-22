import { PikaruCalendar, Stylistdd, Servicedd, CustomButton  } from '@components'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="max-width px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Book
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full p-2">  <PikaruCalendar /></div>
      
       <div className='w-full p-2'> 
       <div className="flex flex-col gap-4">
        <div><Stylistdd /></div>
      <div><Servicedd /></div>
     
       <div className='py-4'>
       <CustomButton 
                    title='Book'
                    containerStyle='bg-brand w-full hover:bg-brand-hover' 
                    textStyles='text-white'/>
       </div>
     
            
       </div>
      
       </div>
        </div>
    </div>
  )
}

export default page