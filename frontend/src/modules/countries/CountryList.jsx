import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 
import Footer from '../Footer';

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/countries');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/countries/${id}`);
            setCountries(countries.filter(country => country._id !== id));
        } catch (error) {
            console.error('Error deleting country:', error);
        }
    };

    return (
        <div className="country-list main">
            <h1>Country List</h1>
            <Link to="/add-country" className="add-country-button">Add Country</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Independence Date</th>
                        <th>President Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <tr key={country._id}>
                            <td>{country.name}</td>
                            <td>{country.population}</td>
                            <td>{new Date(country.independenceDate).toLocaleDateString()}</td>
                            <td>{country.presidentName}</td>
                            <td className="actions">
                                <Link to={`/update-country/${country._id}`} className="update-button"> <FaEdit /> Update</Link>
                                <button onClick={() => handleDelete(country._id)} className="delete-button"> <FaTrashAlt /> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default CountryList;
