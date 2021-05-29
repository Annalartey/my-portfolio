import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"


function Main() {

    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
        <div className=''>
            <div id='home' className='App-header lg:flex lg:flex-row w-full lg:justify-between items-start lg:items-center text-white' data-aos="fade-up" >
                <div data-aos="fade-right" className=" lg:px-40">
                    <h1 className="text-5xl lg:text-9xl mb-10 font-semibold">Anna <br></br> Lartey</h1>
                    <div className="w-14 lg:w-20 h-1 bg-red-600 my-4 rounded-lg "></div>
                    <div className="w-14 lg:w-20 h-1 bg-red-600 ml-6 lg:ml-14 mb-10 rounded-2xl"></div>
                    <p className="lg:text-xl">Graphic and Web Designer / <br></br>
                    Frontend Software Developer</p>
                </div>
                <div data-aos="fade-left" className="font-bold text-6xl text-red-600 lg:mr-40 py-20 lg:py-0">

                    <h1>PORTFOLIO</h1>
                </div>

            </div>
        </div>
    )
}

export default Main
