import http from "http";
import map from "through2-map";

const port = process.argv[2];

const server = http.createServer((req, res) => {
  // using the streaming capabilities of the request and response objects
  if (req.method !== "POST") {
    return res.end("Send a POST request\n");
  }
  // transform stream data as it's passing through
  req
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      }),
    )
    .pipe(res);
});

server.listen(port, () => {
  console.log("Server bound");
});

// curl -X POST -d "hello node" http://localhost:8000
