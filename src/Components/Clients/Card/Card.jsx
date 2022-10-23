import React from 'react'

const Card = (props) => {
  return (
  
    <div className="clients__card">
        <h2>{props.k}</h2>
        <h5>{props.tur}</h5>
    </div>
  )
}

export default Card