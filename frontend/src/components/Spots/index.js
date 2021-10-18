import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'
import { allSpots } from '../../store/spots'
import CreateSpotModal from '../CreateSpotForm'
import './Spots.css'

const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => Object.values(state.spots))
    // console.log('IMAGE CLG', spots);

    useEffect(() => {
        dispatch(allSpots());
    }, [dispatch]);

    return(
        <div className="spots_body">
            <h1 className="spots_header">Available Spots</h1>
            <CreateSpotModal />
            <div className="listings_container">
                <nav>
                    {spots?.map((spot) => {
                        return (
                            <div className='listings'>
                                {/* <div className='listing_card'> */}
                                    <img className="image" src={spot.Images[0].url} alt={spot.name}></img>
                                        <NavLink className="spots_names" to={`/spots/${spot.id}`}>
                                            {spot.name}
                                        </NavLink>
                                        ${spot.price} per night.
                                {/* </div> */}
                            </div>
                            )
                        })}
                </nav>
            </div>
        </div>
    )
}

export default SpotsBrowser
