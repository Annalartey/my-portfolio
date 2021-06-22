import React from 'react'
import WebHeader from './WebHeader'
import Footer from './Footer'

function WebsitePage() {
    return (
        <div className="">
            <WebHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 my-6 px-4 text-center">W<br></br>E<br></br>B<br></br>S<br></br>I<br></br>T<br></br>E<br></br>S</h1>
                <div className="lg:ml-14 text-center">
                        <a href="https://stoic-nobel-14817f.netlify.app" ><div className="mt-8">
                            <h1>BoyBetterPray</h1>
                      

                        </div>  </a>
                        <div className="mt-8">
                            <p>portfolio</p>
                        </div>
                       
                            <div className="mt-8">
                                <p>Task Tracker App</p>
                                <p>An app that allows you add, delete and set reminder for all your tasks</p>
                                <a href="https://trasker.netlify.app" target="_"> <button className="border-2 px-2">Veiw App</button> </a>
                            </div>
                       
                        <a href="https://nifty-panini-23115f.netlify.app/">
                            <div className="mt-8">
                                <p>One Big Family</p>
                            </div>
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
