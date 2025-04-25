// import { createServer } from "node:http";
//
// const hostname = "127.0.0.1";
// const port = 3000;
//
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World"); // send the response & close the connection
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//

// -----------------------------------------------------------------------------

import { Pool } from "undici";

const ollamaPool = new Pool("http://localhost:11434", {
  connections: 10,
});

/**
 * Stream the completion of a prompt using the Ollama API.
 * @param {string} prompt - The prompt to complete.
 * @link https://github.com/ollama/ollama/blob/main/docs/api.md
 **/
async function streamOllamaCompletion(prompt) {
  const { statusCode, body } = await ollamaPool.request({
    path: "/api/generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, model: "mistral" }),
  });

  // You can read about HTTP status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  // 200 means the request was successful.
  if (statusCode !== 200) {
    throw new Error(`Ollama request failed with status ${statusCode}`);
  }

  let partial = "";

  const decoder = new TextDecoder();
  for await (const chunk of body) {
    partial += decoder.decode(chunk, { stream: true });
    console.log(partial);
  }

  console.log("Streaming complete.");
}

try {
  await streamOllamaCompletion("What is recursion?");
} catch (error) {
  console.error("Error calling Ollama:", error);
} finally {
  console.log("Closing Ollama pool.");
  ollamaPool.close();
}
