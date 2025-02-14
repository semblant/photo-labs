import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ topics, favourite }) => {
  const hasFavourites = Object.keys(favourite).some((status) => status); // Check if at least one favourite in the object

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={hasFavourites}/>
    </div>
  )
}

export default TopNavigationBar;