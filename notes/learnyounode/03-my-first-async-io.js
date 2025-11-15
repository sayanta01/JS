import fs from "fs";
const filePath = process.argv[1];

console
function doSomething(filePath) {
  setTimeout(() => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n");
      console.log(lines.length - 1);
    });
  }, 1000);
}

doSomething(filePath);

// Node.js is mainly written using non-blocking paradigms
// Blocking behavior is the exception rather than the norm in Node.js

// Sync = returns result 💡
// Async = expect callback (or promise)
// just use async await

// const data = "the data.\n";
// const path = process.argv[2];
//
// setTimeout(() => {
//   fs.appendFile("message.txt", data, "utf8", (err) => {
//     if (err) throw err;
//     console.log("Data appended to file!");
//   });
// }, 1000);
//
// fs.readFile(path, "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });