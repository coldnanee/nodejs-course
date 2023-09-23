const fs = require("fs");
const path = require("path");

// fs.readFile(
// 	path.resolve(__dirname, "test_file_stream.txt"),
// 	{ encoding: "utf-8" },
// 	(err, data) => {
// 		console.log(data);
// 	}
// );

// const stream = fs.createReadStream(
// 	path.resolve(__dirname, "test_file_stream.txt"),
// 	{ encoding: "utf-8" }
// );

// stream.on("data", (chunk) => console.log(chunk)); // default: 64kb
// stream.on("close", () => console.log("close")); // event close stream

// const stream = fs.createWriteStream(path.resolve(__dirname, "test2.txt"), {
// 	encoding: "utf-8"
// });

// stream.on("error", (err) => {
// 	console.log(err);
// });

// for (let i = 0; i < 40; i++) {
// 	stream.write(`${i}\n`);
// }

// stream.end(); // all this methods kill stream
// stream.close(); //
// stream.destroy(); //

// stream.on("close", () => {
// 	console.log("stream was closed");
// });

// const http = require("http");

// http.createServer((req, res) => {
// 	// req -readable stream
// 	// res - writable stream
// 	const stream = fs.createReadStream(path.resolve(__dirname, "test2.txt"));

// 	stream.pipe(res);  // readable don't continue while writeable don't finish write part file
// });
