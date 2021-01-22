import React from 'react';
import {connect} from 'react-redux'
import QuestionsContainer from './containers/QuestionsContainer'

class App extends React.Component {

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="App">
        <QuestionsContainer/>
      </div>
    );
  }
}

export default connect()(App);