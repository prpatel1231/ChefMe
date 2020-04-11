const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Recipe
            .find({})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    findRecipe: function(req, res) {
        db.Recipe
            .findOne({chef: req.params.chef})
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },
    createRecipe: function(req, res) {
        db.Recipe
            .create({
                    recipeTitle: req.body.recipeTitle,
                    chef: req.body.chef,
                    ingredients: req.body.ingredients,
                    instructions: req.body.instructions,
                    public: req.body.public
            })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }
}
