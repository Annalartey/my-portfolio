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
import HomeHeader from './HomeHeader';
// import Works from './Works';



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
            <>
                    <HomeHeader/>
                    <Main/>
                    <Designs/>
                    <About/>
                    <Skills/>
                    <Contact/> 
                    <Footer/>
            
           
            </>
            )}
        </div>
    )
}

export default Home








