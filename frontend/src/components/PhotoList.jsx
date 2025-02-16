import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favourite, updateToFavPhotoIds, setPhotoSelected }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => <PhotoListItem key={photo.id} photo={photo} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>)}
    </ul>
  );
};

export default PhotoList;
