import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Route, useParams } from 'react-router-dom'

const SpotsBrowser = () => {
    const spots = useSelector(state => Object.values(state.spots))
    console.log('pre-map', spots);

    return(
        <>
            <nav>
                {spots.map((spot) => {
                    return (
                        <NavLink key={spot.name} to={`/spots/${spot.id}`}>
                            {spot.id}
                        </NavLink>
                    )
                })}
            </nav>
        </>
    )
}

export default SpotsBrowser
