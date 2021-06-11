import React from 'react'
import eight from "../images/eight.jpg"
import designskills from "../images/design-skills.svg"
import tech from "../images/book-open.svg"
import openbook from "../images/tech.svg"
import Footer from './Footer'

function DetailedAbout() {
    return (
        <div>
             <div className='lg:flex lg:flex-row text-white pb-80 pt-2 App'>
               <div>
                   <a href="/#about"> BACK </a>
                    <div className=" " data-aos="fade-right">
                        <h1 className="text-center lg:text-left font-semibold text-5xl lg:text-8xl mb-10  mt-28 lg:pl-40">About Me</h1>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 my-2 lg:ml-40 rounded-2xl "></div>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 ml-14 lg:ml-48 mb-10 rounded-2xl"></div>
                        <p className="text-center lg:text-left text-2xl mx-2 lg:mx-0 lg:pl-40 mb-10">I love kids, I am passionate about technology, <br></br> stories and anything art</p>
                    </div>
               </div>
               <div className=" w-full lg:w-1/2 h-96 lg:ml-20" data-aos="fade-right">
               <img data-aos="fade-right"  src={eight} alt="kids" />
              </div>
                 
            </div> 
            <div className="lg:flex lg:px-40 py-40 text-center lg:text-left">
                <h1 className="text-4xl lg:w-1/2"> WHO I AM</h1>
                <div className="lg:w-1/2">
                    <p className="">I am just a girl that loves living. I love kids i love technology i love stories, music and anything that's got to do with Art</p>
                    <img className="w-96 h-96 mt-20" src={eight} alt="me"/>
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
                    <p>html and css</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-full bg-green-500 absolute"></div>
                    </div>
                </div>
                <div className="">
                    <p>tailwind</p>
                    <div class="h-3 relative max-w-xl rounded-full overflow-hidden">
                        <div class="w-full h-full bg-gray-200 absolute"></div>
                        <div class="h-full w-3/4 bg-green-500 absolute"></div>
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
