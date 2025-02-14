import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {

  const { id, location, urls, user } = photo;

  return (
    <div onClick={onClose} className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

    </div>
  )
};

export default PhotoDetailsModal;
