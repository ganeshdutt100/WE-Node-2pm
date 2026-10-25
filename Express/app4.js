const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from node.js");
});
app.get("/courses", (req, res) => {
  const { category, difficulty } = req.query;

  res.send(
    `Searching for course in category ${category} with difficilty :  ${difficulty}`,
  );
});

app.post("/courses/:courseId/enroll", (req, res) => {
  const { courseId } = req.params;
  const { studentName, email } = req.body;

  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send("Error :Unauthorized Missing authorization token");
  }

  res.send(
    `student ${studentName} successfully enrolled in course ${courseId}`,
  );
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
