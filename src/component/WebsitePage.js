import React from 'react'
import DesignHeader from './DesignHeader'
import Footer from './Footer'

function WebsitePage() {
    return (
        <div className="">
            <DesignHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">W<br></br>E<br></br>B<br></br>S<br></br>I<br></br>T<br></br>E<br></br>S</h1>
                <div className="lg:ml-14">
                    <div className="lg:flex">
                        <div className="mt-8 lg:mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="mt-8 lg:mr-8">
                            <p>newsite.com</p>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <div className="mt-8 lg:mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="mt-8 lg:mr-8">
                            <p>newsite.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="">Show Me More</button>
            <Footer/>
            

        </div>
    )
}

export default WebsitePage
