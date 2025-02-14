import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = ({ photo, favourite, switchFavourite, openModal }) => {
  const { id, location, urls, user } = photo;

  return (
    <div key={photo.id} className="photo-list">
      <div className="photo-list__item">
        <div className="photo-list__fav-icon">
          <PhotoFavButton key={photo.id} photo={photo} favourite={favourite} switchFavourite={switchFavourite}/>
        </div>
        <img onClick={() => openModal(photo)}  className="photo-list__image" src={urls.regular}/><br/>
          <img className="photo-list__user-profile" src={user.profile}/>
          <div className="photo-list__user-details">
            <div className="photo-list__user-info">{user.username}</div>
            <div className="photo-list__user-location">{location.city}, {location.country}</div>
          </div>
        </div>
      </div>
    )
};

export default PhotoListItem;
