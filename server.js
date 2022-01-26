const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hi there</h1>");
});

PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
