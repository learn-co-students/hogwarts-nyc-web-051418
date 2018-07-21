import React from 'react'

const OptionNav = props => {
    return (
      <div>
        <label> Greased?
          <select 
            value={props.greased} 
            className="filterButton" 
            onChange={(e) => props.handleFilter("greasedFilter", e)}
          >
            <option value="null">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
      </label>
        <label> Sort
          <select 
            value={props.sort} 
            className="filterButton" 
            onChange={(e) => props.handleFilter("sort", e)}
          >
            <option value=""></option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
        </label>
      </div>
    )
}

export default OptionNav;
