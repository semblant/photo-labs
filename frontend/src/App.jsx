import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';


// create an array of photos -- using .map(_,index) to have unique keys for each photo (since they're all the same photo). Once there are new id's change to the below
/* const photos = [...Array(3)].map((_, index) => {
<PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>})
*/

/*
commenting out to upgrade


const photos = [...Array(3)].map((_, index) =>
  <PhotoListItem key={index} photo={sampleDataForPhotoListItem}/>
);
*/



// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopicList />
      <div className='photo-list'>
        {/*photos*/}
        <PhotoList />
      </div>
    </div>
  );
};

export default App;
