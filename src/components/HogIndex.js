import React, { Component } from 'react';
import HogDetails from './HogDetails';
import UUID from 'uuid'


class HogIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedHog: "",
    }
  }

  handleClick = (event) => {
    this.setState({
      selectedHog: event.target.dataset.selectedhogname,
    })
  }

  buildHogCards = (hogsArray) => {
    return hogsArray.map(hog => {
      let cleanHogName = hog.name.replace(/ /g, "_").toLowerCase()
      let graphImage = require('../hog-imgs/' + cleanHogName + '.jpg')
      return (
        <div key={UUID()} className="ui eight wide column" >
          <h3 >{hog.name}</h3>
          <img src={graphImage} data-selectedhogname={hog.name} alt={hog.name} onClick={this.handleClick}/>
        </div>)
    })
  }

  render() {
    return (
      <div>
        <div className="ui grid container" >
          {this.buildHogCards(this.props.array)}
        </div>
        <HogDetails selectedHog={this.state.selectedHog}/>
      </div>
    )
  }
}

export default HogIndex
;
