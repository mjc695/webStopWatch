import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/homepage.js'

import random from './components/random.js'
import SignIn from './components/SignIn.js'

const Routes = () => {

    return(
        <div>
            <Switch>
                <Route exact path ='/' component={Homepage} /> 
                <Route path='/google' component={random} />
                <Route path='/homepage' component={Homepage} />
                <Route path='/signIn' component={SignIn} />
            </Switch>
        </div>
    )


}

export default Routes