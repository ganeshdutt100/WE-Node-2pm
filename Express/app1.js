const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users/:id/:name", (req, res) => {
  const { id, name } = req.params;

  res.send(`User ID : ${id} , name ${name}`);
});
app.get("/sum/:a/:b", (req, res) => {
  // const { a, b } = req.params;
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  let sum = a + b;

  res.send(`Sum : ${sum}`);
});
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
// params :
// id , name

// Question
// Create a route /sum/:a/:b that adds two numbers and displays their sum.
// Example: /sum/10/20
// Expected Output: Sum: 30
