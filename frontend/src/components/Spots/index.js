import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'
import { allSpots } from '../../store/spots'
import './Spots.css'

const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => Object.values(state.spots))
    // console.log('IMAGE CLG', spots);

    useEffect(() => {
        dispatch(allSpots());
    }, [dispatch]);

    return(
        <>
            <div className="listings_container">
                <nav>
                    {spots?.map((spot) => {
                        return (
                            <div className='listings'>
                                <img src={spot.Images[0].url} alt={spot.name}></img>
                                    <NavLink to={`/spots/${spot.id}`}>
                                        {spot.name}
                                    </NavLink>
                                    ${spot.price} per night.
                            </div>
                            )
                     })}
                    </nav>
            </div>
        </>
    )
}

export default SpotsBrowser
