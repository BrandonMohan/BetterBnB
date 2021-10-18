import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { allReviews } from '../../store/reviews'
import { addOneReview } from '../../store/reviews'
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'


const Reviews = () => {
    const reviews = useSelector(state => Object.values(state.reviews))
    const history = useHistory();
    const userId = useSelector((state) => state.session?.user?.id)
    const [review, setReview] = useState('')

    const updateReview = (e) => setReview(e.target.value)
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(allReviews(id))
    },[dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            review
        }

        let createdReview = await dispatch(addOneReview(payload, userId, id))

        if(createdReview) {
            history.push(`/spots/${id}`)
        }
    };

    const handleDelete = async (reviewId) => {

        dispatch(deleteReview(reviewId))
    }

    return(
        <>
            <div className="reviews_container">
                <ul>
                    {reviews?.map((review) => {
                        return(
                         <li key={review.id}>{review.review}
                         {review?.userId === userId ?

                             <button type="button" onClick={()=>handleDelete(review.id)}>Delete Review</button>
                        :

                             null}
                             </li>
                        )
                    })}
                </ul>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                    type='text'
                    placeholder='Leave a Review'
                    value={review}
                    onChange={updateReview}
                    />
                    <button type='submit'>Create a Review</button>
                </form>
            </div>
        </>
    )
}

export default Reviews
