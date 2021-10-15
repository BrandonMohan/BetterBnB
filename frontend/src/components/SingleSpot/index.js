import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getOneSpot } from '../../store/spots'
import { useHistory } from 'react-router-dom'
import { deleteSpots } from '../../store/spots'
import { allSpots } from '../../store/spots'
import './SingleSpot.css'


const SingleSpot = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneSpot(id))
    }, [dispatch])

    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteSpots(id))
        history.push('/')
    }

    const spot = useSelector(state => state.spots[id])
    console.log('---------', spot);

    return(
        <>
            <div className={'single_spot'}>
                {/* <img src={spot[0]?.Images[0].url} alt={spot?.name}></img> */}
                 {/* <p>{spot[0]?.name}</p> */}
                 <button type="button" onClick={handleDelete}>Delete Spot</button>
             </div>
        </>
    )
}

export default SingleSpot
