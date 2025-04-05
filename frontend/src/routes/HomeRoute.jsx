import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


/*
LARRY FEEDBACK
In your PhotoList component, you're passing in favourites and updateToFavPhotoIds as props.
However, in the sample solution, these props are not used.
Make sure these props are being used in the PhotoList component, otherwise, you can remove them.
*/

const HomeRoute = ({photos, topics, favourites, updateToFavPhotoIds, setPhotoSelected, getTopicsByPhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} getTopicsByPhotos={getTopicsByPhotos} favourites={favourites}/>
      <PhotoList photos={photos} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;
