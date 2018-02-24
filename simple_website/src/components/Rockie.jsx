import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Player from './Player';
import FullRockie from './FullRockie';

class Rockie extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/rockie" component={FullRockie} />
        <Route exact path="/rockie:number" component={Player} />
      </Switch>
    )
  }
}

export default Rockie;