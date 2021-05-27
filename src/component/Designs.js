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
            <div className="text-4xl font-bold mx-40 mt-14" >
                <h1 className=" text-7xl font-semibold my-8 ">Designs</h1>
                <div className="w-20 h-1 bg-red-600 mb-4 rounded-2xl "></div>
                <div className="w-20 h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
            </div>
            
            <div className=" mx-40" >
                <div className='flex flex-row' data-aos="fade-right">
                <Link to="/design-website"> <div className='design-web design-box text-2xl font-semibold border-2 border-red-100 mr-8 '>Website</div></Link>
                <Link to="/design-graphics"><div className='design-graph design-box text-2xl font-semibold border-2 border-red-100 '>Graphic Designs</div></Link>
                </div>
                <div className='flex flex-row' data-aos="fade-left">
                <Link to="/design-lyrics"><div className='design-lyrics design-box text-2xl font-semibold border-2 border-red-100 mt-8 mr-8 '>Lyrics Videos</div></Link>
                <Link to="/design-paper"><div className='design-art design-box text-2xl font-semibold border-2 border-red-100 mt-8 '>Paper Art</div></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Designs
