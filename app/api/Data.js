import clientPromise from '@/app/api/db/connectDB'; // Importing the database connection promise

// Function to fetch contents from a specified collection in the database
export async function fetchContents(Data) {
    try {
        const client = await clientPromise; // Wait for the database client to be ready
        const db = client.db("Netflix_Clone"); // Connect to the Netflix_Clone database
        const contentsCollection = db.collection(Data); // Access the specified collection based on the provided Data parameter
        
        // Fetch all documents from the collection and convert them to an array
        const allContents = await contentsCollection.find({}).toArray();
        return allContents; // Return the fetched contents
    } catch (error) {
        console.error('Error fetching contents:', error); // Log any errors encountered during the fetch
        throw error; // Rethrow the error for further handling upstream
    }
}
