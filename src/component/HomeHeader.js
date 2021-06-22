import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../images/logo-b.png'


const HomeHeader = () => {
  return (
      <div className='header space-x-6 lg:space-x-14 lg:text-lg py-8 font-semibold'>
        <a href="#home"> <h3>| Home</h3> </a>
        <a href="#designs"> <h3>| Designs</h3> </a>
        <a href="#about"> <h3>| About</h3> </a>
        <a href="#contact"> <h3>| Contact</h3> </a>
      </div> 
  );
}
export default HomeHeader