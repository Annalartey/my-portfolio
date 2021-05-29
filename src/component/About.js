import React, {useEffect} from 'react'
import Aos from 'aos';


function About() {

       
    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
     
           <div id='about' className='lg:flex lg:flex-row text-white py-80 mt-20 App-header'>
               <div>
                    <div data-aos="fade-right">
                        <h1 className="font-semibold text-8xl mb-10  lg:pl-40">About Me</h1>
                        <div className="w-20 h-1 bg-red-600 my-4 lg:ml-40 rounded-2xl "></div>
                        <div className="w-20 h-1 bg-red-600 ml-14 lg:ml-48 mb-10 rounded-2xl"></div>
                        <p className="text-2xl lg:pl-40">I love kids, technology<br></br> and stories</p>
                    </div>
                    <a href="../DetailedAbout" >
                        <button  data-aos="fade-up" className='border-2 font-bold text-xl my-10 lg:px-8 py-2 lg:ml-40'> See More</button>
                    </a> 
               </div>
               <div className="bg-red-600 mb-10 w-full lg:w-96 h-96" data-aos="fade-right">
              </div>
                 
            </div> 
        
    )
}

export default About
