import { csrfFetch } from './csrf';

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

export const addOneSpots = (spots) => async (dispatch) => {
    const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(spots)
    });
    if(res.ok) {
        const spot = await res.json();
        dispatch(addSpot(spot))
    }
}

const spotsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_SPOTS:
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            });
            return newState;
        case ADD_ONE:
            return {
                ...state,
                [action.spot.id]: action.spot
            }
        default:
            return state;
    }
}

export default spotsReducer;
