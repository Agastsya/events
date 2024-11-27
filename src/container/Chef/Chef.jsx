import React from 'react';

import './Chef.css';

import {images} from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title={"Event Word"}/>

      <h1 className="headtext__cormorant">
      Taylor Swift: The Eras Tour 
      </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src ={images.quote} alt='quote'/>
          <p className="p__opensans">
          Genres: Country, Pop, Alternative, International | Language: English | Age: 5yrs+ | Duration: 4hrs
          </p>
        </div>
        <p className="p__opensans">
        Experience the magic of Taylor Swift's groundbreaking The Eras Tour at your local cinema with this spectacular worldwide broadcast of her sold-out concert.**  

Join Taylor as she takes you on a journey through her extraordinary career, performing hits from every era of her music, including Love Story, You Belong With Me, Shake It Off, Blank Space, All Too Well (10-Minute Version), and Anti-Hero.  

The show is a visual and emotional spectacle, featuring dazzling stage designs, intricate choreography, stunning costumes, and breathtaking special effects that bring each of Taylor's musical eras to life in an unforgettable way.  

This beautifully-filmed feature presentation will be directed by the renowned and visionary filmmaker, providing fans with a front-row seat to one of the most iconic tours in music history.
          </p>
        
      </div>

      <div className="app__chef-sign">
        <p>Taylor Swift</p>
        <p className="p__opensans">
          Singer
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
