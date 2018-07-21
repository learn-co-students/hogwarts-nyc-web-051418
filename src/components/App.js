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
      greasedFilter: null ,
      sort: "",
    }
    this.changeKey()
  }

  // goes to hogs array and makes weight key more readable
  changeKey = () => {
    const newKey = 'weight';
    const oldKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';

    hogs.forEach((hog) => {
      Object.defineProperty(hog, newKey,
        Object.getOwnPropertyDescriptor(hog, oldKey));
      delete hog[oldKey];
    })
  }  

  //optionNAV functionality
  sortName = (passedHogs) => {
    return passedHogs.sort(
      (a, b) => a["name"].localeCompare(b["name"]))
      // function(a, b) {
      // var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      // if (nameA < nameB)
      //     return -1
      // if (nameA > nameB)
      //     return 1
      // return 0
      // })
  }

  sortWeight = (passedHogs) => {
    return passedHogs.sort( function(a, b) {
    return a["weight"] - b["weight"]
    })
  }

  sortedHogs = (hogsArray) => {
    switch(this.state.sort) {
      case "Name":
        return hogsArray = this.sortName(hogsArray);
      case "Weight":
        return hogsArray = this.sortWeight(hogsArray);
      default:
        return hogsArray
    }
  }

  cleanValue = value => value === "true" ? true : false

  filterGreasedHogs = (hogs, value) => hogs.filter( hog => hog.greased === this.cleanValue(value))
  
  greasedHogs = () => this.state.greasedFilter === null ? 
      hogs 
   : 
      this.filterGreasedHogs(hogs,this.state.greasedFilter)
  
  // filtered and sorted hogs array passed to HogIndex 
  updateArray = () => this.sortedHogs(this.greasedHogs())

  //optionNav FUNCTIONALITY
  handleFilter = (action, event) => 
    this.setState({
      [action]: event.target.value
    })

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
