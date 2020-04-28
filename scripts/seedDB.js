const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the following users

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/chefMe_DB"
);

const userSeed = [
  {
      firstName: "Parth",
      lastName: "Patel",
      userName: "ChefParth",
      email: "parth@email.com",
      password: "123"

  },
  {
      firstName: "John",
      lastName: "Doe",
      userName: "ChefJohn",
      email: "john@email.com",
      password: "abc"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    userName: "ChefJane",
    email: "jane@email.com",
    password: "abcd"
}


];

const recipeSeed = [
    {
        recipeTitle: "Pasta Aglio Olio",
        ingredients: ["Dried Pasta", "Olive Oil", "Garlic", "Red Pepper Flakes"],
        instruction: "Boil Pasta in heavily salted water"
  
    },
    {
        recipeTitle: "Pasta with Tomato Sauce",
        ingredients: ["Dried Pasta", "Olive Oil", "Garlic", "Tomato Sauce"],
        instruction: "Boil Pasta in heavily salted water"
    }
  
  ];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });