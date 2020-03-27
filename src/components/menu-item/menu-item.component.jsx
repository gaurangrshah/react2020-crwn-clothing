import React from 'react';
import './menu-item.styles.scss';

// destructure expected props inline:
const MenuItem = ({ title, imageUrl, size }) => (
  // size is a string that helps set the class '.large'
  <div className={`${size} menu-item`}>
    <div
      // applies bckg-img default styles
      className='background-image'
      style={{
        // defines bckg-img dynamically
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
