// Importing dependencies
import express from "express";
import * as dotenv from "dotenv";
import recipeRoutes from "./routes/recipeRoutes.js";
import mongoose from "mongoose";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Set the port for the server to listen on. It defaults to port 3000 if PORT is not set in environment variables (.env), or being used by other server
const port = process.env.PORT || 3000;

// Connect to MongoDB using the connection string from environment variables (.env) file
mongoose.connect(process.env.DATABASE_URL);

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Mount the recipe routes under the "/api" path prefix
app.use("/api", recipeRoutes);

// Start the server and log the listening message
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
