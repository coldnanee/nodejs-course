module.exports = (host) => (req, res) => {
	const url = new URL(req.url, host);

	const params = {};

	url.searchParams.forEach((value, key) => (params[key] = value));

	req.url = url.pathname;
	req.params = params;
};
