import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogDetails from './HogDetails';
import UUID from 'uuid'


class HogIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedHog: "",
      greasedFilter: false,
      sort: "",
    }
  }

  greasedHogs = () => {
    return hogs.filter(hog => hog.greased === true)
  }
  sortName = (passedHogs) => {
    return passedHogs.sort( function(a, b) {
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB)
          return -1
      if (nameA > nameB)
          return 1
      return 0
    }
  )}

  sortWeight = (passedHogs) => {
    return passedHogs.sort( function(a, b) {
    return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
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

  updateArray = () => {
    let hogsArray = hogs;
    if (this.state.greasedFilter){
      hogsArray = this.greasedHogs(hogsArray)
      if (this.state.sort === "Name") {
        hogsArray = this.sortName(hogsArray);
        }
      else if (this.state.sort === "Weight"){
        hogsArray = this.sortWeight(hogsArray);
      }
    } else {
      hogsArray = hogs;
      if (this.state.sort === "Name") {
        hogsArray = this.sortName(hogsArray);
        }
      else if (this.state.sort === "Weight"){
        hogsArray = this.sortWeight(hogsArray);
      }
    }
    return this.buildHogCards(hogsArray)
  }

  handleClick = (event) => {
    this.setState({
      selectedHog: event.target.dataset.selectedhogname,
    })
  }

  handleFilter = () => {
    let greasedVar = !this.state.greasedFilter
    this.setState({
      greasedFilter: greasedVar
    })
  }

  handleSelect =  (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label> Greased?
          <input className="filterButton" type="checkbox" checked={this.state.greased} onChange={this.handleFilter} />
        </label>
        <label> Sort
          <select value={this.state.sort} className="filterButton" onChange={this.handleSelect}>
            <option value=""></option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
        </label>
        <div className="ui grid container" >
          {this.updateArray()}
        </div>
        <HogDetails selectedHog={this.state.selectedHog}/>
      </div>
    )
  }
}

export default HogIndex;
