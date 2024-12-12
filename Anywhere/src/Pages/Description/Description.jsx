import React from 'react'
import './Description.css'
import Navbar from '../../Components/Navbar/Navbar'
import PlaceDesc from '../../Components/PlaceDesc/PlaceDesc'
import Footer from '../../Components/Footer/Footer'
import places from '../../places.json'
import { useParams } from 'react-router-dom'

export default function Description() {
  const {placeId} = useParams();
  const reqPlace = places.topvisited.find((plc)=> placeId === plc.id);

  return (
    <div id="description">
        <Navbar/>
        <PlaceDesc id={reqPlace.id} name={reqPlace.name} location={reqPlace.location} rating={reqPlace.rating} price={reqPlace.price} image={reqPlace.image} 
        description={reqPlace.description}/>
        <Footer/>
    </div>
  )
}
