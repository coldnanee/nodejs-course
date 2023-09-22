// const path = require("path");

// console.log(path.join("my_dir", "my_file")); - output: my_dir/my_file - we get our cross-platform path.
// console.log(__dirname); - get path to our active directory

// console.log(path.join(__dirname, "..", ".."));  - output: /coldnanee/Desktop/nodejs-course, .. - go to top level
// console.log(path.resolve("first", "second")); // - output /coldnanee/Desktop/nodejs-course/first/second - system path from first to last arg func resolve()
// const file = path.join(__dirname, "first", "last.html");
// console.log(path.parse(file)); // get obj info about file/path
// console.log(path.sep); // get path separator on OS
// console.log(path.basename(file)); // get file name
// console.log(path.extname(file)); // get file extname
