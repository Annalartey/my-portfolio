import React, {useEffect} from 'react'
import Main from './Main'
import Designs from './Designs'
import Aos from 'aos';
import "aos/dist/aos.css"
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';



function Home() {
    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
        <div className='App' data-aos="fade-up">
            <Main/>
            <Designs/>
            <About/>
            <Skills/>
            <Contact/>
      
            <Footer/>
        </div>
    )
}

export default Home
