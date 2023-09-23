const PORT = process.env.PORT || 4000;

// const bodyParser = require("./framework/parseBody"); // fix
const jsonParser = require("./framework/parseJson");

const router = require("./app/router");

const App = require("./framework");

const app = new App();

app.use(jsonParser);
// app.use(bodyParser); // fix

app.addRouter(router);

const start = () => {
	try {
		app.listen(PORT, () => console.log(`Api is starting on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
