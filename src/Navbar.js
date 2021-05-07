import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const Navbar = ({user}) =>{

    // const {user} = this.props

    const history = useHistory()

    const [userInfo, setUserInfo] = useState()
    
    useEffect(()=>{
        console.log('user in nav', user)

        const userData = window.localStorage.getItem('userInfo') || user
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

const mapState = state =>({
    user: state.user.CurrentUser
})

export default connect(mapState,null)(Navbar)