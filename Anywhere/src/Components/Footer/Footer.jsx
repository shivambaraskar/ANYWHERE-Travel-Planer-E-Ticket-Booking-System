import React from 'react'
import './Footer.css'
import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div id="footer">
        <h2>Anywhere</h2>
        <div id="contacts">
          <div className="foot-contact"><a href="https://github.com/shivambaraskar"><img src={github} alt="github"/></a></div>
          <div className="foot-contact"><a href="aqirt.org/contact/linkedin"><img src={linkedin} alt="linkedin"/></a></div>
          <div className="foot-contact"><a href="aqirt.org/contact/facebook"><img src={facebook} alt="facebook"/></a></div>
          <div className="foot-contact"><a href="aqirt.org/contact/instagram"><img src={instagram} alt="instagram"/></a></div>
          <div className="foot-contact"><a href="aqirt.org/contact/twitter"><img src={twitter} alt="twitter"/></a></div>
        </div>
        <div id="low-row">
          <div className='lower-row'>
            <ul>
              <li>Explore</li>
              <li>Travel Articles</li>
              <li>Write A Review</li>
              <li>Add A Place</li>
            </ul>
          </div>
          <div className='lower-row'>
            <ul>
              <li>Support</li>
              <li>Help</li>
              <li>Advertise</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='lower-row'>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Policies</li>
            </ul>
          </div>
        </div>
        <div id="lower">
          <p>anywhere.com, inc</p>
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/terms&conditions">Terms of Use</a>
        </div>
    </div>
  )
}
