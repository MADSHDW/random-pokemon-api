const list = require("./list");  // import the list from list.js

module.exports = (req, res) => {
  const random = list[Math.floor(Math.random() * list.length)];
  
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(random);
};