import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import CardIndex from './CardIndex'
import FilterSearch from './FilterSearch'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pigs: hogs
    }
  }

  hideCard = (event) => {
      console.log(event.target.value)

      const unHiddenHogs=[...this.state.pigs].filter(hog=>{
         return hog.name !== event.target.value
      })
      this.setState({
        pigs: unHiddenHogs
      })
  }

  onFilterSearch = (event) => {
    const trigger = event.target.value;
    
    if (trigger === 'All') {
      this.setState({
        pigs: hogs
      })
    } else if (trigger === 'Name') {
      function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      
      const hogsByName = [...hogs].sort(compare)


      this.setState({
        pigs: hogsByName
      })
    } else if (trigger === 'Weight') {
      let weight ='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      function compare(a,b) {
        if (a[weight] < b[weight])
          return -1;
        if (a[weight] > b[weight])
          return 1;
        return 0;
      }
      
      const hogsByWeight = [...hogs].sort(compare)

      this.setState({
        pigs: hogsByWeight
      })
    } else if (trigger === 'Greased') {

      const hogsFilterByGreased = [...hogs].filter(hog=>{
          return hog.greased === true
      })
      this.setState({
        pigs: hogsFilterByGreased
      })
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <FilterSearch click={this.onFilterSearch}/>
        <CardIndex pigs={this.state.pigs} hide={this.hideCard}/>
      </div>
    )
  }
}

export default App;
