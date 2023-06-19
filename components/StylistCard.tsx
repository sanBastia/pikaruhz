import React, { ReactComponentElement } from 'react'
import CustomButton from './CustomButton'
import { StarIcon } from 'lucide-react'

interface StylistCardProps {
  stylistName: string,
  pic: string,
  rating: string,
  services: Array<{
    name: string;
    icon: JSX.Element
  }>
}

const StylistCard = ({stylistName, pic, rating, services}: StylistCardProps) => {
  return (
    <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
    <div className="mb-6">
      <div className="flex items-center justify-between pb-2 mb-2 border-b">
        <div>
          <p className="text-xl font-bold tracking-wider uppercase">
            {stylistName}
          </p>
          <span className='inline-flex gap-2'>
            <StarIcon color="orange" size={20} strokeWidth={3} />
            <span className='text-sm font-bold'>{rating}</span>
          </span>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-gray-50">
        <img
                className="object-cover mr-4 w-40 h-40 rounded-full shadow"
                src={pic}
                alt="Person"
              />
        </div>
      </div>
      <div>
        <ul className="space-y-2">
          {services.map((service)=>(
               <li key={service.name} className="flex items-center">
               <div className="mr-2">
                {service.icon}
               </div>
               <p className="font-medium text-gray-800">
                 {service.name}
               </p>
             </li>

          ))}
     
        </ul>
      </div>
    </div>
    <div>
            <CustomButton 
                    title='Book'
                    containerStyle='bg-brand w-full hover:bg-brand-hover' 
                    textStyles='text-white'/>
      <p className="text-sm text-gray-500 italic">
        *segala kejadian yang terjadi menjadi tanggung jawab Stylist dengan pelanggan
      </p>
    </div>
       </div>
  )
}

export default StylistCard