import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton() {
  const [ favourite, setFavourite ] = useState(false);

  const handleClick = () => {
    favourite ? setFavourite(false): setFavourite(true);
  }

  return (
    <button onClick={handleClick}>
      {!favourite && <div className="photo-list__fav-icon-svg"><FavIcon selected={false}/></div>}
      {favourite && <div className="photo-list__fav-icon"><FavIcon selected={true}/></div>}
    </button>
  );
}

export default PhotoFavButton;