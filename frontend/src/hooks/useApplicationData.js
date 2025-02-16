import { useState, useEffect } from "react";

const useApplicationData = () => {
    /* Favourites */
    const [favourite, setFavourite] = useState({}); // store current state of favourite as an empty object

    const updateToFavPhotoIds = (photoId) => {
      setFavourite((prevFavourites) => {
        console.log('prevFavourites', prevFavourites)
       const newFavourites = { ...(prevFavourites) || {} };

      if (newFavourites[photoId]) delete newFavourites[photoId] // Remove current key if 'unfavourited'
      else newFavourites[photoId] = true;
        console.log('newFavourites', newFavourites)
      return newFavourites;
      });
    }

    /* PhotoDetailsModal Component */
    const [modal, setModal] = useState(null); // tracks one state?

    const setPhotoSelected = (photo) => setModal(photo); // opens modal with photo that was clicked

    const onClosePhotoDetailsModal = () => setModal(null); // Closes modal

    return {
      favourite,
      modal,
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal,
    }
};

export default useApplicationData;
