import React, { Component } from 'react'
import UUID from "uuid"
export default class Card extends Component {
  constructor(props){
    super(props)
    this.state= {
      name: props.pig.name,
      greased: props.pig.greased,
      specialty: props.pig.specialty,
      weight:props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
      medal: props.pig['highest medal achieved'],
      front: true
    }
  }

  handleClick = (event) =>{
    this.setState({
      front: !this.state.front
    })
    console.log(this.state)
  }

  render() {
    return (
      <div key={UUID()} className="ui eight wide column card" >
        <div className="content">
          {this.state.name}
          <button value={this.state.name} onClick={this.props.hide}>hide</button>
        </div>
        <div className="image" onClick={this.handleClick}>
          {this.state.front ? 
            <img src={require(`../hog-imgs/${this.state.name.replace(/\s+/g,"_").toLowerCase()}.jpg`)} alt=""/>
            :
            <ul>
              <li>Greased: {this.state.greased.toString().toUpperCase()}</li>
              <li>Specialty: {this.state.specialty}</li>
              <li>Weight: {this.state.weight}</li>
              <li>Medals: {this.state.medal}</li>
            </ul>
          }
        </div>
      </div>
    )
  }
}
