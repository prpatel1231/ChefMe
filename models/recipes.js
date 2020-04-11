const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define userSchema will house user login data and any created recipes
const recipeSchema = new Schema({
    recipeTitle: {type: String, required: true},
    // this.email to self reference the userName of the recipe creator chef: johnDoe1
    chef: {type: String, required: true},
    // ingredients will be an array of strings, with each index containing 
    // an ingredient eg. "1/4 Cup of All Purpose Flour"
    ingredients: [{type: String}], 
    // instructions will be a large string for now, potentially look at an array of 
    // stings for which each index is a step in the recipe
    instructions: {type: String},
    // boolean to mark whether the recipe is visible by other users, will default to true
    public: {type: Boolean, default: true}
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
