import React from 'react';


import { useLocation, useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (

    <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)} >
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>

  );
}


export default MenuItem;
