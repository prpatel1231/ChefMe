const router = require("express").Router();
const recipeController = require("../controllers/recipeController");

router.route("/").get(recipeController.findAll);
router.route("/:id").delete(recipeController.deleteRecipe);
router.route("/api/createRecipe").post(recipeController.createRecipe);

module.exports = router;
