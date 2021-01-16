import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http"//localhost:3040/api/v1/questions')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
