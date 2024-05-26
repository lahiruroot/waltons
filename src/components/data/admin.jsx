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
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Topic</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Contact Number</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Location</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Price</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Description</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Payment Details</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Facilities</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {properties.map(property => (
                    <tr key={property.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4 border-b border-gray-300">{property.topic}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{property.contactNumber}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{property.location}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{property.price}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{property.description}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{property.paymentDetails}</td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            {Object.entries(property.facilities).map(([key, value]) => (
                                value && <span key={key}>{key}<br /></span>
                            ))}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            <button
                                onClick={() => deleteProperty(property.id)}
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Add;
