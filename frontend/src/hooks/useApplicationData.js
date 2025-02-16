import { useState, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  console.log('state', state);
  console.log('action', action)
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, [action.payload.id]: true}
    case ACTIONS.FAV_PHOTO_REMOVED:
      const prevFavs = {...state};
      delete prevFavs[action.value];
      return prevFavs;
    case ACTIONS.SET_PHOTO_DATA:
      return action.value
    case ACTIONS.SET_TOPIC_DATA:
      return
    case ACTIONS.SELECT_PHOTO:
      return
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return
  }


  /* 'default' doesn't work?
  default:
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  )
  */
};


const useApplicationData = () => {
    /* Favourites */
    const [favourite, favDispatch] = useReducer(reducer, {}); // store current state of favourite as an empty object
    const updateToFavPhotoIds = (photoId) => {
      if (!favourite[photoId]) favDispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: {id: photoId, isFavourite: false}});
      else favDispatch(({ type: ACTIONS.FAV_PHOTO_REMOVED, value:photoId}))
    }

    /* PhotoDetailsModal Component */
    const [modal, modalDispatch] = useReducer(reducer, null);

    const setPhotoSelected = (photo) => modalDispatch({type: ACTIONS.SET_PHOTO_DATA, value: photo}); // opens modal with photo that was clicked

    const onClosePhotoDetailsModal = () => modalDispatch({type: ACTIONS.SET_PHOTO_DATA, value: null}); // Closes modal

    return {
      favourite,
      modal,
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal,
    }
};

export default useApplicationData;
