const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");

// routes
router.use("/", userRoutes);
router.use("/recipes", recipeRoutes);


module.exports = router;
