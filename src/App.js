import React from 'react';
import {connect} from 'react-redux'
import QuestionsContainer from './containers/QuestionsContainer'
import Navbar from './components/NavBar'
/// do react-router-dom in here, use <Switch></Switch>

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <QuestionsContainer/>
      </div>
    );
  }
}

export default connect()(App);