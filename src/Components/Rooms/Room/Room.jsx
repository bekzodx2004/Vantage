import React from 'react'
import './Room.scss'

const Room = (props) => {
  return (
    <div className="rooms__card">
        <img src={props.img} alt="" />
        <h5>{props.h5}</h5>
        <h4>{props.type}</h4>
        <h3>{props.roomType}</h3>

    </div>
  )
}

export default Room