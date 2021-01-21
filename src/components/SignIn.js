import React, {useState, useEffect} from 'react'
import {auth} from '../firebase/firebase.utils'
import FormInput from './formInput'

function SignIn({loggedIn, setLoggedIn}){
    console.log(loggedIn, 'logged in')

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

    const handleSubmit = async event =>{
        event.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(email,password)
            setLoggedIn(true)
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
            <button type='submit' ></button>
            </form>
        </div>
    )
}

export default SignIn