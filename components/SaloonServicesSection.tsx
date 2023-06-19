import React from 'react'
import ServiceCard from './ServiceCard'

const dataServices = [
    {
        serviceName: 'kreatin Treatment(FREE HAIR COLORING)',
        location: 'Mangga Besar',
        price: '240.000',
        duration: '40min',
        img: '/service1.jpg'
    },
    {
        serviceName: 'Korean invisible Hair Extension',
        location: 'BSD',
        price: '500.000',
        duration: '30min',
        img: '/service2.jpg'
    },
    {
        serviceName: 'Hair Cutting model',
        location: 'BSD',
        price: '75.000',
        duration: '20min',
        img: '/service3.jpg'
    },
    {
        serviceName: 'Get polish (Free Foot SPA)',
        location: 'Mangga Besar',
        price: '400.000',
        duration: '40min',
        img: '/service4.jpg'
    },
]


const SaloonServicesSection = () => {
  return (  
    <section>
      <div className="max-width px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <div className='flex justify-between'>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Pelayanan kami 
          </h2>
          <span className='block justify-end text-gray-400 text-sm pt-2'>Lihat semua</span>
          </div>
          

          {/* <p className="max-w-md mt-2 text-gray-500">
          ayok pilih perawatan yang sesuai dengan rambut kamu !
          </p> */}
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          
            {dataServices.map((service)=>(
                <li key={service.serviceName}>
                <ServiceCard 
                serviceName={service.serviceName}
                location={service.location}
                price={service.price}
                duration= {service.duration}
                img={service.img}
                />
                </li>
            ))}
        </ul>
      </div>
  </section>
  )
}

export default SaloonServicesSection