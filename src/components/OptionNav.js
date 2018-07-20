import React, {Component} from 'react'


class OptionNav extends Component {

  render () {
    return (
      <div>
        <label> Greased?
          <input className="filterButton" type="checkbox" checked={this.props.greased} onChange={this.props.handleFilter} />
        </label>
        <label> Sort
          <select value={this.props.sort} className="filterButton" onChange={this.props.handleSelect}>
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
