import React, { Component } from 'react'
import Card from "./Card"
import UUID from "uuid"
export default class CardIndex extends Component {
  cardGenerator = () => {
    return this.props.pigs.map(pig => {
      return (
        <div key={UUID()}>
          <Card pig={pig} hide={this.props.hide}/>
        </div>
      )
    })    
  }
  render() {
    return (
      <div className="ui grid container">
        {this.cardGenerator()}
      </div>
    )
  }
}
