import React from 'react'
import './PlaceDesc.css'
import axios from 'axios'
import LocLogo from '../../Images/location-logo.png'
import Star from '../../Images/staricon.png'
import GiftImage from '../../Images/gift-logo.png'
import { Link } from 'react-router-dom'


export default function PlaceDesc(props) {

  let userState = (localStorage.userData) ? true : false;

  let addCart = async(e) =>{
    e.preventDefault();
    let place = {
      id: props.id,
      name: props.name,
      location: props.location,
      price: props.price,
      image: props.image,
      quantity: 1
    }
    console.log(place);
    if(userState===true) {
      try{
        let res = await axios.post('http://localhost:4012/api/cart', place);
        console.log(res.data); 
        if(res.status===200){
          alert("place added to cart Successfully");
        }
        else{
          alert("Unable to add to cart")
        }
      }catch{
        alert("Error : Unable to add to cart")
      }
    }else{
      alert("Please login to add tickets to cart"); 
    }
  }

  return (
    <div id='PlaceDesc'>
      <div className='desc-heading'>
        <h1 id="placeName">{props.name}</h1>
        <div id="sub-info">
          <img src={LocLogo} alt="Loc: " />
          <p id="location">{props.location}</p>
          <img src={Star} alt="Rating: " />
          <p id="rate">{props.rating}</p>
        </div>
      </div>
      <div className="place-images">
        <div id="left-images">
          <img src={require('../../Images/places/'+props.image)} alt="place" />
          <img src={require('../../Images/places/'+props.image)} alt="place" />
          <img src={require('../../Images/places/'+props.image)} alt="place" />
          <img src={require('../../Images/places/'+props.image)} alt="place" />
        </div>
        <div id="center-image">
          <img src={require('../../Images/places/'+props.image)} alt="place" />
          <button id="explore-more"> More Images </button>
        </div>
      </div>
      <div className="place-desc">
        <div className="left-desc">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <div className='right-box'>
        <h3>{props.name}</h3>
          <p id="loc">{props.location}</p>
          <p> Starting from </p>
          <p id="ticket-price">&#x20b9; {props.price}/-</p>
          <button id="check-aval"> Check Availability </button>
          <button id="add-cart" onClick={addCart}> Add To Cart </button>
          <div id="gift-link">
            <img src={GiftImage} alt=""/>
            <p><Link>  Give it as a gift </Link></p>
          </div>
          <p><Link> Explore More </Link></p>
        </div>
      </div>
    </div>
  )
}
