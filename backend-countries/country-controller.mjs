import 'dotenv/config';
import express from 'express';
import * as countries from './country-model.mjs'; // Import your country model
import cors from 'cors';  // Import the cors package

const PORT = process.env.PORT;





const app = express();

// Enable CORS
app.use(cors())

app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post('/countries', (req, res) => {
    countries.createCountry(
        req.body.name,
        req.body.population,
        req.body.independenceDate,
        req.body.presidentName
    )
    .then(country => {
        console.log(`"${country.name}" was added to the collection.`);
        res.status(201).json(country);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to create country.' });
    });
});

// RETRIEVE controller ****************************************************
app.get('/countries', (req, res) => {
    countries.retrieveCountries()
        .then(countries => {
            if (countries !== null) {
                console.log(`All countries were retrieved from the collection.`);
                res.json(countries);
            } else {
                res.status(404).json({ Error: 'No countries found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve countries.' });
        });
});

// RETRIEVE by ID controller
app.get('/countries/:_id', (req, res) => {
    countries.retrieveCountryByID(req.params._id)
    .then(country => {
        if (country !== null) {
            console.log(`"${country.name}" was retrieved, based on its ID.`);
            res.json(country);
        } else {
            res.status(404).json({ Error: 'Country not found.' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve country.' });
    });
});

// UPDATE controller ************************************
app.put('/countries/:_id', (req, res) => {
    countries.updateCountry(
        req.params._id,
        req.body.name,
        req.body.population,
        req.body.independenceDate,
        req.body.presidentName
    )
    .then(country => {
        console.log(`"${country.name}" was updated.`);
        res.json(country);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update country.' });
    });
});

// DELETE Controller ******************************
app.delete('/countries/:_id', (req, res) => {
    countries.deleteCountryById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} country was deleted.`);
                res.status(200).send({ Success: 'Country deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'Country not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Failed to delete country.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
