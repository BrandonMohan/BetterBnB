import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpots } from '../../store/spots';
import { useHistory, useParams } from 'react-router-dom';

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const userId = useSelector((state) => state.session?.user?.id);
    const { id } = useParams();

    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateCountry = (e) => setCountry(e.target.value)
    const updateName = (e) => setName(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)




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

        let updateSpot = await dispatch(updateSpots(payload, id))
        console.log(updateSpot);

        // if(updateSpot) {
        //     history.push(`/`);
        // }
    };


    return (
        <section className="update-spot-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
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
                        <button type='submit'>Submit Edit Spot</button>
                    </legend>
                </fieldset>
            </form>
        </section>
    );
};

export default EditSpotForm;
