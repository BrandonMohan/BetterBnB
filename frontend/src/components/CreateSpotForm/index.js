import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneSpots } from '../../store/spots';
import { useHistory } from 'react-router-dom';

const CreateSpotForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const userId = useSelector((state) => state.session?.user?.id);
    const [imageUrl, setImageUrl] = useState('')

    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateCountry = (e) => setCountry(e.target.value)
    const updateName = (e) => setName(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)
    const updateImageUrl = (e) => setImageUrl(e.target.value)




    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            address,
            city,
            state,
            country,
            name,
            price
        }

        let createdSpot = await dispatch(addOneSpots(payload, userId, imageUrl))
        console.log(createdSpot);

        if(createdSpot) {
            history.push(`/spots/${createdSpot.id}`);
        }
    };


    return (
        <section className="new-spot-form">
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Address'
                value={address}
                onChange={updateAddress}
                />
                <input
                type='text'
                placeholder='City'
                value={city}
                onChange={updateCity}
                />
                <input
                type='text'
                placeholder='State'
                value={state}
                onChange={updateState}
                />
                <input
                type='text'
                placeholder='Country'
                value={country}
                onChange={updateCountry}
                />
                <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={updateName}
                />
                <input
                type='text'
                placeholder='Price'
                value={price}
                onChange={updatePrice}
                />
                <input
                type='text'
                placeholder='image-url'
                value={imageUrl}
                onChange={updateImageUrl}
                required
                />
                <button type='submit'>Create new Spot</button>
            </form>
        </section>
    );
};

export default CreateSpotForm;
