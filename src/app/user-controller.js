const users = [
	{ id: "1", name: "paul" },
	{ id: "2", name: "sam" }
];

class UserController {
	getUsers(req, res) {
		try {
			const { id } = req.params;
			if (id) {
				return res.send(users.filter((user) => user.id === id));
			}
			res.send(users);
		} catch (e) {
			console.log(e);
		}
	}
	addUser(req, res) {
		try {
			const { name } = req.params;
			if (name) {
				const id = String(Object.keys(users).length + 1);
				users.push({ id, name });
				return res.send(users);
			}
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new UserController();
