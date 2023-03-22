// Async and await
const { log } = require("console");
const { readFile, writeFile } = require("fs").promises;
// const util = require('util');
// const readFile = util.promisify(readFile);
// const writeFilePromise = util.promisify(readFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/fourth.txt", `\nAwesome eh?`, { flag: "a" });
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
