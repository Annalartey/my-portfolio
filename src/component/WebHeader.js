import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-b.png'

function WebHeader() {
    return (
        <div className='flex flex-col lg:flex-row design-header px-2 lg:px-40'>
          <Link to="/"><img className="w-20 h-20" src={logo} alt=""></img> </Link>
    
          <div className='flex flex-row pb-4'>
            <Link to="/design-website"><h3 className="font-bold">Websites</h3> </Link>
            <Link to="/design-graphics"> <h3>Graphics</h3> </Link>
            <Link to="/design-lyrics"> <h3>Lyrics</h3> </Link>
            <Link to="/design-paper"> <h3>Paper</h3> </Link>
          </div> 
          
        </div>
    )
}

export default WebHeader
