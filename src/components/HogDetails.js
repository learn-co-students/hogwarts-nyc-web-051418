import React, { Component } from 'react';
import hogs from '../porkers_data';


class HogDetails extends Component {
  
  buildHogDetails = () => {
    if (this.props.selectedHog === "") {
      return null
    }
    let hog = hogs.find((hog) => hog.name === this.props.selectedHog)
    return (
      <div>
        <h1>{hog.name}</h1>
        <p>Specialty: {hog.specialty}</p>
        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] }</p>
        <p>Highest medal achieved: {hog['highest medal achieved'] }</p>
      </div>
    )

  }

  render() {
    return (
      <div>
        {this.buildHogDetails()}
      </div>
    )
  }
}

export default HogDetails;
