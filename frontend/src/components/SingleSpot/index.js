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
    const userId = useSelector((state) => state.session?.user?.id)

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
                <img className="single_spot_img" src={spot?.Images[0].url} alt={spot?.name}></img>
                 <ul className="single_spot_details">
                     <li className="single_spot_li">{spot?.name}</li>
                     <li className="single_spot_li">{spot?.address}</li>
                     <li className="single_spot_li">{spot?.city}</li>
                     <li className="single_spot_li">{spot?.state}</li>
                     <li className="single_spot_li">{spot?.country}</li>
                     <li className="single_spot_li">${spot?.price} per night</li>

                 </ul>
                 </div>
                {spot?.userId === userId ?
                 <button type="button" onClick={handleDelete}>Delete Spot</button> :
                  null}
        </>
    )
}

export default SingleSpot
