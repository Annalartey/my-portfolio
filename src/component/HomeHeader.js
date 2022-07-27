import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../images/logo-b.png'


// const HomeHeader = () => {

  // state = {
  //   navBackground: "transparent"
  // };

  // componentDidMount() {
  //   document.addEventListener("scroll", () => {
  //     const backgroundcolor = window.scrollY < 70 ? "transparent" : "blue";

  //     this.setState({ navBackground: backgroundcolor });
  //   });
  // }

//   return (
//       <div className='header space-x-6 lg:space-x-14 lg:text-lg py-8 font-semibold'>
//         <a href="#home"> <h3>| Home</h3> </a>
//         <a href="#designs"> <h3>| Designs</h3> </a>
//         <a href="#about"> <h3>| About</h3> </a>
//         <a href="#contact"> <h3>| Contact</h3> </a>
//       </div> 
//   );
// }
// export default HomeHeader


import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import {SocialMediaIconsReact} from 'social-media-icons-react';


const navigation = [
  { name: "Home", href: "#home" },
  { name: "Designs", href: "#designs" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  return (
    <div className="relative font-serif">
      <Popover className=" ">
        <div className=".header flex justify-between items-center max-w-7xl mx-auto px-4 py-8 sm:px-6 md:justify-start md:space-x-10 lg:px-0 lg:py-12">
          <div className="text-4xl text-white flex justify-start lg:w-0 lg:flex-1 lg:text-3xl">
            <a href="/">
              <h1>A.T.L</h1>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-1xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:text-2xl">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-white hover:underline hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        
           <SocialMediaIconsReact icon="instagram" iconColor="black" backgroundColor="white" borderStyle="none" url="/#" size="28" />
           <SocialMediaIconsReact icon="youtube-play" iconColor="black" backgroundColor="white" borderStyle="none"  url="/#" size="28" />
          </div> */}
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="bg-white">
              <div className="pt-5 pb-6 px-5 shadow-lg ">
                <div className="flex items-center justify-between">
                  <div>
                    <a href="/" className="text-4xl">
                      <h1>A.T.L</h1>
                    </a>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="h-screen text-center my-6 py-6 px-5">
                <div className="flex flex-col">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="my-6 text-base font-medium text-3xl text-gray-900 hover:underline hover:text-orange-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <div className="flex justify-center mt-4">
                <SocialMediaIconsReact icon="instagram" iconColor="black" backgroundColor="white" borderStyle="none" url="/#" size="28" />
           <SocialMediaIconsReact icon="youtube-play" iconColor="black" backgroundColor="white" borderStyle="none"  url="/#" size="28" />
                </div> */}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Header;