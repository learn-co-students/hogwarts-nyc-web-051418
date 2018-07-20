import React from 'react'


const OptionNav = props => {
    return (
      <div>
        <label> Greased?
          <input className="filterButton" type="checkbox" checked={props.greased} onChange={props.handleFilter} />
        </label>
        <label> Sort
          <select value={props.sort} className="filterButton" onChange={props.handleSelect}>
            <option value=""></option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
        </label>
      </div>
    )
}

export default OptionNav;
