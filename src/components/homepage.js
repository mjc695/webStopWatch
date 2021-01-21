import React from 'react'
import {Link} from 'react-router-dom'



const Homepage = () =>{

    
    return(
        <div className='homepage-wrapper'>
            Homepage
            <div className='homepage=dashboard'>
                Dashboard:
                <Link to='/User'>User Page</Link>
                <Link to='/History'>History Page</Link>
                
            </div>
        </div>
    )
}

export default Homepage