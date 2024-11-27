import React from 'react';

import './AboutUs.css';

import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="Elegant G Letter" />
    </div>

    <div className="app__aboutus-content flex__center"> 
      {/* About Section */}
      <div className="app_aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="Decorative Icon" className='spoon__image' />
        <p className="p__opensans">
          At Planova, we specialize in creating unforgettable events. From corporate galas , concerts , food events , standup we turn your dreams into reality with meticulous planning, creative designs, and flawless execution.
        </p>
        <button type='button' className='custom__button'>
          Learn About Us
        </button>
      </div>

      {/* Image Section */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Event Décor" />
      </div>

      {/* History Section */}
      <div className="app_aboutus-content_history">
        <h1 className="headtext__cormorant">Our Journey</h1>
        <img src={images.spoon} alt="Decorative Icon" className='spoon__image' />
        <p className="p__opensans">
          With years of experience and a passion for perfection, we have built a legacy of crafting events that leave lasting impressions. Every event tells a story—let us tell yours with style and elegance.
        </p>
        <button type='button' className='custom__button'>
          Explore Our Journey
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
