import React, { useReducer, useState, useEffect } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favourites,
    modal,
    photoData,
    topicData,
    onPhotoSelect, // user selects a photo
    updateToFavPhotoIds, // set favourite photos
    setPhotoSelected,
    getTopicsByPhotos, // get topic photos
    onLoadTopic, // load topic from nav bar
    onClosePhotoDetailsModal, // close modal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} getTopicsByPhotos={getTopicsByPhotos}/>
      {modal && <PhotoDetailsModal photo={modal} onClosePhotoDetailsModal={onClosePhotoDetailsModal} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds}/>}
    </div>
  );
};

export default App;
