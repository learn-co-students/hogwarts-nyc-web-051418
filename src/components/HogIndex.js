import React, { Component } from 'react';
import HogDetails from './HogDetails';
import Hog from './Hog';

class HogIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedHog: "",
    }
  }

  handleClick = event => {
    this.setState({
      selectedHog: event.target.dataset.selectedhogname,
    })
  }

  cleanHogName = hogName => hogName.replace(/ /g, "_").toLowerCase()

  graphImage = cleanHogName => require('../hog-imgs/' + cleanHogName + '.jpg')

  buildHogCards = hogsArray => {
    return hogsArray.map(hog => {
      let cleanHogName = this.cleanHogName(hog.name)
      return (
        <Hog 
          hogName={hog.name}
          cleanHogName={cleanHogName}
          graphImage={this.graphImage(cleanHogName)}
          handleClick={this.handleClick}
        />
        )
    })
  }

  render() {
    return (
      <div>
        <div className="ui grid container" >
          {this.buildHogCards(this.props.array)}
        </div>
        <HogDetails 
          selectedHog={this.state.selectedHog} 
          array={this.props.array}
        />
      </div>
    )
  }
}

export default HogIndex;
