'use server'; // Corrected the typo from "use sever" to "use server" for server-side functionality
import clientPromise from '@/app/api/db/connectDB'; // Importing the database connection promise

// Function to register a new user with email and password
export default async function registerUser(email, password) {
  // Validate input: ensure email and password are provided
  if (!email || !password) {
    throw new Error('Email and password are required'); // Error if any required fields are missing
  }

  try {
    const client = await clientPromise; // Wait for the database client to be ready
    const db = client.db('Netflix_Clone'); // Connect to the specified MongoDB database
    const collection = db.collection('Users'); // Access the Users collection

    // Check if a user with the provided email already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return { done: false }; // Return early if the user already exists
    }

    // Check the total count of users in the collection
    const userCount = await collection.countDocuments();
    if (userCount >= 100) { // Adjusted to >= to delete when reaching 100 users
      const firstUser = await collection.findOne({}, { sort: { _id: 1 } }); // Find the first user based on the ascending order of _id
      if (firstUser) {
        await collection.deleteOne({ _id: firstUser._id }); // Remove the first user from the collection
        console.log(`Deleted user: ${firstUser.email}`); // Log the email of the deleted user
      }
    }

    // Insert the new user into the Users collection
    await collection.insertOne({ email, password });
    return { done: true }; // Return success status after user registration
  } catch (error) {
    throw new Error('Internal Server Error: ' + error.message); // Catch any errors and provide a relevant message
  }
}
