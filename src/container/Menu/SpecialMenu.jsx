import React from 'react';

import './SpecialMenu.css';

import { SubHeading } from '../../components';


const events = [
  {
    title: 'Holi Festival Celebration',
    date: 'March 28, 2024',
    location: 'Downtown Park, Cityville',
    description: 'Celebrate Holi with vibrant colors, music, and dance. Join us for an unforgettable day of fun and festivities.',
    image: 'path_to_holi_image',
  },
  {
    title: 'Comedy Night Extravaganza',
    date: 'April 5, 2024',
    location: 'Laughter Arena, Townsquare',
    description: 'Laugh out loud with the best comedians in the business. An evening filled with humor and joy.',
    image: 'path_to_comedy_image',
  },
  {
    title: 'Kids Fun Carnival',
    date: 'April 15, 2024',
    location: 'Adventure Park, Greenfield',
    description: 'A day full of rides, games, and surprises for kids of all ages. Bring your family and enjoy!',
    image: 'path_to_kids_image',
  },
];

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="services">

    {/* Title Section */}
    <div className="app__specialMenu-title">
      <SubHeading title={"Services That Make Every \nOccasion Special"} />
      <h1 className="headtext__cormorant">Our Events</h1>
    </div>

    {/* Event Cards Section */}
    <div className="app__specialMenu-menu">
      <div className="event-cards flex__center">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            
            <div className="event-card__content">
              <h2 className="event-card__title">{event.title}</h2>
              <p className="event-card__date">Date: {event.date}</p>
              <p className="event-card__location">Location: {event.location}</p>
              <p className="event-card__description">{event.description}</p>
              <button className="event-card__button">Get Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Discover More Button */}
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">Discover More</button>
    </div>

  </div>
);

export default SpecialMenu;
