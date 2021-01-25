import React from 'react';
import {connect} from 'react-redux';
import FormContainer from './containers/FormContainer';
import HomeContainer from './containers/HomeContainer';
// import GameContainer from './containers/GameContainer';
import Navbar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <HomeContainer history={this.props.history}/> */}
        {/* <GameContainer/> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <HomeContainer history={this.props.history}/>}/> 
            <Route exact path='/form' component={FormContainer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);