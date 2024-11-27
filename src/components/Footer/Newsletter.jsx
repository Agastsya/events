import React from "react";

import "./Newsletter.css";

import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter" >
    <div className="app__newsletter-heading">
      <SubHeading title="Review Us" />
      <h1 className="headtext__cormorant">FeedBack</h1>
      <p className="p__opensans"></p>
    </div>
    <div className="app__newsletter-input flex__center">
     
      <button type="button" className="custom__button">
        Click Here
      </button>
    </div>
  </div>
);

export default Newsletter;
