const express = require("express");
const PokemolModel = require("../models/pokemon.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const pokemons = await PokemolModel.find({});

  res.json(pokemons);
});

module.exports = router;
