require("dotenv").config({ path: "./config/.env" });

const { PORT, API_URL } = process.env;

// const bodyParser = require("./framework/parseBody"); // fix
const jsonParser = require("./framework/parseJson");
const urlParse = require("./framework/parseUrl");

const router = require("./app/router");

const App = require("./framework");

const app = new App();

app.use(jsonParser);
app.use(urlParse(API_URL));
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
