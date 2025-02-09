import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoDb from 'mocks/photos';
import topicDb from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photoDb} topics={topicDb} />
    </div>
  );
};

export default App;
