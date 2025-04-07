import { useEffect, useReducer } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
};

// Store initial state
const initialState = {
  favourites: [],
  modal: null,
  photoData: [],
  topicData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // Check if photoID exists in favourites already
      if (!state.favourites.includes(action.value)) {
        return {...state, favourites: [...state.favourites, action.value]}; // return state appended with updated favourites
      } else
      return state; // ensure no duplicates

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: state.favourites.filter((id) => id !== action.value)};

    case ACTIONS.SET_PHOTO_DATA:
      if (!action.payload) return state
      console.log("inside reducer: ", action.payload)
      return {...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modal: action.value };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, photoData: action.payload };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

    /* Favourites */
    const updateToFavPhotoIds = (photoId) => {
      if (!state.favourites.includes(photoId)) dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: photoId});
      else dispatch(({ type: ACTIONS.FAV_PHOTO_REMOVED, value:photoId }));
    }

    /* PhotoDetailsModal Component */
    const setPhotoSelected = (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, value: photo }); // opens modal with photo that was clicked
    const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.SELECT_PHOTO, value: null }); // Closes modal


    /* Topic List */
    const getTopicsByPhotos = (topicId) => {
        fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data)=> {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
        });
      };

    /* Search Results */
    const getPhotosBySearch = (query) => {
      fetch(`http://localhost:8001/api/search/${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data)=> {
        console.log("Response data: ", data)
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data || []});
      });
    };

    /* Fetching photo data*/
    useEffect(() => {
      fetch('http://localhost:8001/api/photos')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data || [] })
        });
    }, []);

    useEffect(() => {
      fetch('http://localhost:8001/api/topics')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data || [] })
        });
    }, []);


    return {
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal,
      getTopicsByPhotos,
      getPhotosBySearch,
      favourites: state.favourites,
      modal: state.modal,
      photoData: state.photoData,
      topicData: state.topicData,
    }
};

export default useApplicationData;
