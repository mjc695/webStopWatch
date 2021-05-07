import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from '../firebase/firebase.utils'
import FormInput from './formInput'

import './SignIn.scss'
import { setCurrentUser } from '../redux.js/user/user.action'

function SignIn({setCurrentUser}){

    // const {setCurrentUser} = this.props

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmail = (event) =>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handlePassword = event =>{
        console.log('password', event.target.value)
        setPassword(event.target.value) 
    }

    const handleSubmit = async (event) =>{
        console.log('trying to submit')
        event.preventDefault()
        try{
            // setCurrentUser(email,password)
            const signedIn = await auth.signInWithEmailAndPassword(email,password)
            window.localStorage.setItem('userInfo', signedIn )
            console.log('signed in:', signedIn)
            console.log('signed in via local storage:', window.localStorage.getItem('userInfo'))
            history.push('/homepage')
        } catch(err){
            console.log(err)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            Sign In is below
            <FormInput label='email' handleChange={handleEmail} />
            <FormInput label='password' handleChange={handlePassword} />
            {/* <FormInput label='email' handleChange={handleemail} /> */}
            Sign In is above
            <button type='submit' > Log In </button>
            </form>
        </div>
    )
}

const mapState = null;
const mapDispatch = dispatch => ({
    setCurrentUser : (email, password) => dispatch(setCurrentUser(email,password))
})

export default connect(mapState,mapDispatch)(SignIn)