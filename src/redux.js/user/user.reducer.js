import {userActionTypes} from './user.types'
import {auth} from '../../firebase/firebase.utils'

const initialState = {
    currentUser: null
}

const userReducer = async ( state = initialState, action ) =>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            console.log(action.payload)
            return{
                ...state,
                currentUser: await auth.signInWithEmailAndPassword(action.payload.email, action.payload.password)
            }
        default:
            return state
    }
}

export default userReducer