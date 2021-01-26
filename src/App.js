import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

import {auth} from './firebase/firebase.utils'
import Routes from './Routes'
import Navbar from './Navbar'


function App() {

  useEffect(()=>{
    if (!window.localStorage.getItem('userInfo')){
      console.log('not logged in')
    } else {
      console.log('logged in')
    }
  })

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes />
        </Router>
    </div>
  );
}

export default App;
