import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TwitterIcon from '../images/icon-twitter.svg'
import FacebookIcon from '../images/icon-facebook.svg'
import LinkedInIcon from '../images/icon-linkedIn.svg'
import InstagramIcon from '../images/icon-instagram.svg'
import PhoneIcon from '../images/icon-phone.png'
import CartIcon from '../images/icon-cart.png'
import './header.scss'

const header = () => {
  return (
    <header className="site-header">
      <div className="site-header-top-bar">
        <div className="site-header-top-bar-tel">
          <Link to="tel:0800 195 4255"><img src={PhoneIcon} alt="Phone" /><span>0800 195 4255</span></Link>
        </div>
        <div className="site-header-top-bar-social">
          <ul>
            <li><img src={TwitterIcon} alt="Twitter" /></li>
            <li><img src={FacebookIcon} alt="Facebook" /></li>
            <li><img src={LinkedInIcon} alt="LinkedIn" /></li>
            <li><img src={InstagramIcon} alt="Instagram" /></li>
          </ul>
        </div>
      </div>
      <div className="site-header-bottom-bar">
        <div className="site-header-menu">
          <i className="fas fa-bars"></i>
        </div>
        <div className="site-header-logo">
          <StaticImage
            src="../images/gopak-logo.png"
            width={155}
            quality={37}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Gopak"
          />
        </div>
        <div className="site-header-cart">
          <Link className="site-header-cart-icon" to="/cart"><img src={CartIcon} alt="Cart" /></Link>
        </div>
      </div>
    </header>
  )
}

export default header
