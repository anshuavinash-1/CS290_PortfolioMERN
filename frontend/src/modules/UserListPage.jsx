import React, { useState } from 'react';
import Footer from './Footer';


const UserListPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchResults = () => {
        setLoading(true);
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => {
                setResults(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                alert("Failed to fetch data from the server.");
                setLoading(false);
            });
    };

    return (
        <div className='main' > 
            <h2>User List</h2>
            <article>
                <p>Click the button below to fetch and display a list of random users.</p>
                <button className='user-button' onClick={fetchResults} disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Users'}
                </button>
            </article>
            {results.length > 0 && (
                <table>
                    <caption>Random User List</caption>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Timezone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <img 
                                        src={user.picture.thumbnail} 
                                        alt={`Thumbnail of ${user.name.first} ${user.name.last}`} 
                                    />
                                </td>
                                <td>
                                    <a href={`mailto:${user.email}`}>
                                        {user.name.first} {user.name.last}
                                    </a>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location.timezone.description}</td>
                                <td>{user.location.city}, {user.location.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Footer />
        </div>
    );
};

export default UserListPage;
