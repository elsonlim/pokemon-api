require("dotenv").config();
const express = require("express");
require("./utils/db");
const app = express();

const pokemonRoute = require("./routes/pokemon.route");

app.use("/pokemon", pokemonRoute);

app.get("/health", (req, res) => {
  res.json({
    status: "up",
  });
});

module.exports = app;
