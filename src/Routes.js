import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './components/homepage.js'

import random from './components/random.js'

const Routes = () => {

    return(
        <div>
                <Switch>
                    <Route path='/google' component={random}></Route>
                    <Route path='/homepage' component={Homepage} />
                </Switch>
        </div>
    )


}

export default Routes