// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        console.log('Error: Failed to connect to MongoDB.');
    } else {
        console.log('Success: Successfully connected to MongoDB.');
    }
});


// SCHEMA: Define the collection's schema for countries.
const countrySchema = mongoose.Schema({
    name:            { type: String, required: true },
    population:      { type: Number, required: true },
    independenceDate:{ type: Date, required: true },
    presidentName:   { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "countries".
const Countries = mongoose.model('Countries', countrySchema);

// EXPORT the functions.
export const createCountry = async (name, population, independenceDate, presidentName) => {
    const country = new Countries({ 
        name: name, 
        population: population, 
        independenceDate: independenceDate,
        presidentName: presidentName
    });
    return country.save();
}

export const retrieveCountries = async () => {
    const query = Countries.find();
    return query.exec();
}

export const retrieveCountryByID = async (_id) => {
    const query = Countries.findById({ _id: _id });
    return query.exec();
}

export const updateCountry = async (_id, name, population, independenceDate, presidentName) => {
    const result = await Countries.replaceOne({ _id: _id }, {
        name: name,
        population: population,
        independenceDate: independenceDate,
        presidentName: presidentName
    });
    return { _id: _id, name: name, population: population, independenceDate: independenceDate, presidentName: presidentName };
}

export const deleteCountryById = async (_id) => {
    const result = await Countries.deleteOne({ _id: _id });
    return result.deletedCount;
}
