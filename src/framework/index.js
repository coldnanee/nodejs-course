const { EventEmitter } = require("events");
const http = require("http");

class App {
	constructor() {
		this.emitter = new EventEmitter();
		this.server = http.createServer();
	}

	addRouter(endpoints) {
		Object.keys(endpoints).forEach((pathItem) => {
			const path = endpoints[pathItem];

			Object.keys(path).forEach((method) => {
				this.emitter.on(this._getRouteMask(pathItem, method), (req, res) => {
					const handler = path[method];
					handler(req, res);
				});
			});
		});
	}

	_getRouteMask(path, method) {
		return `${path}:${method}`;
	}

	listen(port) {
		this.server.listen(port, () =>
			console.log(`Api is starting on port ${port}`)
		);
	}
}

module.exports = new App();
