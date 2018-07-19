import React, {Component} from 'react'

class OptionNav extends Component {
	constructor (props) {
    super(props)
    this.state = {
      greasedFilter: false,
      sort: "",
    }
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
      </div>
	  )
  }
}

export default OptionNav;
