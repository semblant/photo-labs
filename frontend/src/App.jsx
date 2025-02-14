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
  const [modal, setModal] = useState(false); // tracks one state?
  const swtichModal = () => setModal((modal === false) ? true : false);

  return (
    <div className="App">
      <HomeRoute photos={photoDb} topics={topicDb} favourite={favourite} switchFavourite={switchFavourite}/>

    </div>
  );
};

export default App;
