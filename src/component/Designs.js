import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

function Designs() {

    useEffect(() => {
        Aos.init({duration:1000});   
    }, [])
    return (
        <div id='designs' data-aos="fade-up" className="App-header pt-2 pt-10"> 
            <div className="text-4xl font-bold lg:mx-40 mt-14" >
                <h1 className=" text-7xl font-semibold my-8 ">Designs</h1>
                <div className="w-20 h-1 bg-red-600 mb-4 rounded-2xl "></div>
                <div className="w-20 h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
            </div>
            
            <div className="lg:px-40 lg:w-full" >
                <div className='lg:flex lg:flex-row lg:w-100% bg-black' data-aos="fade-right">
                <Link to="/design-website"> <div className='design-box bg-white  text-2xl font-semibold border-2 border-red-100 lg:mr-8 '>Website</div></Link>
                <Link to="/design-graphics"><div className='design-box text-2xl  font-semibold border-2 border-red-100 '>Graphic Designs</div></Link>
                </div>
                <div className='lg:flex lg:flex-row' data-aos="fade-left">
                <Link to="/design-lyrics"><div className='design-lyrics design-box text-2xl font-semibold border-2 border-red-100 mt-8 lg:mr-8 '>Lyrics Videos</div></Link>
                <Link to="/design-paper"><div className='design-art design-box text-2xl font-semibold border-2 border-red-100 mt-8 '>Paper Art</div></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Designs
