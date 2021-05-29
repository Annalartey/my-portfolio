import React from 'react'
import DesignHeader from './DesignHeader'
import Footer from './Footer'

function GraphicPage() {
    return (
        <div>
            <DesignHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">G<br></br>R<br></br>A<br></br>P<br></br>H<br></br>I<br></br>C<br></br>S</h1>
                <div className="lg:ml-14">
                    <div className="lg:flex">
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8">
                            <p>newsite.com</p>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8">
                            <p>hello.com</p>
                        </div>
                        <div className="design-box text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8">
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

export default GraphicPage
