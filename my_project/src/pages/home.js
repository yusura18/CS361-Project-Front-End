import React, { useState } from 'react';
import ImageCarousel from '../components/imageCarousel';
import axios from 'axios';
import baseURL from '../axios';
import "../components/carousel.css";


  
  const Home = () => {
  
    return (
        <div className="homeDiv">
            <h2 className="homeHeader">Website Title (TBD)</h2>
            <ImageCarousel />
        </div>

    );
  }
  
  export default Home;
