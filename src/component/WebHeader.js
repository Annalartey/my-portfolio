import React from 'react'
import { Link } from 'react-router-dom'

function WebHeader() {
    return (
        <div className='flex design-header px-4 lg:px-40 py-6'>
          <Link to="/"><p>AL</p> </Link>
    
          <div className='flex flex-row'>
            <Link to="/design-website"><h3 className="font-bold">Websites</h3> </Link>
            <Link to="/design-graphics"> <h3>Graphics</h3> </Link>
            <Link to="/design-lyrics"> <h3>Lyrics</h3> </Link>
            <Link to="/design-paper"> <h3>Paper</h3> </Link>
          </div> 
          
        </div>
    )
}

export default WebHeader
