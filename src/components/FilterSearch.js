import React, { Component } from 'react'

export default class FilterSearch extends Component {

  render() {
    return (
      <div>
        <label>Sort By: </label>
            <input type="button" value="All" onClick={this.props.click}/>
            <input type="button" value="Name" onClick={this.props.click}/>
            <input type="button" value="Weight" onClick={this.props.click}/>
          <label>Filter: </label>
            <input type="button" value="Greased" onClick={this.props.click}/>
        <br/><br/>
      </div>
    )
  }
}
