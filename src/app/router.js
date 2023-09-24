const Router = require("../framework/router");

const userController = require("./user-controller");

const router = new Router();

router.get("/users", userController.getUsers);

router.post("/users", userController.addUser);

module.exports = router;
