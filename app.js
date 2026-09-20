const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("<h1>I am Home page </h1> ");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("<h1>I am About page </h1> ");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("<h1>I am Contact page </h1> ");
  }
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
