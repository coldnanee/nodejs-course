const fs = require("fs");
const path = require("path");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => console.log(err)); - create dir
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => console.log(err)); - remove dir
// fs.writeFile(path.resolve(__dirname, "index.txt"), "random text!!", (err) =>
// 	console.log(err)
// ); - create file with data

// fs.appendFile(path.resolve(__dirname, "index.txt"), " add after text", (err) =>
// 	console.log(err)
// ); - add text to file

// fs.mkdir(
// 	path.resolve(__dirname, "test"),
// 	(err) => {
// 		console.log(err);
// 	},
// 	fs.writeFile(
// 		path.resolve(__dirname, "test", "index.txt"),
// 		"test text",
// 		(err) => {
// 			console.log(err);
// 			return;
// 		}
// 	)
// ); // create directory test and put into it file index.txt with text: test text

const makeDirAsync = (path) => {
	return new Promise((resolve, reject) => {
		fs.mkdir(path, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
};

const appendFileAsync = (path, data) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(path, data, (err) => {
			if (err) {
				reject(err.message);
			}

			resolve();
		});
	});
};

const writeFileAsync = (path, data) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(path, data, (err) => {
			if (err) {
				reject(err.message);
			}
			resolve();
		});
	});
};

makeDirAsync(path.resolve(__dirname, "test"))
	.then(() =>
		writeFileAsync(
			path.resolve(__dirname, "test", "test.txt"),
			"some random text"
		)
	)
	.then(() =>
		appendFileAsync(path.resolve(__dirname, "test", "test.txt"), "123")
	)
	.then(() =>
		appendFileAsync(path.resolve(__dirname, "test", "test.txt"), "456")
	)
	.then(() =>
		appendFileAsync(path.resolve(__dirname, "test", "test.txt"), "789")
	)
	.catch((e) => console.log(e));
