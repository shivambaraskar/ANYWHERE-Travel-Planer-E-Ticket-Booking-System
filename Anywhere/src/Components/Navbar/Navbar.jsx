import './Navbar.css'
import React, {useState, useEffect } from 'react'
import searchicon from '../../Images/search-icon.png'
import ticket from '../../Images/ticket-icon.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [status, setStatus] = useState(null);
  
  useEffect(() => {
      let data = localStorage.getItem('userData');
      let state =  JSON.parse(data);
      setStatus(state);
    }, [])

    let remove =()=>{
      localStorage.clear('userData');
      window.location.reload();
      setStatus(null);
  } 
  return (
    <div className='nav'>
      <div id='navd1'>
        <div id="nav1">
          <div id="nav-left">
            <h1> Anywhere </h1>
            <input type='text' placeholder='Search anywhere' />
            <img src={searchicon} alt="search"></img>
          </div>
          <div id="nav-right">
            <ul>
              {
              (status) ? (<><h4> {(status.thisUser.name).toUpperCase()} </h4>
              <li><button><Link to="/" onClick={remove} className='all-links'> Logout </Link></button></li></>) :
              (<><li><Link to="/signup" className='all-links'> Sign up </Link></li>
              <li><button><Link to="/login" className='all-links'> Login </Link></button></li></>)
              }
              <li><Link to="/cart"><img src={ticket} alt="tickets"></img></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="nav2">
        <div id="nav2-links">
          <ul id="ul-1">
            <li onClick={()=>{setActive("Home")}}><Link to="/" id="home-link" className='all-links'> Home </Link></li>
            <li onMouseEnter={()=>{setActive("Explore")}}> Explore 
            {(active==='Explore')?
            <>
              <ul onMouseLeave={()=>setActive("Home")} className="ul-2">
                <li>Culture & Heritage</li>
                <li>Zoo & Aquariums</li>
                <li>Water Activities</li>
                <li>Sunset Points & Beaches</li>
                <li>Outdoor & Sports</li>
                <li>Events & Shows</li>
                <li>Food & Cafes</li>
                <li>Cruise Party</li>
                <li>Stay Hotels</li>
              </ul>
            </>:<></>}
            </li>
            <li onMouseEnter={()=>{setActive("SearchPlace")}}> Search By Place 
            {(active==='SearchPlace')?
            <>
              <ul onMouseLeave={()=>setActive("Home")} className="ul-2">
                <li>Asia</li>
                <li>Europe</li>
                <li>America</li>
                <li>Foreign Trip</li>
                <li>Short Trip</li>
                <li>Inside India</li>
              </ul>
            </>:<></>}
            </li>
            <li onMouseEnter={()=>{setActive("PlanTour")}}> Plan Your Tour 
            {(active==='PlanTour')?
            <>
              <ul onMouseLeave={()=>setActive("Home")} className="ul-2">
                <li>Explore Culture & Heritage</li>
                <li>National Parks/Safari</li>
                <li>Nature/Hill Stations</li>
                <li>Water Activities</li>
                <li>Outdoor & Sports</li>
                <li>Cruise Parties</li>
              </ul>
            </>:<></>}
            </li>
            <li onMouseEnter={()=>{setActive("AttractionTickets")}}> Attraction Tickets 
            {(active==='AttractionTickets')?
            <>
              <ul onMouseLeave={()=>setActive("Home")} className="ul-2">
                <li>Theme Parks & Gardens</li>
                <li>Water Parks</li>
                <li>Sunset Points</li>
                <li>Zoo & Aquariums</li>
                <li>Indoor/Outdoor Games</li>
                <li>Live Events & Shows</li>
                <li>Movies Shows/Theater</li>
              </ul>
            </>:<></>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
