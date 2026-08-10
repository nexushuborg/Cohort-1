const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS so the React app can fetch data without errors
app.use(cors({
    origin: '*'
}));

// IMPORTANT: This allows us to read JSON data sent in POST and PUT requests!
app.use(express.json());

// In-memory "database" for our Superheroes
let heroes = [
  { id: 1, name: "Spider-Man", power: "Wall-crawling and spider-sense" },
  { id: 2, name: "Wonder Woman", power: "Super strength and Lasso of Truth" },
  { id: 3, name: "Iron Man", power: "Genius intellect and power suit" },
  { id: 4, name: "Flash", power: "Super speed" },
];

// A simple welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Kids API! Try going to /api/heroes");
});

// ==========================================
// 🦸‍♂️ SUPERHEROES API - ALL HTTP METHODS!
// ==========================================

// 1. GET - Read all heroes
app.get("/api/heroes", (req, res) => {
  console.log("GET request received! Sending all heroes.");
  res.json(heroes);
});

// 2. GET by ID - Read just one specific hero
app.get("/api/heroes/:id", (req, res) => {
  const heroId = parseInt(req.params.id);
  const hero = heroes.find((h) => h.id === heroId);

  if (hero) {
    res.json(hero);
  } else {
    res.status(404).json({ message: "Hero not found!" });
  }
});

// 3. POST - Create a new hero
app.post("/api/heroes", (req, res) => {
  console.log("POST request received! Adding a new hero:", req.body);

  const newHero = {
    id: heroes.length > 0 ? heroes[heroes.length - 1].id + 1 : 1, // Auto-generate an ID
    name: req.body.name || "Unknown Hero",
    power: req.body.power || "Unknown Power",
  };

  heroes.push(newHero);
  res.status(201).json({ message: "New hero added!", hero: newHero });
});

// 4. PUT - Update an existing hero completely
app.put("/api/heroes/:id", (req, res) => {
  const heroId = parseInt(req.params.id);
  console.log(`PUT request received! Updating hero with ID: ${heroId}`);

  const heroIndex = heroes.findIndex((h) => h.id === heroId);

  if (heroIndex !== -1) {
    heroes[heroIndex] = {
      id: heroId,
      name: req.body.name || heroes[heroIndex].name,
      power: req.body.power || heroes[heroIndex].power,
    };
    res.json({
      message: "Hero updated successfully!",
      hero: heroes[heroIndex],
    });
  } else {
    res.status(404).json({ message: "Hero not found! Cannot update." });
  }
});

// 5. DELETE - Remove a hero
app.delete("/api/heroes/:id", (req, res) => {
  const heroId = parseInt(req.params.id);
  console.log(`DELETE request received! Removing hero with ID: ${heroId}`);

  const initialLength = heroes.length;
  heroes = heroes.filter((h) => h.id !== heroId);

  if (heroes.length < initialLength) {
    res.json({ message: `Hero with ID ${heroId} was deleted!` });
  } else {
    res.status(404).json({ message: "Hero not found! Cannot delete." });
  }
});

// ==========================================

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(
    `You can now use GET, POST, PUT, and DELETE on http://localhost:${PORT}/api/heroes`,
  );
});