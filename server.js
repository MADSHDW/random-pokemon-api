const express = require("express");
const { list } = require("./list");
const app = express();

app.get("/", (req, res) => {
  const random = list[Math.floor(Math.random() * list.length)];
  res.send(random);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));