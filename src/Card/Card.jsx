import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.descreption}</p>
        <img src="{props.image}"  alt="" />
        <button>{props.button}</button>
    </div>
  )
}

export default Card;
