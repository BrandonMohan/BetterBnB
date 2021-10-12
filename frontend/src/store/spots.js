import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/getSpots'

const getSpots = (spots) => {
	return {
		type: GET_SPOTS,
		spots
}
}

export const allSpots = (spots) => async(dispatch)=> {
	const res = await csrfFetch('/api/spots')
	const data = await res.json();
	// console.log('this is the data', data); // do this before adding the dispatch
	dispatch(getSpots(data));
}

const spotsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_SPOTS:
            newState = {...state}
            action.spots.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;
