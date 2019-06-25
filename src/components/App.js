import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex';


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogIndex />

      </div>
    )
  }
}

export default App;
