import React from 'react'
import eight from "../images/eight.jpg"
import designskills from "../images/design-skills.svg"
import tech from "../images/book-open.svg"
import openbook from "../images/tech.svg"
import Footer from './Footer'

function DetailedAbout() {
    return (
        <div>
            <div className="lg:flex lg:px-40 py-20  text-center lg:text-left">
                <a href="/#about" className=""> BACK </a>
                <h1 className="text-4xl lg:w-1/2 pb-6"> WHO I AM</h1>
                <div className="lg:w-1/2">
                    <p className="">I am just a girl that loves living. I love kids i love technology i love stories, music and anything that's got to do with Art</p>
                    <img className="w-96 h-56 mt-20" src={eight} alt="me"/>
                </div>
                
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold ml-24 lg:ml-40">Passion</h1>
            <div className="w-full py-20 lg:px-20 lg:flex">
               <div>
                   <img className="ml-24" src={designskills} alt=""/>
                   <h1 className="ml-32 font-semibold text-2xl">Design</h1>
                   <p className="mx-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> 
                <div>
                     <img className="ml-24" src={openbook} alt=""/>
                     <h1 className="ml-28 font-semibold text-2xl">Technology</h1>
                     <p className="mx-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                     <img className="ml-24" src={tech} alt=""/>
                     <h1 className="ml-32 font-semibold text-2xl">Stories</h1>
                     <p className="mx-4 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
               
               

            </div>
            <div className="mx-4 mb-10 lg:mx-20">
                <h1 className="text-center font-semibold text-4xl lg:text-6xl lg:text-left mb-10">Skill Set</h1>
                <div className="">
                    <p>Photoshop</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-full bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>Illustrator</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-1/3 bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>After effects</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-2/3 bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>html and css (tailwind)</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-full bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>Figma</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-2/4 bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>react</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-full bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>javascript</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-1/3 bg-green-500 absolute"></div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default DetailedAbout
