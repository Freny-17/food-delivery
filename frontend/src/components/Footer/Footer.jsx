import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img  className='logoimg' src={assets.logo} alt="" />
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, velit unde non officia sed temporibus quae quos aut! Earum dolorem dicta explicabo itaque repellendus alias ad distinctio maxime facilis commodi!</p> */}
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1234567882</li>
                    <li>xyz@figgy.com</li>
                </ul>
            </div>
            {/* <hr /> */}
            <p className="footer-copyright">Copyright 2025 @ Figgy.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer