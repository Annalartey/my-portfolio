import React, {useEffect} from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom';
import eight from '../images/eight.jpg'


function About() {

       
    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
     
           <div id='about' className='about lg:flex lg:flex-row text-black pt-40'>
               <div>
                    <div data-aos="fade-left">
                        <h1 className="text-center lg:text-left font-semibold text-5xl lg:text-8xl mb-10  lg:pl-40">About Me</h1>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 my-2 lg:ml-40 rounded-2xl "></div>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 ml-14 lg:ml-48 mb-10 rounded-2xl"></div>
                        <p className="text-center lg:text-left text-2xl mx-2 lg:mx-0 lg:pl-40">I love kids, I am passionate about technology, <br></br> stories and anything art</p>
                    </div>
                    <Link to="/detailed-about" >
                        <button  data-aos="fade-up" className='rounded-xl border-2 border-red-400 font-bold ml-32 lg:text-xl my-10 lg:px-8 px-4 lg:ml-40'> See More</button>
                    </Link> 
               </div>
               <div className=" w-full lg:w-96 h-96 lg:ml-20" data-aos="fade-right">
                   <img src={eight} alt="child"/>
              </div>
                 
            </div> 
        
    )
}

export default About
