const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from node.js");
});
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const category = req.query.category;
  const limit = req.query.limit;

  res.send(
    `Searching for ${keyword} in ${category} , showing ${limit} results`,
  );
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
