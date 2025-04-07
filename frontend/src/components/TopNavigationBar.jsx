import React from 'react';
import { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import SearchBadge from './SearchBadge';

const TopNavigationBar = ({ topics, favourites, getTopicsByPhotos, getPhotosBySearch }) => {
  const [isOpen, setIsOpen] = useState(false); // search bar
  const [searchResults, setSearchResults] = useState("");

  const hasFavourites = Object.keys(favourites).some((status) => status); // Check if at least one favourite in the object

  const handleInputChange = (event) => {
    setSearchResults(event.target.value);
  }

    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      getPhotosBySearch(searchResults);
    }
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"><a href='/'>PhotoLabs</a></span>
      <TopicList topics={topics} getTopicsByPhotos={getTopicsByPhotos} />
      <div className='top-nav-bar-right'>
        <div className='search-container'>
          {isOpen && (
            <div className='search-bar'>
              <input
              type="text"
              value={searchResults}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder='Search...' />
            </div>
          )}
            <SearchBadge isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        <FavBadge isFavPhotoExist={hasFavourites}/>
      </div>
    </div>
  )
}

export default TopNavigationBar;