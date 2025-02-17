import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favourite, updateToFavPhotoIds, setPhotoSelected }) => {
  return (
    <ul className="photo-list">
      {photos.photoData &&
        photos.photoData.map((photo) => <PhotoListItem key={photo.id} photo={photo} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>)
    }
    {!photos.photoData && <p>Loading photos...</p>}
    </ul>
  );
};

export default PhotoList;
