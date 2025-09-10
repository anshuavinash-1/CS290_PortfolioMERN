import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCountry = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [independenceDate, setIndependenceDate] = useState('');
    const [presidentName, setPresidentName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/countries/${id}`)
            .then((response) => {
                const country = response.data;
                setName(country.name);
                setPopulation(country.population);
                setIndependenceDate(new Date(country.independenceDate).toISOString().split('T')[0]); 
                setPresidentName(country.presidentName);
            })
            .catch((error) => {
                console.error("There was an error retrieving the country!", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/countries/${id}`, {
            name: name,
            population: population,
            independenceDate: new Date(independenceDate).toISOString().split('T')[0], 
            presidentName: presidentName
        })
        .then(() => {
            navigate('/countries');
        })
        .catch((error) => {
            console.error("There was an error updating the country!", error);
        });
    };

    return (
        <div className='main'>
            <h2>Update Country</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Population:
                    <input type="number" value={population} onChange={(e) => setPopulation(e.target.value)} required />
                </label>
                <br />
                <label>
                    Independence Date:
                    <input type="date" value={independenceDate} onChange={(e) => setIndependenceDate(e.target.value)} required />
                </label>
                <br />
                <label>
                    President Name:
                    <input type="text" value={presidentName} onChange={(e) => setPresidentName(e.target.value)} required />
                </label>
                <br />
                <button type="submit" className='submit-button'>Update Country</button>
            </form>
        </div>
    );
};

export default UpdateCountry;
