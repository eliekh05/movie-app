# Movie App

## Description

This is a movie application built with React, TypeScript, and other modern web technologies. It allows users to search for movies and view trending movies.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Appwrite
- lucide-react
- react-use

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/bilal-algorithms/movie-app.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd movie-app
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Create a `.env.local` file in the project root and add the following environment variables:

    ```
    VITE_TMDB_API_KEY=<your_tmdb_api_key>
    VITE_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
    VITE_APPWRITE_DATABASE_ID=<your_appwrite_database_id>
    VITE_APPWRITE_COLLECTION_ID=<your_appwrite_collection_id>
    ```

    Replace the placeholders with your actual API keys and Appwrite credentials.

2.  Run the development server:

    ```bash
    npm run dev
    ```

    This will start the application in development mode. Open your browser and navigate to the address provided by Vite (usually `http://localhost:3000`).

## Scripts

The following scripts are defined in the `package.json` file:

- `dev`: Starts the development server using Vite.
- `build`: Builds the production-ready application using TypeScript and Vite.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Starts a local server to preview the production build.

## Environment Variables

The following environment variables are used in the project:

- `VITE_TMDB_API_KEY`: The API key for the The Movie Database (TMDB) API.
- `VITE_APPWRITE_PROJECT_ID`: The ID of your Appwrite project.
- `VITE_APPWRITE_DATABASE_ID`: The ID of your Appwrite database.
- `VITE_APPWRITE_COLLECTION_ID`: The ID of your Appwrite collection.
