import React from 'react';
import {connect} from 'react-redux';
import HomeContainer from './containers/HomeContainer';
// import GameContainer from './containers/GameContainer';
import Navbar from './components/NavBar';
/// do react-router-dom in here, use <Switch></Switch>

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <HomeContainer/>
        {/* <GameContainer/> */}
      </div>
    );
  }
}

export default connect()(App);