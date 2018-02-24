import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Rockie from './Rockie';
import Schedule from './Schedule';

class Main extends Component{

  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rockie' component={Rockie} />
          <Route exact path='/schedule' component={Schedule} />
        </Switch>
      </main>
    )
  }

}

export default Main;