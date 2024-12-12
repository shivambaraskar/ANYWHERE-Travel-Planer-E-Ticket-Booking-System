import React from 'react'
import './Destination.css'

export default function Destination(props) {
  return (
    <div id="destination">
        <div id="desimgdiv">
            <img src={require('../../Images/cities/'+props.image)} alt="item"/>
        </div>
        <div id='name-cont'>
            <h3>{props.location}</h3>
        </div>
    </div>
  )
}
