import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navbar = () =>{

    const history = useHistory()

    const [userInfo, setUserInfo] = useState()
    
    useEffect(()=>{
        const userData = window.localStorage.getItem('userInfo')
        if(userData){
            console.log('userData:', userData)
            setUserInfo(userData)
        }
    })

    const logout = () =>{
        window.localStorage.removeItem('userInfo')
        console.log('logged out:', window.localStorage.getItem('userInfo'))
        history.push('/homepage')
    }

    return(
        <div>
            Navbar
            {userInfo? 
            <button type='submit' onClick={logout}> Logout </button>
            : <Link to='/signIn'>Sign In </Link>
        }
        </div>
    )
}

export default Navbar