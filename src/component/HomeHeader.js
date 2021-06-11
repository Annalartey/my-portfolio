import React from 'react'


const HomeHeader = () => {
  return (
    <div className='header py-10 px-4 lg:mx-40'>
      <a href="#home"><h1>AL</h1></a>

      <div className='header h3'>
        <a href="#home"> <h3>Home</h3> </a>
        <a href="#designs"> <h3>Designs</h3> </a>
        <a href="#about"> <h3>About</h3> </a>
        <a href="#contact"> <h3>Contact</h3> </a>
      </div> 
      
    </div>
  );
}
export default HomeHeader