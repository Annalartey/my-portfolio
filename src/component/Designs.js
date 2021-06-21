import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

function Designs() {

    useEffect(() => {
        Aos.init({duration:1000});   
    }, [])
    return (
        <div id='designs' data-aos="fade-up" className="app-design py-4"> 
            <div className="text-4xl font-bold lg:mx-40 mt-14" >
                <h1 className="text-center lg:text-left lg:text-7xl font-semibold my-8 ">Designs</h1>
                <div className="w-40 lg:w-20 h-1 bg-red-600 mb-2 rounded-2xl "></div>
                <div className="w-40 lg:w-20  h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
            </div>
            
            <div className="lg:px-40 lg:w-full " >
                <div className='lg:flex lg:flex-row lg:w-100% lg:pl-40' data-aos="fade-up">
                <Link to="/design-website"> <div className='design-web lg:w-96 text-2xl font-semibold border-2 border-red-100 lg:mr-8 mt-8 mx-4 lg:mx-0 '>Coding Projects</div></Link>
                <Link to="/design-graphics"><div className='design-graph lg:w-96 text-2xl  font-semibold border-2 border-red-100 mt-8 mx-4 lg:mx-0 '>Graphic Designs</div></Link>
                </div>
                <div className='lg:flex lg:flex-row lg:w-100% lg:pl-40' data-aos="fade-up">
                <Link to="/design-lyrics"><div className='design-lyrics lg:w-96 text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8 mx-4 lg:mx-0 '>Lyrics Videos</div></Link>
                <Link to="/design-paper"><div className='design-art lg:w-96 text-2xl font-semibold border-2 border-red-100 mt-8 mx-4 lg:mx-0 '>Paper Art</div></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Designs
