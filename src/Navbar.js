import React from 'react'

const Navbar = () =>{

    const logout = () =>{
        window.localStorage.removeItem('userInfo')
        console.log('logged out:', window.localStorage.getItem('userInfo'))
    }

    return(
        <div>
            Navbar
            <button type='submit' onClick={logout}> Logout </button>
        </div>
    )
}

export default Navbar