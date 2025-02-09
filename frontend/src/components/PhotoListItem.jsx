import React from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";


const PhotoListItem = ({ photo }) => {
  const { id, location, urls, user } = photo;
  return (
    <div className="photo-list">
      <div className="photo-list__item">
        <img className="photo-list__image" src={urls.regular}/><br/>
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
