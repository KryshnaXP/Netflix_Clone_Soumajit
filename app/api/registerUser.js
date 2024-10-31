'use server'; // Correct the typo from "use sever"
import clientPromise from '@/app/api/db/connectDB';

export default async function registerUser(email, password) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  try {
    const client = await clientPromise;
    const db = client.db('Netflix_Clone'); // Connect to your MongoDB database
    const collection = db.collection('Users'); // Choose your collection name

    // Check if the email already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return { done: false };
    }

    // Check the count of users and delete the first user if there are more than 100
    const userCount = await collection.countDocuments();
    if (userCount >= 100) { // Changed to >= to ensure we delete when reaching 100
      const firstUser = await collection.findOne({}, { sort: { _id: 1 } }); // Find the first user
      if (firstUser) {
        await collection.deleteOne({ _id: firstUser._id }); // Delete the first user
        console.log(`Deleted user: ${firstUser.email}`);
      }
    }

    // Insert the new user
    await collection.insertOne({ email, password });
    return { done: true };
  } catch (error) {
    throw new Error('Internal Server Error: ' + error.message);
  }
}
