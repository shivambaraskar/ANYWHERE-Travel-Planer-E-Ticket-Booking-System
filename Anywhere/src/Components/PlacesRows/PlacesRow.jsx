import React, { useState } from 'react'
import './PlacesRow.css'
import Place from '../Place/Place'
import leftarrow from '../../Images/leftarrow.png'
import rightarrow from '../../Images/rightarrow.png'
import places from '../../places.json'

export default function PlacesRow(props) {
  const [scroll, setScroll] = useState(0);
  return (
    <div id="place-row">
        <h1>{props.topic}</h1><hr/>
        <img src={leftarrow} onClick={()=>{setScroll()}} className='sidewise' id="left-btn"/>
        <div id="row">
        {/* <Place id={places.topvisited[0].id} name={places.topvisited[0].name} location={places.topvisited[0].location} image={places.topvisited[0].image} rating={places.topvisited[0].rating} price={places.topvisited[0].price}/> */}
            <Place id={places.topvisited[0].id} name={places.topvisited[0].name} location={places.topvisited[0].location} image={places.topvisited[0].image} rating={places.topvisited[0].rating} price={places.topvisited[0].price}/>
            <Place id={places.topvisited[1].id} name={places.topvisited[1].name} location={places.topvisited[1].location} image={places.topvisited[1].image} rating={places.topvisited[1].rating} price={places.topvisited[1].price}/>
            <Place id={places.topvisited[2].id} name={places.topvisited[2].name} location={places.topvisited[2].location} image={places.topvisited[2].image} rating={places.topvisited[2].rating} price={places.topvisited[2].price}/>
            <Place id={places.topvisited[3].id} name={places.topvisited[3].name} location={places.topvisited[3].location} image={places.topvisited[3].image} rating={places.topvisited[3].rating} price={places.topvisited[3].price}/>
            <Place id={places.topvisited[4].id} name={places.topvisited[4].name} location={places.topvisited[4].location} image={places.topvisited[4].image} rating={places.topvisited[4].rating} price={places.topvisited[4].price}/>
            <Place id={places.topvisited[5].id} name={places.topvisited[5].name} location={places.topvisited[5].location} image={places.topvisited[5].image} rating={places.topvisited[5].rating} price={places.topvisited[5].price}/>
            <Place id={places.topvisited[6].id} name={places.topvisited[6].name} location={places.topvisited[6].location} image={places.topvisited[6].image} rating={places.topvisited[6].rating} price={places.topvisited[6].price}/>
            <Place id={places.topvisited[7].id} name={places.topvisited[7].name} location={places.topvisited[7].location} image={places.topvisited[7].image} rating={places.topvisited[7].rating} price={places.topvisited[7].price}/>
            <Place id={places.topvisited[8].id} name={places.topvisited[8].name} location={places.topvisited[8].location} image={places.topvisited[8].image} rating={places.topvisited[8].rating} price={places.topvisited[8].price}/>
            <Place id={places.topvisited[9].id} name={places.topvisited[9].name} location={places.topvisited[9].location} image={places.topvisited[9].image} rating={places.topvisited[9].rating} price={places.topvisited[9].price}/>
            <Place id={places.topvisited[10].id} name={places.topvisited[10].name} location={places.topvisited[10].location} image={places.topvisited[10].image} rating={places.topvisited[10].rating} price={places.topvisited[10].price}/>
        </div>
        <img src={rightarrow} onClick={()=>{setScroll()}} className='sidewise' id="right-btn"/>
    </div>
  )
}
