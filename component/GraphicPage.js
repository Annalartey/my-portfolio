import React from 'react'
import DesignHeader from './DesignHeader'
import Footer from './Footer'
import img1 from "./flyers/img1.jpg"
import img3 from "./flyers/img3.jpg"
import img6 from "./flyers/img6.jpg"
import img7 from "./flyers/img7.jpg"
import img8 from "./flyers/img8.jpg"
import img9 from "./flyers/img9.jpg"

function GraphicPage() {
    return (
        <div>
            <DesignHeader/>
            <div className="flex mb-80">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">G<br></br>R<br></br>A<br></br>P<br></br>H<br></br>I<br></br>C<br></br>S</h1>
                <div className="mx-4 lg:ml-14">
                    <div className=" flex mt-20 justify-between items-start lg:items-center">
                        <h1 className="font-semibold text-2xl">FLIER DESIGNS </h1>
                        <button className="p-2 mb-4 ml-8 border-b-4 border-black">SEE MORE</button>
                    </div>
                    <div className="lg:flex lg:w-">
                        <div className="w-100% lg:w-1/3 mt-4"><img src={img1} alt="first" /> </div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 mt-4"> <img src={img3} alt="second" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 mt-4"><img src={img6} alt="third" /></div>
                    </div>
                    <div className="lg:flex lg:mt-10">
                        <div className="w-100% lg:w-1/3 bg-gray-300 mt-4"><img src={img7} alt="fourth" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8  bg-gray-300 mt-4"><img src={img8} alt="fifth" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 bg-gray-300 mt-4"><img src={img9} alt="sixth" /></div>
                    </div>
            </div>
                
            </div> 

            <Footer/>
        </div>
    )
}

export default GraphicPage
