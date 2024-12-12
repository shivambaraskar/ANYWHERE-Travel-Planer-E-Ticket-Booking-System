import React, {useState } from 'react'
import './LoginSignup.css'
import axios from 'axios'
import friends from '../../Images/login-image.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import {json,useNavigate} from 'react-router-dom'

export default function LoginSignup(props) {
  const [active, setActive] = useState(props.act);
  const navigate = useNavigate();
  const [login, setLogin] = useState({username:'', password:''});
  const [data, setData] = useState({username:'', email:'', number:'',  password:''});

  const fetchLogin = (e)=>{
    let {name, value} = e.target;
    setLogin({...login,[name]:value});
  }
  const fetchData = (e)=>{
    let {name, value} = e.target;
    setData({...data,[name]:value});
  }
  const submitData = async(e)=>{
    e.preventDefault();
    let res = await axios.post('http://localhost:4012/api/signup', data);
    console.log(res.data); 
    if(res.status===200){
      alert("Signed Up Successfully");
      navigate("/login");
  }
  else{
      alert("Error : Unable to SignUp, User already exists")
  }
  }
  const loginUser = async(e)=>{
    e.preventDefault();
    try{
      let res = await axios.post('http://localhost:4012/api/login', login);
      console.log(res.data); 
      localStorage.setItem('userData', JSON.stringify(res.data))
      if(res.status===200){
        alert("Login Successful");
        navigate("/");
      }
      else{
        alert("Error : Unable to Login, Invalid Credentials")
      }
    }catch{
      alert("Error : Unable to Login")
    }
  }

  return (
    <>
    <Navbar/>
    <div id="main-box">
      <div id="login-form">
        <div id="left">
            <img src={friends} alt="friends" />
        </div>
        <div id="upperleft">
          <h1>Login/Signup</h1>
          <h2>unlock the awesome experiences</h2>
          <h2>& door to your dreams</h2>
        </div>
        <div id="right">
          <div id="heading">
            <button onClick={()=>{setActive('signup')}} className='upperbtn' id="signup" style={{backgroundColor: (active==='signup') ?'Gold':'#eeeeee'}}>Signup</button>
            <button onClick={()=>{setActive('login')}} className='upperbtn' id="login" style={{backgroundColor: (active==='login') ?'Gold':'#eeeeee'}}>Login</button>
          </div>
          <div id="form">
            {(active === 'signup')? 
            <>
              <p>Enter Your Name</p>
              <input type="text" id="name" name="username" value={data.username} placeholder="Enter your name" onInput={fetchData} required/>
              <p>Enter Your Email</p>
              <input type="email" id="email" name="email" value={data.email} placeholder="Enter your Email" onInput={fetchData} required/>
              <p>Enter Your Mobile Number</p>
              <input type="phone" id="number" name="number" value={data.number} placeholder="Enter your Mobile No." onInput={fetchData} required/>
              <p>Create A Password</p>
              <input type="password" id="new-password" name="password" value={data.password} placeholder="Enter Password" onInput={fetchData} required/>
              <button type="submit" className="lowerbtn" id="submit-btn" onClick={submitData}>Submit</button>
              <p id='placelink'><Link to="/register-place" >Register Your Place</Link></p>
            </>:
            <>
              <h1>Login</h1>
              <p>Enter Your Mobile/Email</p>
              <input type="email" id="username" name="username" value={login.username} placeholder="Enter Email/Mobile No." onInput={fetchLogin} required/>
              <p>Password</p>
              <input type="password" id="password" name="password" value={login.password} placeholder="Enter Password" onInput={fetchLogin} required/>
              <button type="login" className="lowerbtn" id="login-btn" onClick={loginUser}>Login</button>
            </>
            }
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
