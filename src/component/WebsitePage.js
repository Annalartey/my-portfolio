import React from 'react'
import WebHeader from './WebHeader'
import Footer from './Footer'

function WebsitePage() {
    return (
        <div className="">
            <WebHeader/>
            <div className="flex py-2">
                <h1 className="font-bold text-3xl lg:mx-14 my-6 px-4 text-center">W<br></br>E<br></br>B<br></br>S<br></br>I<br></br>T<br></br>E<br></br>S</h1>
                <div className="lg:ml-14 text-center">
                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">1.</p>
                        <div>
                            <h1>JavaScript Calculator</h1>
                            <p>A simple Calculator made with JavaScript, HTML and CSS</p>
                            <a href="https://a-calculator-for-you.netlify.app/" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw Site</button>
                            </a>
                        </div>
                    </div>

                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">1.</p>
                        <div>
                            <h1>JavaScript Stopwatch</h1>
                            <p>A simple stopwatch made with JavaScript, HTML and CSS</p>
                            <a href="https://a-stopwatch.netlify.app/" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw Site</button>
                            </a>
                        </div>
                    </div>

                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">2.</p>
                        <div>
                            <h1>Portfolio</h1>
                            <a href="/" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw Site</button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">3.</p>
                        <div>
                            <h1>Task Tracker App</h1>
                            <a href="https://trasker.netlify.app" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw App</button>
                            </a>
                        </div>
                    </div>
                    

                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">4.</p>
                        <div>
                            <h1>One Big Family</h1>
                            <a href="https://nifty-panini-23115f.netlify.app/" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw Site</button>
                            </a>
                        </div>
                    </div>

                    <div className="flex rounded shadow mt-8 w-80 h-40">
                        <p className="mx-6 text-4xl">5.</p>
                        <div>
                            <h1 className="text-lg font-semibold">MyKidismart App</h1>
                            <a href="/" target="_" >
                                <button className="rounded border-2 border-grey-600 mt-2 px-4 text-grey-600 ">Veiw Site</button>
                            </a>
                        </div>
                    </div>
                       
                </div>
            </div>
           
            <Footer/>
            

        </div>
    )
}

export default WebsitePage
