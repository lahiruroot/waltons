import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore';


function Newform() {

    const [form, setForm] = useState({
        topic: '',
        contactNumber: '',
        location: '',
        price: '',
        description: '',
        paymentDetails: '',
        facilities: {
            tapWater: false,
            wideRoad: false,
            threePhaseElectricity: false,
            twentyFtWideRoad: false,
            wifi: false,
            tvLine: false,
        }
    });

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const citiesCollection = collection(db, 'cities');
            const citySnapshot = await getDocs(citiesCollection);
            const cityList = citySnapshot.docs.map(doc => doc.data().name);
            setCities(cityList);
        };

        fetchCities();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setForm(prevState => ({
                ...prevState,
                facilities: {
                    ...prevState.facilities,
                    [name]: checked,
                }
            }));
        } else {
            setForm(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'properties'), form);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Failed to submit the form.');
        }
    };

    return (
        
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">Topic</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="topic" type="text" name="topic" value={form.topic} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">Contact Number</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactNumber" type="text" name="contactNumber" value={form.contactNumber} onChange={handleChange} maxLength="10" pattern="\d*" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location" name="location" value={form.location} onChange={handleChange} required>
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price" type="text" name="price" value={form.price} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" name="description" value={form.description} onChange={handleChange} required></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentDetails">Payment Details</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paymentDetails" name="paymentDetails" value={form.paymentDetails} onChange={handleChange} required></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Facilities</label>
                    <div>
                        <input type="checkbox" id="tapWater" name="tapWater" checked={form.facilities.tapWater} onChange={handleChange} />
                        <label className="ml-2" htmlFor="tapWater">TAP WATER</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wideRoad" name="wideRoad" checked={form.facilities.wideRoad} onChange={handleChange} />
                        <label className="ml-2" htmlFor="wideRoad">WIDE ROAD</label>
                    </div>
                    <div>
                        <input type="checkbox" id="threePhaseElectricity" name="threePhaseElectricity" checked={form.facilities.threePhaseElectricity} onChange={handleChange} />
                        <label className="ml-2" htmlFor="threePhaseElectricity">THREE PHASE ELECTRICITY</label>
                    </div>
                    <div>
                        <input type="checkbox" id="twentyFtWideRoad" name="twentyFtWideRoad" checked={form.facilities.twentyFtWideRoad} onChange={handleChange} />
                        <label className="ml-2" htmlFor="twentyFtWideRoad">20FT WIDE ROAD</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wifi" name="wifi" checked={form.facilities.wifi} onChange={handleChange} />
                        <label className="ml-2" htmlFor="wifi">WIFI</label>
                    </div>
                    <div>
                        <input type="checkbox" id="tvLine" name="tvLine" checked={form.facilities.tvLine} onChange={handleChange} />
                        <label className="ml-2" htmlFor="tvLine">TV line</label>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </form>
    )
}

export default Newform;