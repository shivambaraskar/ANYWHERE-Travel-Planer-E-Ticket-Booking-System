import React, { useState } from 'react'
import './DestinationRow.css'
import Destination from '../Destination/Destination'
import leftarrow from '../../Images/leftarrow.png'
import rightarrow from '../../Images/rightarrow.png'
import cities from '../../cities.json'

export default function DestinationRow(props) {
  const [scroll, setScroll] = useState(0);
  // totalScroll = (scrollId === 'left') ? totalScroll-300 : totalScroll+300;
  return (
    <div id="destination-row">
        <h1>{props.topic}</h1><hr/>
        <img src={leftarrow} onClick={()=>{setScroll()}} className='sidewise' id="left-btn"/>
        <div id="row">
            <Destination location={cities[0].name} image={cities[0].image}/>
            <Destination location={cities[1].name} image={cities[1].image}/>
            <Destination location={cities[2].name} image={cities[2].image}/>
            <Destination location={cities[3].name} image={cities[3].image}/>
            <Destination location={cities[4].name} image={cities[4].image}/>
            <Destination location={cities[5].name} image={cities[5].image}/>
            <Destination location={cities[6].name} image={cities[6].image}/>
            <Destination location={cities[7].name} image={cities[7].image}/>
        </div>
        <img src={rightarrow} onClick={()=>{setScroll()}} className='sidewise' id="right-btn"/>
    </div>
  )
}