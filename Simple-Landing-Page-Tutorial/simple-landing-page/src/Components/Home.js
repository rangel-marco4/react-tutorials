import React from 'react'
import Navbar from './Navbar.js';
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='banner background image' />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your favorite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Healthy switcher chefs do all the prep work, like peeling,
            chopping & marinating, so you can cook a fresh meal.
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt='home banner image' />
        </div>
      </div>
    </div>
  )
}

export default Home;