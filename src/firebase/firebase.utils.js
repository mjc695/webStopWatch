import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBeGDcYktYdXlLGpLbsDfQsLkggBfQWrNI",
    authDomain: "productivity-stopwatch.firebaseapp.com",
    projectId: "productivity-stopwatch",
    storageBucket: "productivity-stopwatch.appspot.com",
    messagingSenderId: "490350773604",
    appId: "1:490350773604:web:c5ff9a873d9c4bc30d2671",
    measurementId: "G-K0J1GG3PCS"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase