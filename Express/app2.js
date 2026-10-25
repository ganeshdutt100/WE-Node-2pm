const express = require("express");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  const { username, email } = req.body;
  res.send(`user ${username} received with email ${email} `);
});

app.get("/", (req, res) => {
  res.send("Hello from node.js");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
