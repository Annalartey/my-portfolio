import React from 'react'

function Contact() {
    return (
        <div id='contact' className='flex flex-row text-white py-40 App-header'>
               <div className=" ml-40">
                    <div data-aos="fade-right">
                        <h1 className="font-semibold text-8xl mb-10">Get In Touch</h1>
                        <div className="w-20 h-1 bg-red-600 my-4 rounded-2xl "></div>
                        <div className="w-20 h-1 bg-red-600 ml-14 mb-10 rounded-2xl"></div>
                        <p className="text-2xl">anna.t.lartey@gmail.com</p>
                        <p className="text-2xl">+233544929176</p>
                    </div>
                    <a href="../DetailedAbout" >
                        <button  data-aos="fade-up" className='border-2 font-bold text-xl px-8 py-2  mt-10'> See More</button>
                    </a> 
               </div>
               <div className="w-96 h-96 bg-red-600 -ml-56">

               </div>
               
                 
            </div> 
    )
}

export default Contact
