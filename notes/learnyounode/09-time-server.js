import net from "node:net";

const portNumber = process.argv[2];
const now = new Date(); // Object
// getDate() is not an index & returns the day of month
const pad = (n) => n.toString().padStart(2, "0");

const server = net.createServer((socket) => {
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  console.log(`client connected ${date}`);

  socket.on("data", (buffer) => {
    const text = buffer.toString("utf8").trim();
    console.log(`> client: ${text}`);
  });

  socket.on("end", () => {
    console.log("client disconnected");
  });

  server.on("error", (err) => {
    throw err;
  });
});

server.listen(portNumber, () => {
  console.log("server bound");
});
