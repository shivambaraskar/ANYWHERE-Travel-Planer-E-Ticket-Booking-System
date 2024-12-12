import React, { useState } from 'react'
import axios from 'axios'
import './TicketCart.css'
import refresh from '../../Images/refresh.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js'
import CartItem from '../../Components/CartItem/CartItem'

export default function TicketCart() {
  
  let userState = (localStorage.userData) ? true : false;
  
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  let user;
  if (localStorage.userData) {
    user = localStorage.getItem('userData');
    user = JSON.parse(user); 
  }
  else{
    user = {thisUser:{name: null, email: null}};
  }
  let username = user.thisUser.name;
  let useremail = user.thisUser.email;

  const fetchData = async () =>{
    try{
      const res = await axios.get('http://localhost:4012/api/cart');
      setCartList(res.data);
      console.log(res.data); 
    }catch{
      alert("Error : Unable to get items");
    }
  }

  let subTotal = () => {
    let total = 0;
    if(userState===true){
      fetchData();
      if(cartList.length!==0){
        cartList.map((item) => {
          total += parseInt(item.price)*(item.quantity);
          return total;
        })
      setCartTotal(total)
      }
    }else{
      setCartTotal(0);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  const processPayment = async(e)=>{
    e.preventDefault();
    if(userState===true){
      let data = cartList.map((place) =>({
        name: place.name,
        price: place.price,
        username: username,
        useremail: useremail,
        subtotal: cartTotal
      }))
      console.log(data);
      try{
        let res = await axios.post('http://localhost:4012/api/payment', data);
        const stripe = await loadStripe("pk_test_51PIAJDSHa3e3STR9SWdcaoJFbWqkrxFaZyzkpI7wJ8ax4c90rA9x7UOuSHtAmc78IrHMfLsdotbShfliUoo6Rjq400eTg7CLK4")
        const session = await res.json();
        const result = stripe.redirectToCheckout({
          sessionId:session.id
        });
        console.log(res.data); 
        if(res.status===200 && result.success){
          alert("Payment Successfull");
          navigate("/");
        }
        else{
          alert("Payment Failed");
        }
      }catch(err){
        alert("Error : Payment Failed");
      }
    }else{
      alert("Error : You must login first");
    }
  }

  return (
    <div id="cart-items">
      <Navbar/>
      <h1>Go Grab Your Dreams</h1><hr/>
      <h2>Your Selected places . . .</h2>
      {
      (cartList.length!==0 && userState===true) ? (<>{cartList.map(item => (
          <CartItem id={item.id} name={item.name} location={item.location} price={item.price} image={item.image} quantity={item.quantity}/>
        ))}</>) : (<>
          <h1>The Cart Is Empty . . . </h1>
          <h3>Add some places to visit . . . </h3>
          <h3>Add some places to visit . . . </h3>
          <h3>Add some places to visit . . . </h3>
          <h3>Add some places to visit . . . </h3>
          <h3>Add some places to visit . . . </h3>
        </>)}
        <div className='right-box' id='rightBox'>
          <h3> Your Net Cart Value</h3>
            <p> Subtotal</p>
            <p id="total-price"> &#x20b9; {cartTotal}/-</p>
            <button id="refresh" onClick={subTotal}><img src={refresh} alt='refresh'/></button>
            <button id="checkOut" onClick={processPayment}> Proceed To Pay </button>
            <p><Link> Explore More </Link></p>
          </div>
      <Footer/>
    </div>
  )
}
