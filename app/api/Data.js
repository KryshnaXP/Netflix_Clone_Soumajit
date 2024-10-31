// config/database.js or within the server component itself
import clientPromise from '@/app/api/db/connectDB';

export async function fetchContents(Data) {
    try {
        const client = await clientPromise;
        const db = client.db("Netflix_Clone");
        const contentsCollection = db.collection(Data);
        const allContents = await contentsCollection.find({}).toArray();
        return allContents;
    } catch (error) {
        console.error('Error fetching contents:', error);
        throw error;
    }
}