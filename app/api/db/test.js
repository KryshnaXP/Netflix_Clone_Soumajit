import clientPromise from './api/db/connectDB';

async function testConnection() {
    try {
        const client = await clientPromise;
        const db = client.db(); // Connect to the default database
        console.log("Successfully connected to MongoDB!");
        // Perform any additional operations, like listing collections
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

testConnection();
