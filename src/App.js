import React from 'react';
import {connect} from 'react-redux'
import fetchQuestions from './actions/fetchQuestions'

class App extends React.Component {

  componentDidMount() {
    // fetch('http://localhost:3040/api/v1/questions')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return (
//     questions: state.questions
//   )
// }

export default connect(null, {fetchQuestions})(App);
