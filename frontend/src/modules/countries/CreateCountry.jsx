// src/modules/countries/AddCountry.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCountry = () => {
    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [independenceDate, setIndependenceDate] = useState('');
    const [presidentName, setPresidentName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/countries', {
                name,
                population,
                independenceDate,
                presidentName
            });
            navigate('/countries');
        } catch (error) {
            console.error('Error adding country:', error);
        }
    };

    return (
        <div className="add-country main">
            <h1>Add Country</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Population:
                    <input type="number" min={100000} value={population} onChange={(e) => setPopulation(e.target.value)} required />
                </label>
                <label>
                    Independence Date:
                    <input type="date" value={independenceDate} onChange={(e) => setIndependenceDate(e.target.value)} required />
                </label>
                <label>
                    President Name:
                    <input type="text" value={presidentName} onChange={(e) => setPresidentName(e.target.value)} required />
                </label>
                <button type="submit" className="submit-button">Add Country</button>
            </form>
        </div>
    );
};

export default CreateCountry;
