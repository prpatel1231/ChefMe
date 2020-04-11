const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//define userSchema will house user login data and any created recipes
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
