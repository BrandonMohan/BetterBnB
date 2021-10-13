import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { allSpots } from '../../store/spots';
import { useHistory } from 'react-router-dom';

const CreateSpotForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [county, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateCountry = (e) => setCountry(e.target.value)
    const updateName = (e) => setName(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        let createdSpot;
        if(createdSpot) {
            history.push(`/spots/${createdSpot.id}`);
        }
    };
   
}
