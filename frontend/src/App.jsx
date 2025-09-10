import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './modules/countries/CountryList';
import CreateCountry from './modules/countries/CreateCountry';
import UpdateCountry from './modules/countries/UpdateCountry';
import Navigation from './modules/Navigation';  
import HomePage from './modules/HomePage';
import GalleryPage from './modules/GalleryPage';
import OrderPage from './modules/OrderPage'; 
import UserListPage from './modules/UserListPage';
import ContactPage from './modules/ContactPage';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/countries" element={<CountryList />} />
                <Route path="/add-country" element={<CreateCountry />} />
                <Route path="/update-country/:id" element={<UpdateCountry />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/users" element={<UserListPage />} />
                <Route path="/contact" element={<ContactPage />} />
             
            </Routes>
        </Router>
    );
};

export default App;

