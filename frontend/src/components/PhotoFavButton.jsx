import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import photos from 'mocks/photos';

function PhotoFavButton({ photo, favourite, switchFavourite }) {
  const isFavourited = favourite[photo.id] // get favourite status for specific photo

  return (
    <button className="photo-list__fav-icon" onClick={() => switchFavourite(photo.id)}>
      {!isFavourited ? <div className="photo-list__fav-icon-svg"><FavIcon selected={false}/></div> : <div className="photo-list__fav-icon"><FavIcon selected={true}/></div>}
    </button>
  );
}

export default PhotoFavButton;