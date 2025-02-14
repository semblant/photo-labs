import React, { useReducer, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoDb from 'mocks/photos';
import topicDb from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  /* Favourites */
  const [favourite, setFavourite] = useState({}); // store current state of favourite as an empty object
  const switchFavourite = (photoId) => {
    setFavourite((prevFavourites) => {
     const newFavourites = {...prevFavourites};

    if (newFavourites[photoId]) delete newFavourites[photoId] // Remove current key if 'unfavourited'
    else newFavourites[photoId] = true;

    return newFavourites;
    });
  }


  /* PhotoDetailsModal Component */
  const [modal, setModal] = useState(null); // tracks one state?
  const openModal = (photo) => setModal(photo); // opens modal with photo that was clicked
  const closeModal = () => setModal(null); // Closes modal

  return (
    <div className="App">
      <HomeRoute photos={photoDb} topics={topicDb} favourite={favourite} switchFavourite={switchFavourite} openModal={openModal}/>
      {modal && <PhotoDetailsModal photo={modal} onClose={closeModal} favourite={favourite} switchFavourite={switchFavourite}/>}
    </div>
  );
};

export default App;
