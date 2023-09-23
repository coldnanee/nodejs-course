const { EventEmitter } = require("events");
const http = require("http");

class App {
	constructor() {
		this.emitter = new EventEmitter();
		this.server = this._createServer();
		this.middlewares = [];
	}

	use(middleware) {
		this.middlewares.push(middleware);
	}

	addRouter(router) {
		const { endpoints } = router;

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

	_createServer() {
		return http.createServer((req, res) => {
			this.middlewares.forEach((middleware) => middleware(req, res));

			const emitted = this.emitter.emit(
				this._getRouteMask(req.url, req.method),
				req,
				res
			);

			if (!emitted) {
				return res.end("Not found!");
			}
		});
	}

	listen(port, cb) {
		this.server.listen(port, cb);
	}
}

module.exports = App;
