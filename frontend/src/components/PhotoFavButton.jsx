import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favourite, setFavourite } = props

  const handleClick = () => {
    console.log("clicked")
    setFavourite();
  }

  return (
    <button onClick={handleClick}>
      {!favourite && <div className="photo-list__fav-icon"></div>}
      {favourite && <div className="photo-list__fav-icon-svg"></div>}
    </button>
  );
}

export default PhotoFavButton;