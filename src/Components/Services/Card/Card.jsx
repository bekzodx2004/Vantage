import React, { Component } from 'react'
import './Card.scss'
export default class Card extends Component {
  render() {
    return (
      <div className="services__block__card">
        <div>
            <img src={this.props.img} alt="" />
            <div>
                <h5>{this.props.h5}</h5>
                <h3>{this.props.h3}</h3>
            </div>

        </div>
        <p>{this.props.p}</p>
      </div>
    )
  }
}
