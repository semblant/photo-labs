import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton({ photo, favourite, updateToFavPhotoIds }) {
  const isFavourited = favourite[photo.id] // get favourite status for specific photo

  return (
    <button key={photo.id} className="photo-list__fav-icon" onClick={(event) => {event.stopPropagation(); updateToFavPhotoIds(photo.id)}}>
      {isFavourited ? <div><FavIcon selected={true}/></div> : <div className="photo-list__fav-icon-svg"><FavIcon selected={false}/></div>}
    </button>
  );
}

export default PhotoFavButton;