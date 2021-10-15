import { csrfFetch } from './csrf';
import Cookies from 'js-cookie'
const GET_REVIEWS = 'reviews/getReviews';
const ADD_ONE = 'reviews/ADD_ONE'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const getReviews = (reviews) => {
    return{
        type: GET_REVIEWS,
        reviews
    }
}

const addReview = (review) => {
    return {
        type: ADD_ONE,
        review
    }
}

const removeReview = (review) => {
    return{
    type: REMOVE_REVIEW,
    review
    }
}


export const allReviews = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/spots/${id}`)
    const data = await res.json();
    console.log('review thunk', data);
    dispatch(getReviews(data))
}

export const addOneReview = (payload, userId, spotId) => async (dispatch)  => {
    const cookie = Cookies.get('XSRF-TOKEN');
    const response = await fetch(`/api/reviews/spots/${spotId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'XSRF-TOKEN': `${cookie}`},
        body: JSON.stringify({...payload, userId, spotId})
    })

    if(response.ok) {
        const review = await response.json();
        dispatch(addReview(review))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json',},
        // body: JSON.stringify(reviewId),
    })
    dispatch(removeReview(reviewId))
    return response;
}


const reviewsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_REVIEWS:
            newState= {...action.reviews}
            return newState;
            case ADD_ONE:
            return {
                ...state,
                [action.review?.id]: action.review
            }
            case REMOVE_REVIEW: {
                const newState = { ...state };
                delete newState[action.review];
                return newState;
            }

            default:
                return state;
    }
}

export default reviewsReducer;
