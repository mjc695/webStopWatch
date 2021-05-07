import {userActionTypes} from './user.types'

export const setCurrentUser = (email,password) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: {email,password}
})