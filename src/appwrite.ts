import { Client, ID, Query, Databases } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm: string, movie: any) => {
  console.log("updateSearchCount called with:", { searchTerm, movie });
  // TODO: Define a more specific type for the 'movie' parameter
  // 1. Use appwrite SDK to check if a document with the search term already exists in the database
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("search_term", searchTerm),
    ]);
    // 2. If it does, increment the count by 1
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      // increment the count by 1 if it does
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
      // 3. If it doesn't, create a new document with the search term and the movie ID
    } else {
      const documentData = {
        search_term: searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      };
      await database.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        documentData
      );
    }
  } catch (error) {
    console.error(error);
  }
};
