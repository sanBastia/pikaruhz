import React from 'react'
import { MapPinIcon, TimerIcon } from 'lucide-react'
import CustomButton from './CustomButton'
import Link from 'next/link'

interface ServiceCardProps  {
    serviceName: string,
    location: string,
    price: string,
    duration: string,
    img: string
}


const ServiceCard = ({serviceName, location, price,duration,img}: ServiceCardProps) => {
  return (
    <div className="rounded-lg p-4 shadow-xl hover:shadow-lg">
    <img
        alt="Home"
        src={img}
        className="h-56 w-full rounded-md object-cover"
    />

        <div className="mt-2">
            <dl>
            <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-sm text-gray-500">RP. {price}</dd>
            </div>

            <div>
                <dt className="sr-only">ServiceName</dt>

                <dd className="font-medium">{serviceName}</dd>
            </div>
            </dl>

            <div className="mt-6 flex items-center justify-between gap-2 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <MapPinIcon size={20} />

                <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Location</p>

                <p className="font-medium">{location}</p>
                </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <TimerIcon size={20} />

                <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Duration</p>

                <p className="font-medium">{duration}</p>
                </div>
            </div>
            <div>
            <Link href='/book' className='grow'>
                    <CustomButton 
                    title='Book'
                    containerStyle='bg-brand hover:bg-brand-hover' 
                    textStyles='text-white'/>
            </Link>
            </div>
         
            </div>
        </div>
        </div >
  )
}

export default ServiceCard