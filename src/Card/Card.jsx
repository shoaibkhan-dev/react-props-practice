import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.details}</p>
        <button>{props.button}</button>
    </div>
  )
}

export default Card;
