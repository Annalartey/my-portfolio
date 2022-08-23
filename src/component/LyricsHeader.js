import React from 'react'
import { Link } from 'react-router-dom'

function LyricsHeader() {
    return (
        <div className='design-header py-4 px-2 lg:px-40'>
        <Link to="/"><h1>A.T.L</h1></Link>
  
        <div className='flex flex-row'>
          <Link to="/design-website"><h3 >Websites</h3> </Link>
          <Link to="/design-graphics"> <h3>Graphics</h3> </Link>
          <Link to="/design-lyrics"> <h3  className="font-bold">Lyrics</h3> </Link>
          <Link to="/design-paper"> <h3>Paper</h3> </Link>
        </div> 
        
      </div>
    )
}

export default LyricsHeader
