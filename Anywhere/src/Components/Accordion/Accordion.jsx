import React, { useEffect, useState } from 'react'
import './Accordion.css'
import image1 from '../../Images/homepage/image1.jpg'
import image2 from '../../Images/homepage/image2.jpg'
import image3 from '../../Images/homepage/image3.jpg'
import image4 from '../../Images/homepage/image4.jpg'
import image5 from '../../Images/homepage/image5.jpg'
import image7 from '../../Images/homepage/image7.jpg'
import image8 from '../../Images/homepage/image8.jpg'
import leftarrow from '../../Images/leftarrow.png'
import rightarrow from '../../Images/rightarrow.png'


export default function Accordion() {
    const [image, setImage] = useState(image1);
    let changeImg=()=>{
    if (image===image1)
            setImage(image2);
        else if (image===image2)
            setImage(image3);
        else if (image===image3)
            setImage(image4);
        else if (image===image4)
            setImage(image5);
        else if (image===image5)
            setImage(image7);
        else if (image===image7)
            setImage(image8);
        else if (image===image8)
            setImage(image1);
    }
    useEffect(()=>{
        const interval=setInterval(changeImg, 5000);
        return ()=>clearInterval(interval);
    });
  return (
    <div id="accordion">
        <img onClick={changeImg} id="toggle-left" src={leftarrow} alt="Here"></img>
        <img id="main-image" src={image} alt="Here"></img>
        <img onClick={changeImg} id="toggle-right" src={rightarrow} alt="Here"></img>
        <div id="upperdiv">
            <h1><pre>   Anywhere  </pre></h1>
            <h2><pre>                          you wanna go...</pre></h2>
            <div id="forsearch">
                <input type='text' placeholder='Search for places'></input>
                <button id="search-btn" type='search'> Search </button>
            </div>
        </div>
    </div>
  )
}
