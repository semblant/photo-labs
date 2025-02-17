import { useEffect, useReducer } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};


/*
LARRY FEEDBACK:

It seems like you're trying to use the same reducer function for two different pieces of state (favourite and modal). While this is possible, it can lead to confusion and bugs. It would be better to have separate reducers for each piece of state.

 - code was given to us like this so I made it work????
*/



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, [action.payload.id]: true};

    case ACTIONS.FAV_PHOTO_REMOVED:

      /*
      LARRY FEEDBACK:
      Your FAV_PHOTO_REMOVED case is correctly removing the photo id from the state, but it's a bit more complex than it needs to be.
      Instead of creating a copy of the state, deleting the key, and returning the copy, you could simply filter the array of favourite photo ids to remove the one that matches the action value.
      */
      const prevFavs = {...state};
      delete prevFavs[action.value];
      return prevFavs;

    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload }

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }

    case ACTIONS.SELECT_PHOTO:
      return action.value;

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return state;

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
};


const useApplicationData = () => {
    /* Favourites */
    /*
    LARRY FEEDBACK:
    In your FAV_PHOTO_ADDED case, you're setting the state to be an object with the photo id as the key and true as the value.
    This doesn't seem to align with the requirement of keeping a list of favourite photos.
    You might want to revise this to keep an array of favourite photo ids.


    -- I never had it as an array, it was always an object - easier to access the photoId in an object than an array
    */
    const [favourite, favDispatch] = useReducer(reducer, {}); // store current state of favourite as an empty object
    const updateToFavPhotoIds = (photoId) => {
      if (!favourite[photoId]) favDispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: {id: photoId, isFavourite: false }});
      else favDispatch(({ type: ACTIONS.FAV_PHOTO_REMOVED, value:photoId }))
    }

    /* PhotoDetailsModal Component */
    const [modal, modalDispatch] = useReducer(reducer, null);

    const setPhotoSelected = (photo) => modalDispatch({ type: ACTIONS.SELECT_PHOTO, value: photo }); // opens modal with photo that was clicked

    const onClosePhotoDetailsModal = () => modalDispatch({ type: ACTIONS.SELECT_PHOTO, value: null }); // Closes modal


    const initialState = {
      ...favourite,
      ...modal,
      photoData: [],
      topicData: []
    };

    /* Fetching photo data*/
    const [photoData, photoDataDispatch] = useReducer(reducer, []);
    useEffect(() => {
      fetch('http://localhost:8001/api/photos')
        .then((response) => response.json())
        .then((data) => {
          photoDataDispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data || [] })
        });
    }, [photoData])

    const [topicData, topicDataDispatch] = useReducer(reducer, []);
    useEffect(() => {
      fetch('http://localhost:8001/api/topics')
        .then((response) => response.json())
        .then((data) => {
          topicDataDispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data || [] })
        });
    }, [topicData])

    return {
      favourite,
      modal,
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal,
      photoData,
      topicData
    }
};

export default useApplicationData;
