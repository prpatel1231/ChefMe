const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Recipe
            .find({})
            .populate("users")
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
        db.Recipe
            .create({
                    recipeTitle: req.body.recipeTitle,
                    chef: req.body.chef,
                    ingredients: req.body.ingredients,
                    instructions: req.body.instructions,
                    public: req.body.public
            })
            .then(({_id}) => db.User.findOneAndUpdate({}, {$push: {recipes: _id}}, {new: true}))
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }
}
