import React, {useEffect} from 'react'
import Main from './Main'
import Designs from './Designs'
import Aos from 'aos';
import "aos/dist/aos.css"
import About from './About';
import Contact from './Contact';
import HomeHeader from './HomeHeader';


function Home() {
    useEffect(() => {
        Aos.init({duration:2000});   
    }, [])
    return (
        <div className='App' data-aos="fade-up">
            <HomeHeader/>
            <Main/>
            <Designs/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home
