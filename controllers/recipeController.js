const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Recipe
            .find({})
            // .populate("users")
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    findRecipe: function(req, res) {
        db.Recipe
            .findOne({chef: req.params})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },
    createRecipe: function(req, res) {
        console.log(req.body)
        db.Recipe
            .create({
                    recipeTitle: req.body.recipeTitle,
                    ingredients: req.body.ingredients,
                    instructions: req.body.instructions
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },
    deleteRecipe: function(req, res) {
        console.log(req.params.id)
        db.Recipe
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    }
}
