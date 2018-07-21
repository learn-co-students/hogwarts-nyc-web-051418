import React, { Component } from 'react';
//component
import Hog from './Hog';

//INDEX CONTAINER
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
          hogData={hog}
          cleanHogName={cleanHogName}
          graphImage={this.graphImage(cleanHogName)}
          handleClick={this.handleClick}
          selectedHog={this.state.selectedHog}
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
      </div>
    )
  }
}

export default HogIndex;
