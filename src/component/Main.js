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
                    <h1 className="text-5xl text-center lg:text-left lg:text-9xl mb-10 mt-10 font-semibold">Anna <br></br> Lartey</h1>
                    <div className="w-40 lg:w-20 h-1 bg-red-600 my-2 lg:my-4 rounded-lg "></div>
                    <div className="w-40 lg:w-20 h-1 bg-red-600 ml-6 lg:ml-14 mb-10 rounded-2xl"></div>
                    <p className="text-center lg:text-left lg:text-xl">Graphic and Web Designer / <br></br>
                    Frontend Software Developer</p>
                </div>
                <div data-aos="fade-left" className="text-center font-bold text-4xl lg:text-6xl text-gray-200 lg:mr-40 pt-40 lg:py-0">

                    <h1>PORTFOLIO</h1>
                </div>

            </div>
        </div>
    )
}

export default Main
