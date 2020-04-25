const router = require("express").Router();
const recipeController = require("../controllers/recipeController");

router.route("/api/recipes").get(recipeController.findAll);
router.route("/api/createRecipe").post(recipeController.createRecipe);

module.exports = router;
