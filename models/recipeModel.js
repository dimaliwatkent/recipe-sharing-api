// Import Mongoose library
import mongoose from "mongoose";

// Define the Recipe schema with various fields and validation rules
const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String, // Title of the recipe
      required: true, // Title field is mandatory
      trim: true, // Remove whitespace from both ends of the title
      minlength: 3, // Minimum length of the title
      maxlength: 100, // Maximum length of the title
    },
    ingredients: [
      {
        type: String, // Ingredient entries are strings
        required: true, // Each ingredient entry is mandatory
        trim: true, // Remove whitespace from both ends of each ingredient
      },
    ],
    instructions: {
      type: String, // Instructions are stored as text
      required: true, // Instructions field is mandatory
      trim: true, // Remove whitespace from both ends of the instructions
    },
    tags: [
      {
        type: String, // Tags are represented as strings
        enum: ["Breakfast", "Lunch", "Dinner", "Dessert"], // Enumeration of allowed tag values
        default: [], // Default value is an empty array
      },
    ],
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
  },
);

// Export the Recipe model based on the defined schema
export default mongoose.model("Recipe", recipeSchema);
