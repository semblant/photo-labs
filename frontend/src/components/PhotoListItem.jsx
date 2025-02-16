import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = ({ photo, favourite, updateToFavPhotoIds, setPhotoSelected }) => {
  const { id, location, urls, user } = photo;

  return (
      <div className="photo-list__item">
        <PhotoFavButton key={id} photo={photo} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds}/>
        <img onClick={() => setPhotoSelected(photo)} className="photo-list__image" src={urls.regular}/><br/>
          <img className="photo-list__user-profile" src={user.profile}/>
          <div className="photo-list__user-details">
            <div className="photo-list__user-info">{user.username}</div>
            <div className="photo-list__user-location">{location.city}, {location.country}</div>
          </div>
        </div>
    )
};

export default PhotoListItem;
