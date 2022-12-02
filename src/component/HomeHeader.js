import React from 'react'

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

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
            <Popover.Button className="inline-flex items-center justify-center rounded-3xl bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
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
                    <Popover.Button className="inline-flex items-center justify-center text-black hover:text-gray-500 focus:outline-none">
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
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Header;