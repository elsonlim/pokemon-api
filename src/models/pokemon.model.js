const mongoose = require("mongoose");

var pokemonSchema = new mongoose.Schema({
  id: Number,
  imageUrl: String,
  name: String,
});

module.exports = mongoose.model("pokemon", pokemonSchema);
