const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/api/signup").post(userController.createUser);
router.route("/api/").post(userController.findUser);

module.exports = router;
