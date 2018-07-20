import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import OptionNav from './OptionNav'
import HogIndex from './HogIndex';
import hogs from '../porkers_data';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      greasedFilter: false,
      sort: "",
    }
  }

  //optionNAV functionality
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
    return hogsArray
  }

  //optionNav FUNCTIONALITY
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
      <div className="App">
          <Nav />
          <OptionNav
            handleSelect={this.handleSelect}
            handleFilter={this.handleFilter}
            sort={this.state.sort}
            greased={this.state.greased}
          />
          <HogIndex
            array={this.updateArray()}
            handleSelect={this.handleSelect}
          />
      </div>
    )
  }
}

export default App;
