import http from "http";
import { URL } from "url"; // 💡

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method == "GET" && reqUrl.pathname == "/api/parsetime") {
    const iso = reqUrl.searchParams.get("iso"); // Get iso query param
    const date = new Date(iso); // Create iso string into date

    const result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    res.writeHead(200, { "Content-Type": "application/json" }); // Be a good web citizen and set the Content-Type properly
    res.end(JSON.stringify(result));
  }
});

server.listen(port, () => {
  console.log("Server Started!");
});

// curl http://localhost:8000
// iso 8601 / unix epoch
