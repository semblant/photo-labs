import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ photo, onClosePhotoDetailsModal, favourite, updateToFavPhotoIds }) => {
  /* One suggestion for improvement would be to add error handling for the case where the photo prop is not provided to the PhotoDetailsModal component.
  Currently, if photo is null or undefined, your application may crash when trying to access properties of photo.
  You've already added a check for !photo and return null in that case, which is a good start.
  However, you might want to consider displaying a user-friendly error message or a default image instead.
  */
  if (!photo) return null; // if photo doesn't exist, no modal shows


  const { id, location, urls, user } = photo;
  const similarPhotos = Object.values(photo.similar_photos) // Turn object of similar photos into array


  return (

    <div key={id} className="photo-details-modal">
      <button onClick={onClosePhotoDetailsModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton key={photo.id} photo={photo.id} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds}/>
        <img className='photo-details-modal__image' src={urls.full}/>
        <div className='photo-details-modal__photographer-details'>
          <img className="photo-details-modal__photographer-profile" src={user.profile} />
          <div className='photo-details-modal__photographer-info'>
            <div className='photo-details-modal__photographer-name'>{user.name}</div>
            <div className='photo-details-modal__photographer-locaiton'>{location.city}, {location.country}</div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className='photo-details-modal__images'>
          <PhotoList photos={similarPhotos} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
