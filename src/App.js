import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

import {auth} from './firebase/firebase.utils'
import Routes from './Routes'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    if (!loggedIn){
      console.log('not logged in')
    }
  })

  return (
    <div className="App">
        <Router>
          <Routes />
        </Router>
    </div>
  );
}

export default App;
