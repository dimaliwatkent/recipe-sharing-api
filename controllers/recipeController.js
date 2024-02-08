// Import the Recipe model from the models directory
import Recipe from "../models/recipeModel.js";

// Function to retrieve all recipes from the database (Mongodb)
export const getRecipes = async (req, res) => {
  try {
    // Find all documents in the Recipe collection
    const recipes = await Recipe.find({});
    // Send the retrieved recipes as a JSON response
    res.json(recipes);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).send("An error occurred while retrieving recipes.");
  }
};

// Function to retrieve a single recipe by its ID
export const getRecipeById = async (req, res) => {
  try {
    // Find a recipe in the Recipe collection by its ID
    const recipe = await Recipe.findById(req.params.id);
    // Check if the recipe exists, send  404 status if not
    if (!recipe) {
      return res.status(404).send("Recipe not found.");
    }
    // Send the retrieved recipe as a JSON response
    res.json(recipe);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).send("An error occurred while retrieving the recipe.");
  }
};

// Function to create a new recipe in the database
export const createRecipe = async (req, res) => {
  try {
    // Create a new instance of the Recipe model with the request body
    const newRecipe = new Recipe(req.body);
    // Save the new recipe to the database
    const savedRecipe = await newRecipe.save();
    // Send the saved recipe as a JSON response with a  201 Created status
    res.status(201).json(savedRecipe);
  } catch (error) {
    // Handle any errors that occur during the save process
    res.status(500).send("An error occurred while saving the recipe.");
  }
};

// Function to update an existing recipe in the database
export const updateRecipe = async (req, res) => {
  try {
    // Update the recipe in the Recipe collection by its ID and the new data from the request body
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, // Return the updated recipe
    );
    // Check if the recipe was found, send  404 status if not
    if (!updatedRecipe) {
      return res.status(404).send("Recipe not found.");
    }
    // Send the updated recipe as a JSON response
    res.json(updatedRecipe);
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).send("An error occurred while updating the recipe.");
  }
};

// Function to delete a recipe from the database
export const deleteRecipe = async (req, res) => {
  try {
    // Delete the recipe from the Recipe collection by its ID
    const result = await Recipe.findByIdAndDelete(req.params.id);
    // Check if the recipe was found, send  404 status if not
    if (!result) {
      return res.status(404).send("Recipe not found.");
    }
    // Send a success message indicating the deletion
    res.json("Recipe deleted successfully.");
  } catch (error) {
    // Handle any errors that occur during the delete process
    res.status(500).send("An error occurred while deleting the recipe.");
  }
};
