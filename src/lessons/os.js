const os = require("os");
// console.log(os.platform()); // get name our os : alternative for process.platform
// console.log(os.arch()); // architecture our processor
// console.log(os.cpus().length); // get processor count of cores

const cluster = require("cluster");

const cpus = os.cpus();

for (let i = 0; i < cpus.length - 2; i++) {
	const CPUcore = cpus[i];
}
