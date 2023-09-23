// const os = require("os");
// console.log(os.platform()); // get name our os : alternative for process.platform
// console.log(os.arch()); // architecture our processor
// console.log(os.cpus().length); // get processor count of cores

// const cluster = require("cluster");

// if (cluster.isPrimary) {
// 	for (let i = 0; i < os.cpus().length - 2; i++) {
// 		cluster.fork();
// 	}

// 	cluster.on("exit", (worker) => {
// 		console.log(`${worker.process.pid} is dead`);

// 	});
// } else {
// 	setTimeout(() => {
// 		console.log(`Process ${process.pid} work!`);
// 	}, 5000);
// }
