import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, favourite, switchFavourite }) => {
  console.log('Photo Received in Modal:', photo)
  if (!photo) return null;
  const { id, location, urls, user, similar_photos } = photo;

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
      <button onClick={onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
      <div className="photo-list__fav-icon">
          <PhotoFavButton key={photo.id} photo={photo} favourite={favourite} switchFavourite={switchFavourite}/>
        </div>
      <img className='photo-details-modal__image' src={urls.regular}/>
      <div className='photo-details-modal__photographer-details'>
        <img className="photo-details-modal__photographer-profile" src={user.profile} />
        <div className='photo-details-modal__photographer-info'>
          <div className='photo-details-modal__photographer-name'>{user.name}</div>
          <div className='photo-details-modal__photographer-locaiton'>{location.city}, {location.country}</div>
        </div>
      </div>

      <div className="photo-details-modal__header">
        <div className='.photo-details-modal__images'>list Similar Photos </div>
      </div>




    </div>
  )
};

export default PhotoDetailsModal;
