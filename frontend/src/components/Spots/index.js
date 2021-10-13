import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'
import './Spots.css'

const SpotsBrowser = () => {
    const spots = useSelector(state => Object.values(state.spots))
    console.log('IMAGE CLG', spots);

    return(
        <>
            <div className="listings_container">
                <nav>
                    {spots.map((spot) => {
                        return (
                            <div className='listings'>
                                <img src={spot.Images[0].url}></img>
                                    <NavLink key={spot.id} to={`/spots/${spot.id}`}>
                                        {spot.name}''
                                        {spot.price}
                                    </NavLink>
                            </div>
                            )
                     })}
                    </nav>
            </div>
        </>
    )
}

export default SpotsBrowser
