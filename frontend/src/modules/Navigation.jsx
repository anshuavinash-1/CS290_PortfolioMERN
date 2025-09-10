// src/modules/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGlobe, FaImage, FaShoppingCart, FaEnvelope , FaUsers } from 'react-icons/fa'; // Import icons

const Navigation = () => {
    return (
        <div className="navbar">
            <Link to="/" className="logo">
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"></link>
                Anshu Avinash
            </Link>
            <Link to="/home">
                <FaHome /> Home
            </Link>
            <Link to="/countries">
                <FaGlobe /> Countries
            </Link>
            <Link to="/gallery">
                <FaImage /> Gallery
            </Link>
            <Link to="/order">
                <FaShoppingCart /> Order
            </Link>
            <Link to="/users">
                <FaUsers /> Users
            </Link>
            <Link to="/contact">
                <FaEnvelope /> Contact
            </Link>
        </div>
    );
};

export default Navigation;
