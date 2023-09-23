module.exports = (req, res) => {
	let body = "";

	req.on("data", (chunk) => {
		body += chunk;
	});

	if (body) {
		req.body = body;
	}
};
