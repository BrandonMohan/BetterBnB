import { csrfFetch } from './csrf';
import Cookies from 'js-cookie'
const GET_SPOTS = 'spots/getSpots'
const ADD_ONE = 'spots/ADD_ONE'


const getSpots = (spots) => {
	return {
		type: GET_SPOTS,
		spots
}
}

const addSpot = (spots) => {
    return {
    type: ADD_ONE,
    spots
}
}

export const allSpots = (spots) => async(dispatch)=> {
	const res = await csrfFetch('/api/spots')
	const data = await res.json();
	// console.log('this is the data', data); // do this before adding the dispatch
	dispatch(getSpots(data));
}

export const addOneSpots = (payload, userId, spotId) => async dispatch => {

    const token = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/spots/${spotId}`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'XSRF-TOKEN': `${token}`
          },
        body: JSON.stringify({...payload, userId})
    })

    if (response.ok) {
        const spot = await response.json()
        dispatch(addSpot(spot))
    }
}

export const updateSpots = (id, spot) => async dispatch => {
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
            return {
                ...state,
                [action.spot?.id]: action.spot
            }
        default:
            return state;
    }
}

export default spotsReducer;
