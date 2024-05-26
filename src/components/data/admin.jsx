// src/components/Add.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config'; // Adjust the path if nec
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Add = () => {
    const [properties, setProperties] = useState([]);

    // Function to fetch data from Firebase
    const fetchProperties = async () => {
        const propertiesCollection = collection(db, 'properties');
        const snapshot = await getDocs(propertiesCollection);
        const propertiesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProperties(propertiesData);
    };

    // Function to delete a property from Firebase
    const deleteProperty = async (id) => {
        await deleteDoc(doc(db, 'properties', id));
        setProperties(properties.filter(property => property.id !== id));
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div>
            <h2>Properties</h2>
            <table>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Contact Number</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Payment Details</th>
                        <th>Facilities</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>{property.topic}</td>
                            <td>{property.contactNumber}</td>
                            <td>{property.location}</td>
                            <td>{property.price}</td>
                            <td>{property.description}</td>
                            <td>{property.paymentDetails}</td>
                            <td>
                                {Object.entries(property.facilities).map(([key, value]) => (
                                    value && <span key={key}>{key}<br /></span>
                                ))}
                            </td>
                            <td>
                                <button onClick={() => deleteProperty(property.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Add;
