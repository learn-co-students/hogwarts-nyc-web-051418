import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import OptionNav from './OptionNav'
import HogIndex from './HogIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <OptionNav />
          <HogIndex />

      </div>
    )
  }
}

export default App;
