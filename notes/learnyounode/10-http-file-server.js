import http from "http";
import fs from "fs";

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
  // Returns a stream object
  const stream = fs.createReadStream(file, "utf8");
  stream.on("error", (err) => {
    res.writeHead(500);
    res.end("Error reading file");
  });
  res.writeHead(200, { "Content-Type": "text/plain" });
  stream.pipe(res); // Connect a filesystem stream with an HTTP response stream

  // fs.readFile(file, "utf8", (err, data) => {
  //   if (err) {
  //     res.writeHead(500);
  //     res.end("Error reading file");
  //     return;
  //   }
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end(data);
  // });
});

server.listen(port, () => {
  console.log("Server bound");
});
