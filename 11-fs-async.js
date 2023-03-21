const { readFile, writeFile } = require("fs");

// Callback Hell

console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/fourth.txt",
      "This is the new update",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with writing task');
      }
    );
  });
});

console.log('starting new task')