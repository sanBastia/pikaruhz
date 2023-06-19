import React from 'react'
import StylistCard from './StylistCard';
import { DropletIcon, ForwardIcon,  MapPinIcon, Paintbrush2Icon, ScissorsIcon, VenetianMaskIcon } from 'lucide-react';

const dataStylist = [
    {
        stylistName: 'Wendy',
        pic: '/stylist1.jpeg',
        rating: '4.0',
        services: [
            {
            name: 'Cutting',
            icon: <ScissorsIcon size={20} />
            },
            {
                name: 'Coloring',
                icon: <Paintbrush2Icon size={20} />
            },
            {
                name: 'Extention',
                icon: <ForwardIcon size={20} />
            },
            {
                name: 'Head Massage',
                icon: <VenetianMaskIcon size={20} />
            },
            {
                name: 'Mangga Besar',
                icon: <MapPinIcon size={20} />
            },
    ]
    },
    {
        stylistName: 'Mario',
        pic: '/stylist4.jpeg',
        rating: '3.0',
        services: [
            {
            name: 'cutting',
            icon: <ScissorsIcon size={20} />
            },
            {
                name: 'coloring',
                icon: <Paintbrush2Icon size={20} />
            },
            {
                name: 'Extention',
                icon: <ForwardIcon size={20} />
            },
            {
                name: 'Mangga Besar',
                icon: <MapPinIcon size={20} />
            },
    ]
    },
    {
        stylistName: 'Levinka',
        pic: '/stylist2.png',
        rating: '4.0',
        services: [
            {
            name: 'cutting',
            icon: <ScissorsIcon size={20} />
            },
            {
                name: 'coloring',
                icon: <Paintbrush2Icon size={20} />
            },
            {
                name: 'Extention',
                icon: <ForwardIcon size={20} />
            },
            {
                name: 'Mangga Besar',
                icon: <MapPinIcon size={20} />
            },
    ]
    },
    {
        stylistName: 'Agnes Monica',
        pic: '/stylist3.jpeg',
        rating: '5.0',
        services: [
            {
                name: 'cutting',
                icon: <ScissorsIcon size={20} />
            },
            {
                name: 'coloring',
                icon: <Paintbrush2Icon size={20} />
            },
            {
                name: 'Extention',
                icon: <ForwardIcon size={20} />
            },
            {
                name: 'BSD',
                icon: <MapPinIcon size={20} />
            },
            {
                name: 'Oil treatment',
                icon: <DropletIcon size={20} />
            },

    ]
    },


]


const SaloonStylistSection = () => {
    return (
        <div className="max-width px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className='flex justify-between mb-4'>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Hair Stylist kami
          </h2>
          <span className='block justify-end text-gray-400 text-sm pt-2'>Lihat semua</span>
          </div>
          <div className="grid gap-2 row-gap-2 mx-auto sm:row-gap-10 lg:max-width sm:grid-cols-2 lg:grid-cols-4">
            {/* ini dari hyperdev ui */}
            {/* <div className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">Oliver Aguilerra</p>
                <p className="text-sm text-gray-800">Product Manager</p>
              </div>
            </div> */}

             {/* ini dari kometa > pricing */}
             {dataStylist.map((stylist)=>(<StylistCard stylistName={stylist.stylistName} pic={stylist.pic} rating={stylist.rating} services={stylist.services} />))}
            
    
        </div>
        </div>
      );
}

export default SaloonStylistSection




