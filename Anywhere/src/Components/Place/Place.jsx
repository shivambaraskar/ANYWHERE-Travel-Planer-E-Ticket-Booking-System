import React from 'react'
import './Place.css'
import Star from '../../Images/staricon.png'
import { useNavigate } from 'react-router-dom'

export default function Place(props) {
    const navigate = useNavigate();
    let showDesc=() => {
        navigate(`/description/${props.id}`);
    };
    return (
        <div className='place'>
        <div id="imgdiv">
            <img src={require('../../Images/places/'+props.image)} alt="place"/>
        </div>
        <div className='lower-cont'>
            <p id="loc">{props.location}</p>
            <h3>{props.name}</h3>
            <div id="ratingdiv">
                <img src={Star} alt="rating"/>
                <p>{props.rating}</p>
            </div>
            <div id="price">
                <p>from <span id="rupees">&#x20b9;</span>{props.price}</p>
            </div>
            <button onClick={showDesc}id='explore'>Explore</button>
        </div>
    </div>
  )
}
