import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
      <div className="photo-list__item">
        <img className="photo-list__image" src={imageSource}/><br/>
          <img className="photo-list__user-profile" src={profile}/>
          <div className="photo-list__user-details">
            <div className="photo-list__user-info">{username}</div>
            <div className="photo-list__user-location">{location.city}, {location.country}</div>
          </div>
      </div>
    )
};

export default PhotoListItem;
