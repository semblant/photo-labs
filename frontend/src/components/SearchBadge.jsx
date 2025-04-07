import React from 'react';
import SearchIcon from './SearchIcon';
import '../styles/SearchBadge.scss'

const SearchBadge = ({isOpen, setIsOpen}) => {
  return (
      <div className="search-icon"  onClick={() => setIsOpen(!isOpen)}>
        <SearchIcon className="search-icon_svg"/>
      </div>
  );
};

export default SearchBadge;