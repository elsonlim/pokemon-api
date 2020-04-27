require("dotenv").config();
const express = require("express");
require("./utils/db");
const cors = require("cors");
const app = express();

const pokemonRoute = require("./routes/pokemon.route");

app.use(cors());
app.use(express.json());

app.use("/pokemons", pokemonRoute);

app.get("/health", (req, res) => {
  res.json({
    status: "up",
  });
});

module.exports = app;
