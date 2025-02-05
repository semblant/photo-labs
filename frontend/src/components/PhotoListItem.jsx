import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
      <div>
        <img className="imageSource" src={imageSource}/><br/>
        <img className="profilePicture" src={profile}/>
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    )
};

export default PhotoListItem;
