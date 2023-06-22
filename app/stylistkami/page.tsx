import { SaloonStylistSection, StylistCard } from '@components'
import { DropletIcon, ForwardIcon, MapPinIcon, Paintbrush2Icon, ScissorsIcon, VenetianMaskIcon } from 'lucide-react'
import React from 'react'
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
const page = () => {
  return (
<section>
  <div className="mx-auto max-width px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Hair Stylist kami
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <div className="mt-8 sm:flex sm:items-center sm:justify-between">
      <div className="block sm:hidden">
        <button
          className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Filters & Sorting </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="hidden sm:flex sm:gap-4">
        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span className="text-sm font-medium"> Location </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div
              className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
            >
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        BSD
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Mangga Besar
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span className="text-sm font-medium"> Price </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div
              className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
            >
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    The highest price is $600
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>

    <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth space-x-8 py-4 h-full w-full">
                {dataStylist.map((stylist)=>(<StylistCard stylistName={stylist.stylistName} pic={stylist.pic} rating={stylist.rating} services={stylist.services} />))}
            </div>
        </div>
  </div>
</section>
  )
}

export default page