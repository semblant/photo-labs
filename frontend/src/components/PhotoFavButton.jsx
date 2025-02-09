import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton({ favourite, switchFavourite }) {

  const handleClick = () => {
    switchFavourite();
  }

  return (
    <button className="photo-list__fav-icon" onClick={handleClick}>
      {!favourite ? <div className="photo-list__fav-icon-svg"><FavIcon selected={false}/></div> : <div className="photo-list__fav-icon"><FavIcon selected={true}/></div>}
    </button>
  );
}

export default PhotoFavButton;