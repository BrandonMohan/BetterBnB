import { csrfFetch } from './csrf';
import Cookies from 'js-cookie'
const GET_SPOTS = 'spots/getSpots'
const ADD_ONE = 'spots/ADD_ONE'
const REMOVE_SPOTS = 'spots/REMOVE_SPOTS'
const GET_ONE = 'spots/GET_ONE'

const getSpots = (spots) => {
	return {
		type: GET_SPOTS,
		spots
}
}

const addSpot = (spot) => {
    return {
    type: ADD_ONE,
    spot
}
}

const getOne = (spot) => {
    return {
        type: GET_ONE,
        spot
    }
}

const removeSpots = (spot) => {
    return {
        type: REMOVE_SPOTS,
        spot
    }
}

export const allSpots = (spots) => async(dispatch)=> {
	const res = await csrfFetch('/api/spots')
	const data = await res.json();
	// console.log('this is the data', data); // do this before adding the dispatch
	dispatch(getSpots(data));
}

export const getOneSpot = (spot) => async (dispatch) => {
    const res = await fetch(`/api/spots/${spot}`)
    const oneSpot = await res.json();
    dispatch(getOne(oneSpot))
}

export const addOneSpots = (payload, userId, imageUrl) => async dispatch => {

    const cookie = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/spots`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'XSRF-TOKEN': `${cookie}`
          },
        body: JSON.stringify({...payload, userId, imageUrl})
    })

    if (response.ok) {
        const spot = await response.json()
        console.log('line 41', spot);
        dispatch(addSpot(spot))
    }
}

export const updateSpots = (spot, id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({spot}),
    });

    if (response.ok) {
      const spot = await response.json();
      dispatch(addSpot(spot));
      return spot;
    }
  };

  export const deleteSpots = (spotId) => async dispatch => {
      const response = await csrfFetch(`/api/spots/${spotId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json',}
      })
      dispatch(removeSpots(spotId))
      return response;
  }

const spotsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_SPOTS:
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot?.id] = spot
            });
            return newState;
        case ADD_ONE:
            console.log('action clg', action.spot);
            return {
                ...state,
                [action.spot?.id]: action.spot
            }
        case REMOVE_SPOTS: {
            const newState = { ...state };
            delete newState[action.spot];
            return newState;
            }
        case GET_ONE:
            return {
             ...state,
             [action.spot.id]: action.spot
         }
        default:
            return state;
    }
}

export default spotsReducer;
