import React from 'react'
import DesignHeader from './DesignHeader'
import Footer from './Footer'

function WebsitePage() {
    return (
        <div className="">
            <DesignHeader/>
            <button className="border-2 border-black px-4 py-2">Show Me More</button>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">W<br></br>E<br></br>B<br></br>S<br></br>I<br></br>T<br></br>E<br></br>S</h1>
                <div className="lg:ml-14">
                        <a href="/" ><div className="mt-8">
                            <p>BoyBetterPray</p>
                        </div>  </a>
                        <div className="mt-8">
                            <p>portfolio</p>
                        </div>
                        <a href="https://traska.netlify.app" className="mt-8">
                            <p>Task Tracker App</p>
                        </a>
                        <div className="mt-8">
                            <p>MyKidismart App</p>
                        </div>
                </div>
            </div>
           
            <Footer/>
            

        </div>
    )
}

export default WebsitePage
