// Import Express and utility modules
import express from "express";
import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

// Create an Express router object to define routes
const router = express.Router();

// Route to handle POST requests for creating a new recipe
router.post("/recipes", createRecipe);

// Route to handle GET requests for retrieving all recipes
router.get("/recipes", getRecipes);

// Route to handle GET requests for retrieving a single recipe by its ID
router.get("/recipes/:id", getRecipeById);

// Route to handle PUT requests for updating a recipe by its ID
router.put("/recipes/:id", updateRecipe);

// Route to handle DELETE requests for removing a recipe by its ID
router.delete("/recipes/:id", deleteRecipe);

// Export the router so it can be imported and used elsewhere in the application
export default router;
