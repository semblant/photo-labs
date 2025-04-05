import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favourites, updateToFavPhotoIds, setPhotoSelected }) => {
  const photoArray = Array.isArray(photos) ? photos : photos.photoData; // store data from different sources as an array

  return (
    <ul className="photo-list">
      {photoArray &&
        photoArray.map((photo) => <PhotoListItem key={photo.id} photo={photo} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>)
    }
    {!photoArray && <p>Loading photos...</p>}
    </ul>
  );
};

export default PhotoList;
