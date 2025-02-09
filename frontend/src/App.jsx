import React, { useReducer, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoDb from 'mocks/photos';
import topicDb from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourite, setFavourite] = useState(false); // store state of favourite
  const switchFavourite = () => setFavourite((favourite === false ? true : false));

  return (
    <div className="App">
      <HomeRoute photos={photoDb} topics={topicDb} favourite={favourite} switchFavourite={switchFavourite}/>
    </div>
  );
};

export default App;
