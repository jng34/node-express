const { readFileSync, writeFileSync, readFile } = require("fs");

// Read files
// Takes two arguments: pathname, utf8 default
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// Create new files from scratch
// Takes 3 arguments: content pathname, content (string), optional flag to append
writeFileSync("./content/third.txt", "This is the new update", { flag: "a" });

console.log('done with writing task')
console.log('starting a new task')