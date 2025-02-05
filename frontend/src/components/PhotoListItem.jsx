import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;
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
