// require("dotenv").config({ path: "./config/.env" });
// require("./lessons/process");
// require("./lessons/path");
// require("./lessons/url");
// require("./lessons/file-system");
// require("./lessons/file-system-work");
// require("./lessons/os");
// require("./lessons/events");
// require("./lessons/streams");

const PORT = process.env.PORT || 4000;

const router = require("./framework/router");

const app = require("./framework");

app.listen(PORT);
