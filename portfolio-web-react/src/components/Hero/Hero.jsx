import React from 'react'
import './Hero.css'
import profile_photo from '../../assets/profile_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_photo} alt="" width={500}/>
      <h1><span>I am Aachal Thaware,</span> Frontend developer based in USA.</h1>

      <p>I am a frontend developer from california, USA with 2 years of experience in some start-up companies like code alpfa.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink  className='anchor-link' offset={50}href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  )
}

export default Hero
