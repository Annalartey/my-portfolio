import React, { useState, useEffect } from 'react';
import '../App.css'
import Main from './Main'
import Designs from './Designs'
import Aos from 'aos';
import "aos/dist/aos.css"
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';
import Loader from './loader/Loader';



function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 8000);
    }, []);



    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])


    return (
        <div>
            {loading ? (
                // <div className="loader-container">
      	        //     <div className="spinner"></div>
                // </div>
                <Loader/>
             ) : (
            <div className='App' data-aos="fade-up">
            <Main/>
            <About/>
            <Designs/>
            <Skills/>
            <Contact/>
            <Footer/>
            </div>
            )}
        </div>
    )
}

export default Home








