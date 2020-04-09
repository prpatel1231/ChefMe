const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true},
  password: {type: String, required: true},
  date: { type: Date, default: Date.now },
  recipes: {
      recipeTitle: {type: String},
      chef: this.email,
      ingredients: [], 
      instructions: {type: String},
      public: {type: Boolean, default: true}
  }
});

const User = mongoose.model("User", bookSchema);

module.exports = User;
