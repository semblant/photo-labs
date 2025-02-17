import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favourite, updateToFavPhotoIds, setPhotoSelected }) => {

  const photoArray = Array.isArray(photos) ? photos : photos.photoData

  console.log('similar photos inside PhotoList component: ',photos)
  return (
    <ul className="photo-list">
      {photoArray &&
        photoArray.map((photo) => <PhotoListItem key={photo.id} photo={photo} favourite={favourite} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>)
    }
    {!photoArray && <p>Loading photos...</p>}
    </ul>
  );
};

export default PhotoList;
