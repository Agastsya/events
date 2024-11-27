import React from 'react';

import './Header.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app_wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Making Every Occasion Special" />

      <h1 className="app__header-h1">Your Vision, Our Creation</h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        From intimate gatherings to grand celebrations, we bring your dreams to life with flawless planning and seamless execution.
      </p>

      <button className="custom__button">
        Plan Your Event
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Event Planning Header" />
    </div>
  </div>
);

export default Header;
