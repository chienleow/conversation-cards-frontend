import React from 'react';
import {connect} from 'react-redux';
import FormContainer from './containers/FormContainer';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/form' component={FormContainer}/>
            <Route exact path='/start-game' component={GameContainer}/>
            <Route exact path='/' render={(props) => <HomeContainer history={this.props.history}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);