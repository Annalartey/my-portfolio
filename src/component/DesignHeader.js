import React from 'react'
import { Link } from 'react-router-dom'

function DesignHeader() {
    return (
        <div className='design-header pt-10 lg:px-40'>
          <Link to="/"><h1>Anna Lartey</h1></Link>
    
          <div className='flex flex-row'>
            <Link to="/design-website"> <h3>Websites</h3> </Link>
            <Link to="/design-graphics"> <h3>Graphic Designs</h3> </Link>
            <Link to="/design-lyrics"> <h3>Lyrics Video</h3> </Link>
            <Link to="/design-paper"> <h3>Paper Art</h3> </Link>
          </div> 
          
        </div>
    )
}

export default DesignHeader
