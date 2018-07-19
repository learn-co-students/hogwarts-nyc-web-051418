import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogDetails from './HogDetails';
import UUID from 'uuid'


class HogIndex extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedHog: "",
      filtered: false
    }
  }


  greasedHogs = () => {
    return hogs.filter(hog => hog.greased === true)
  }


  buildHogCards = () => {
    let hogsArray;
    //if state filtered: true, only show greased hogs
    if (this.state.filtered){
      hogsArray = this.greasedHogs()
    //else (state filtered: false), show all hogs
    }else {
      hogsArray = hogs;
    }
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

  handleClick = (event) => {
    this.setState({
      selectedHog: event.target.dataset.selectedhogname,
    })
  }

  handleFilter = () => {
    let greasedVar = !this.state.filtered
    this.setState({
      filtered: greasedVar
    })
  }

  render() {
    return (
      <div>
        <label> Greased?
          <input className="filterButton" type="checkbox" checked={this.state.greased} onChange={this.handleFilter} />
        </label>



        <div className="ui grid container" >
          {this.buildHogCards()}
        </div>
        <HogDetails selectedHog={this.state.selectedHog}/>
      </div>
    )
  }
}

export default HogIndex;
