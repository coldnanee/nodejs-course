const Router = require("../framework/router");

const router = new Router();

const users = [{ id: 1, name: "paul" }];

router.get("/users", (req, res) => {
	res.send(users);
});

router.post("/users", (req, res) => {
	console.log(req.body);
});

module.exports = router;
