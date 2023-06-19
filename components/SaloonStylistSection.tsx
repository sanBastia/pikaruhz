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
                name: 'Oil treatment',
                icon: <DropletIcon size={20} />
            },
            {
                name: 'BSD',
                icon: <MapPinIcon size={20} />
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
          {/* <div className="grid gap-2 row-gap-2 mx-auto sm:row-gap-10 lg:max-width sm:grid-cols-2 lg:grid-cols-4">
          
             {dataStylist.map((stylist)=>(<StylistCard stylistName={stylist.stylistName} pic={stylist.pic} rating={stylist.rating} services={stylist.services} />))}
        </div> */}

<div className="relative overflow-hidden">
      <div className="flex overflow-x-auto scroll-smooth space-x-8 p-4 h-full w-full">
      {dataStylist.map((stylist)=>(<StylistCard stylistName={stylist.stylistName} pic={stylist.pic} rating={stylist.rating} services={stylist.services} />))}
        </div>
        </div>
        </div>
      );
}

export default SaloonStylistSection




