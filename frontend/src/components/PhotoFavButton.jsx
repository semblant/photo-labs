import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favourite, setFavourite] = useState(false);


  const handleClick = (favStatus) => {
    console.log("clicked")
    favStatus ? setFavourite(false) : setFavourite(true)
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={handleClick} selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;