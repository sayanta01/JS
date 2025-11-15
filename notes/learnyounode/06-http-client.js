import http from "http";
const url = process.argv[2];

// Second argument is callback & res is emitter
const request = http.get(url, (res) => {
  res.setEncoding("utf8"); // Convert to Strings

  // Where the response object is a Node Stream object. You can treat Node Streams as objects that emit events
  // Listen to an event like so:
  res.on("data", (chunk) => {
    console.log(chunk);
  });
});

console.log(request);

// import http from "http";
//
// const server = http.createServer((req, res) => {
//   res.end("Hello!"); // Every writable stream must be “ended” to signal that no more data is coming
// });
//
// server.on("request", (req, res) => {
//   console.log("A request was made!");
// });
//
// server.listen(3000);