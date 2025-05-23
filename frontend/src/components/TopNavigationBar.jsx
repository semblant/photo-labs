import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ topics, favourites, getTopicsByPhotos }) => {
  const hasFavourites = Object.keys(favourites).some((status) => status); // Check if at least one favourite in the object

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getTopicsByPhotos={getTopicsByPhotos} />
      <FavBadge isFavPhotoExist={hasFavourites}/>
    </div>
  )
}

export default TopNavigationBar;