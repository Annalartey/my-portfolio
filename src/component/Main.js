import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import PortfolioText from './PortfolioText';
import port1 from '../images/port1.png'
import resume from '../images/resume.pdf'


function Main() {

    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
        <div className='main'>
            <div id='home' className='App-header pt-20 lg:flex lg:flex-row lg:px-40 w-full lg:justify-between lg:items-start lg:pt-0 text-black' data-aos="fade-up" >
                <div data-aos="fade-right" className=" ">
                    <p className='text-2xl text-center font-sembold lg:text-left'>Hello, My name is</p>
                    <h1 className="text-4xl text-center lg:text-left lg:text-9xl mb-2 pt-8 font-semibold">Anna Lartey</h1>
                    <div className="w-40 lg:w-40 h-1 bg-red-500 my-2 lg:my-4 rounded-lg "></div>
                    <div className="w-40 lg:w-40 h-1 bg-red-500 ml-6 lg:ml-14 mb-10 rounded-2xl"></div>
                    <p className="text-center lg:text-left lg:text-xl">Frontend Software Developer / Graphic and Web Designer</p>
                    <a href={resume} download='resume' >
                        <button className='bg-white rounded border border-red-400 px-6 py-2 hover:bg-red-400'>download CV</button>
                    </a>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="3000" className="text-center font-bold text-4xl lg:text-6xl text-black-200 lg:mr-40 lg:py-0 lg:pt-20">
                    <img src={port1} alt="girl"/>
                    <PortfolioText/>
                </div>

            </div>
        </div>
    )
}

export default Main
