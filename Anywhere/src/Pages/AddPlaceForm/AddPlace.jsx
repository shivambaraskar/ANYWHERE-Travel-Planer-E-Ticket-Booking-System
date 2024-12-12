import React, {useState } from 'react'
import './AddPlace.css'
import axios from 'axios'
import plc from '../../Images/register-page.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import {useNavigate } from 'react-router-dom'

export default function LoginSignup(props) {

  const [placedata, setPlacedata] = useState({name:'', location:'', rating:'', price:'', image:'',  description:''});
  const navigate = useNavigate();
  let userState = (localStorage.userData) ? true : false;

  const fetchData = (e)=>{
    let {name, value} = e.target;
    setPlacedata({...placedata,[name]:value});
  }
  const submitData = async(e)=>{
    e.preventDefault();
    if(userState===true) {
      let res = await axios.post('http://localhost:4012/api/register-place', placedata);
      console.log(res);
      if(res){
          alert("Place Registered Successfully");
          navigate("/");
      }
      else{
          alert("Error : Unable to register")
      }
    }else{
      alert("Error : Login first to register you place");
    }
  }

  return (
    <>
    <Navbar/>
    <h1>Register For That Aweasome Holiday Destination Here. . .</h1>
    <div id="main-box">
      <div id="login-form" className='reg'>
        <div id="left">
            <img src={plc} alt="place Image" />
        </div>
        <div id="upperleft">
          <h1>Register</h1>
          <h2>Add Your Place Details</h2>
        </div>
        <div id="right">
          <div id="form">
            <p>Enter Place Name</p>
            <input type="text" id="plcname" name="name" value={placedata.name} placeholder="Enter name of the place" onInput={fetchData} required/>
            <p>Enter Location</p>
            <input type="text" id="location" name="location" value={placedata.location} placeholder="Enter Location" onInput={fetchData} required/>
            <p>Place Ticket Price Per Person</p>
            <input type="text" id="tick-price" name="price" value={placedata.price} placeholder="Ticket Price per person" onInput={fetchData} required/>
            <p>Description For The Place</p>
            <textarea type="text" id="descrip" name="description" value={placedata.description} placeholder="Enter Some Details & Description of The Place" onInput={fetchData} required/>
            <p>Upload Image File</p>
            <input type="file" id="plcImage" name="image" placeholder="Upload Image" onInput={fetchData}/>
            <button type="submit" className="lowerbtn" id="submit-btn" onClick={submitData}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
