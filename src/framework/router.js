class Router {
	constructor() {
		this.endpoints = {};
	}

	_request(path, method, handler) {
		if (!this.endpoints[path]) {
			this.endpoints[path] = {};
		}

		const endpoint = this.endpoints[path];

		if (endpoint[method]) {
			throw new Error("Method on this path is busy");
		}

		endpoint[method] = handler;
	}

	get(path, handler) {
		this._request(path, "GET", handler);
	}
	post(path, handler) {
		this._request(path, "POST", handler);
	}
	put(path, handler) {
		this._request(path, "PUT", handler);
	}
	delete(path, handler) {
		this._request(path, "DELETE", handler);
	}
}

module.exports = Router;
