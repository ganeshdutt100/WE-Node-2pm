const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("i am about page ");
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
