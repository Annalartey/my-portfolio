import React from 'react'
import PaperHeader from './PaperHeader'
import Footer from './Footer'
import img1 from "./paper/1-min.jpg"
import img2 from "./paper/2-min.jpg"
import img3 from "./paper/3-min.jpg"
import img4 from "./paper/4-min.jpg"
import img5 from "./paper/5-min.jpg"
import img6 from "./paper/6-min.jpg"

function PaperPage() {
    return (
        <div>
            <PaperHeader/>
            <div className="flex">
                <h1 className="font-bold text-3xl lg:mx-14 mt-6 text-center">P<br></br>A<br></br>P<br></br>E<br></br>R</h1>
                <div className="mx-4 lg:ml-14">
                    <div className=" flex mt-20 justify-between items-start lg:items-center">
                        <h1 className="font-semibold text-2xl">PAPER ARTWORK </h1>
                        <button className="p-2 mb-4 ml-8 border-b-4 border-black">SEE MORE</button>
                    </div>
                    <div className="lg:flex lg:w-">
                        <div className="w-100% lg:w-1/3 mt-4"><img src={img1} alt="first" /> </div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 mt-4"> <img src={img2} alt="second" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 mt-4"><img src={img3} alt="third" /></div>
                    </div>
                    <div className="lg:flex lg:mt-10">
                        <div className="w-100% lg:w-1/3 bg-gray-300 mt-4"><img src={img4} alt="fourth" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8  bg-gray-300 mt-4"><img src={img5} alt="fifth" /></div>
                        <div className="w-100% lg:w-1/3 lg:ml-8 bg-gray-300 mt-4"><img src={img6} alt="sixth" /></div>
                    </div>
            </div>
            </div> 
            <Footer/>
        </div>
    )
}

export default PaperPage
