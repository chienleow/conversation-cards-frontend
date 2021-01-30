import React from 'react';
import FormContainer from './containers/FormContainer';
import GameContainer from './containers/GameContainer';
import HomeContainer from './containers/HomeContainer';
import About from './components/About';
import Navbar from './components/NavBar';
import {Switch, Route} from 'react-router-dom';

const App = () => {
// convert this to a functional component
    return (
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/form' component={FormContainer}/>
            <Route exact path='/start-game' component={GameContainer}/>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/about' component={About}/>
          </Switch>
      </div>
    );
}

export default App;