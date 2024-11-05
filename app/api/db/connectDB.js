// api/db/connectDB.js
import { MongoClient } from 'mongodb'; // Importing the MongoClient from the mongodb package

// Retrieve the MongoDB connection URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI; 
const options = {}; // Options for the MongoClient, can be customized as needed

let client; // Variable to hold the MongoClient instance
let clientPromise; // Promise to manage the connection to the MongoDB database

// Check if a MongoDB client promise already exists in the global scope to avoid multiple connections
if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, options); // Create a new MongoClient instance with the URI and options
    global._mongoClientPromise = client.connect(); // Store the promise of the connection in the global scope
}

// Assign the existing or newly created client promise to the variable
clientPromise = global._mongoClientPromise; 
export default clientPromise; // Export the client promise for use in other modules
