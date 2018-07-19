import React, { Component } from 'react';
import hogs from '../porkers_data';


class HogIndex extends Component {

  buildHogCards = () => {
    return hogs.map(hog => {
      let cleanHogName = hog.name.replace(/ /g, "_").toLowerCase()
      return (<div className="ui eight wide column">
      <h3>{hog.name}</h3>
      <img src={"../hog-imgs/" + cleanHogName + ".jpg"}/>
      </div>)
    })
  }


  render() {
    return (
      <div className="ui grid container">
        {this.buildHogCards()}
      </div>
    )
  }
}

export default HogIndex;
