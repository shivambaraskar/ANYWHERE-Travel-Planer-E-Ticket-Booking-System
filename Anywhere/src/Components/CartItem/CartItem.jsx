import React from 'react'
import './CartItem.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

  export default function CartItem(props) {

    const [count, setCount] = useState(props.quantity);
    console.log('caount value',count)

    const stepUp = () => {
      setCount(count+1);
      updateCart(count+1);
    };

    const stepDown = () => {
      let x = (count>1) ? (count - 1) : count;
      setCount(x);
      updateCart(count-1);
    };

    const navigate = useNavigate();
    let showDesc=() => {
        navigate(`/description/${props.id}`);
    };

    let updateCart = async(count) =>{
      let data = {
        id: props.id,
        quantity: count
      };
      try{
        let res = await axios.post('http://localhost:4012/api/cartItem', data);
        console.log(res.data); 
        if(res.status===200){
          alert("Quantity Updated Successfully");
        }
        else{
          alert("Unable to update quantity");
        }
      }catch{
        alert("Error : Unable to update quantity");
      }
    }

    let deleteItem = async (item) => {
      try{
        const res = await axios.delete('http://localhost:4012/api/cart', {params: {id: item}});
        console.log(res.data); 
        if(res.status === 200)
          console.log("Item deleted successfully");
        window.location.reload();
      }catch(err){
        console.log("Error : unable to delete");
      };
    };

  return (
    <div id="cart-item">
      <div id="ticketimgdiv">
            <img src={require('../../Images/places/'+ props.image)} alt="place"/>
        </div>
        <div id='ticket'>
          <div id="info">
            <p id="loc">{props.location}</p>
            <h3>{props.name}</h3>
            <div id='quantity'>
              <button onClick={stepDown} id='decrease'> - </button>
              <div>
                <span> {count} </span>
              </div>
              <button onClick={stepUp} id='increase'> + </button>
            </div>
          </div>
          <div id='action'>
            <div id="price">
                <p>Ticket Total&nbsp;<span id="rupees"> &#x20b9;</span>{props.price*count}</p>
            </div>
            <button onClick={showDesc} id='edit-btn'>Edit</button>
            <button onClick={()=>deleteItem(props.id)} id='remove-btn'>Remove</button>
          </div>
        </div>
    </div>
  )
}