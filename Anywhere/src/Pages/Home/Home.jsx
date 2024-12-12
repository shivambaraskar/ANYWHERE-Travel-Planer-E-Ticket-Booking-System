import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Accordion from '../../Components/Accordion/Accordion'
import PlacesRow from '../../Components/PlacesRows/PlacesRow'
import DestinationRow from '../../Components/DestinationRow/DestinationRow'

export default function Home() {
  return (
    <>
    <Navbar/>
      <div id="home">
        <Accordion/>
        <div className="row" id="row4">
          <DestinationRow topic="Top Cities To Visit"/>
        </div>
        <div className="row" id="row1">
          <PlacesRow topic="Top Visited Places" subvalue="topvisited"/>
        </div>
        <div className="row" id="row5">
          <PlacesRow topic="New Added Places" subvalue="newaddedplaces"/>
        </div>
        <div className="row" id="row2">
          <PlacesRow topic="Top Experiences" subvalue="topexperiences"/>
        </div>
        <div className="row" id="row3">
          <PlacesRow topic="More To Explore" subvalue="exploremore"/>
        </div>
      </div>
        <Footer/>
    </>
  )
}
