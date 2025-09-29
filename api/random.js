const { list } = require("./list");

export default function handler(req, res) {
  // Pick a random Pokémon
  const random = list[Math.floor(Math.random() * list.length)];

  // Return plain text
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(random);
}