const { createServer } = require("http");
const fs = require("fs");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from the home page");
  } else if (req.url === "/contact") {
    res.end("Hello from the contact page");
  } else if (req.url === "/userapi") {
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening on port 8000");
});
