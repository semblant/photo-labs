import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// create an array of photos -- using .map(_,index) to have unique keys for each photo (since they're all the same photo). Once there are new id's change to the below
/* const photos = [...Array(3)].map((_, index) => {
<PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>})
*/

const photos = [...Array(3)].map((_, index) =>
  <PhotoListItem key={index} photo={sampleDataForPhotoListItem}/>
);


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div className='photo-list'>
        {photos}
      </div>
    </div>
  );
};

export default App;
