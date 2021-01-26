import React from 'react';
import {connect} from 'react-redux';
import FormContainer from './containers/FormContainer';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/NavBar';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/form' render={(props) => <FormContainer history={this.props.history}/>}/>
            <Route exact path='/start-game' render={(props) => <GameContainer history={this.props.history}/>}/>
            <Route exact path='/' render={(props) => <HomeContainer history={this.props.history}/>}/>
          </Switch>
      </div>
    );
  }
}

export default connect()(App);