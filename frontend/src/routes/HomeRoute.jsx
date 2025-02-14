import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics, favourite, switchFavourite, openModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourite={favourite}/>
      <PhotoList photos={photos} favourite={favourite} switchFavourite={switchFavourite} openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
