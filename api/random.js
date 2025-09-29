export default function handler(req, res) {
  // Full list of Pokémon (short example; you can paste your full list)
  const list = [
    "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
    "Squirtle","Wartortle","Blastoise"
    // ...add the rest from your Pastebin here
  ];

  // Pick a random Pokémon
  const random = list[Math.floor(Math.random() * list.length)];

  // Return plain text
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(random);
}