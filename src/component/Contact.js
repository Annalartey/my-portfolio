import React from 'react'

function Contact() {
    return (
        <div id='contact' className='lg:flex lg:flex-row text-white pt-40 App-header'>
               <div className=" lg:ml-40">
                    <div data-aos="fade-right">
                        <h1 className="text-center lg:text-left font-semibold text-5xl lg:text-8xl mb-10">Get In Touch</h1>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 my-2 rounded-2xl "></div>
                        <div className="w-40 lg:w-20 h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
                        <div className="text-center lg:text-left">
                            <p className="text-2xl">anna.t.lartey@gmail.com</p>
                        </div>
                        
                    </div>
                    <a href="../DetailedAbout" >
                        <button  data-aos="fade-up" className='border-2 font-bold ml-32 lg:-ml-2 lg:text-xl my-10 lg:px-8 py-2 px-4 lg:ml-40'> See More</button>
                    </a> 
               </div>
               <div className="w-full lg:w-96 h-96 lg:ml-10 bg-red-600">

               </div>
               
                 
            </div> 
    )
}

export default Contact
