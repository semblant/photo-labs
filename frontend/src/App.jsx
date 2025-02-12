import React, { useReducer, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoDb from 'mocks/photos';
import topicDb from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  /*
  Currently, your implementation only allows for one photo to be marked as a favourite at a time. The favourite state is a boolean, which means it can only hold the favourite status of one photo.
  If you want to allow users to favourite multiple photos, you might need to change the favourite state to an array that can hold the IDs of multiple photos.
  Then, in your switchFavourite function, you would check if a photo's ID is already in the favourite array.
  If it is, you would remove it from the array, and if it's not, you would add it to the array.


  BUG: clicking one favourite, favourites everything at the same time. -- access via keys?

  Need to:
  Put notification on favourites in nav bar
  */
  const [favourite, setFavourite] = useState({}); // store current state of favourite as an empty object
  const switchFavourite = (photoId) => {
    setFavourite((prevFavourites) => ({
      ...prevFavourites,
      [photoId]: !prevFavourites[photoId]
    }));
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
