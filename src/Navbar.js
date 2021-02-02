import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () =>{

    const logout = () =>{
        window.localStorage.removeItem('userInfo')
        console.log('logged out:', window.localStorage.getItem('userInfo'))
    }

    return(
        <div>
            Navbar
            <button type='submit' onClick={logout}> Logout </button>
            <Link to='/signIn'>Sign In </Link>
        </div>
    )
}

export default Navbar