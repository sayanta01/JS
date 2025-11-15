// @noErrors
import http from "http";

const server = http.createServer((req, res) => {
  // @log
  console.log(`Request received. Scheduling 2-second 'work'...`);

  // This is NON-BLOCKING. it schedules the work and returns immediately
  setTimeout(() => {
    console.log("Work finished. Sending response.");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>Hello from non-blocking server!</p>");
  }, 2000);
});

server.listen(5001);
