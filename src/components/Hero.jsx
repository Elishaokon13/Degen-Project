import Background from '../assets/bg.jpg'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Roadmap', href: '#Roadmap' },
  { name: 'Tokenomics', href: '#Tokenomics' },
  { name: 'FAQ', href: '#Faq' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-white pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-50"
                    src={Logo}
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#" className="text-base font-medium text-white hover:text-blue-300">
                Log in
              </a>
              
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-18 w-auto"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-blue rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-red-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-blue-700 text-white font-medium hover:bg-red-700"
                  >
                    Start free trial
                  </a>
                </div>
                
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-blue-100 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                 
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">$ANTA INU</span>
                    <span className="block text-blue-700">a utility based meme project</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Santa INU is with the aim of providing an ecosystem of value to crypto holders. Helping those who lost negatively to the market due to the  negative turn around of Crypto events that occurred in the past months to recover investments with an Apy of 500% through structured  utilities and collaborations. Offering  investors value in rewards, earnings and incentives.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    
                  </div>
                </div>
              </div>
             {/* <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/
                  <img
                    className="w-full lg:absolute rounded-md lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Background}
                    alt=""
                  />
                </div>
              </div> */ }
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
