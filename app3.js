const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   res.write("<h1>Hello from Node </h1>");

  //   res.end();
  //   process.exit();

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Home Page  </h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to About Page  </h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Contact Page  </h1>");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found 404 </h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

// npx nodemon fileName
