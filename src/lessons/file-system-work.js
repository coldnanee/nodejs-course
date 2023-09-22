// const fs = require("fs");
// const path = require("path");

const str = process.env.STRING_TO_FS || "";

// const removeFileAsync = (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.rm(path, (err) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve();
// 		});
// 	});
// };

// const writeFileAsync = (path, data) => {
// 	return new Promise((resolve, reject) => {
// 		fs.writeFile(path, data, (err) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve();
// 		});
// 	});
// };

// const readFileAsync = (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(data);
// 		});
// 	});
// };

// // prettier-ignore

// writeFileAsync(path.resolve(__dirname, "test", "test.txt"), str)
// 	.then(() => readFileAsync(path.resolve(__dirname, "test", "test.txt")))
//     .then((str) => writeFileAsync(path.resolve(__dirname, "test", "new_test.txt"), String(str.length)))
//     .then(() => removeFileAsync(path.resolve(__dirname, "test", "test.txt")))
// 	.then(() => console.log("all right"))
// 	.catch((err) => console.log(err));
