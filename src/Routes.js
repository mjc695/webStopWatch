import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/homepage.js'

import random from './components/random.js'
import SignIn from './components/SignIn.js'

const Routes = props => {
    console.log('props in routes:', props)

    return(
        <div>
            <Switch>
                <Route path='/google' component={random} />
                <Route path='/homepage' component={Homepage} />
                <Route path='/signIn' component={SignIn} props={props} />
            </Switch>
        </div>
    )


}

export default Routes