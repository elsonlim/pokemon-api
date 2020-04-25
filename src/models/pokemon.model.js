const mongoose = require("mongoose");

var pokemonSchema = new mongoose.Schema({
  id: Number,
  imageUrl: String,
  name: {
    english: String,
    japanese: String,
    chinese: String,
  },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defence: Number,
    SpAttack: Number,
    SpDefence: Number,
    Speed: Number,
  },
});

module.exports = mongoose.model("pokemon", pokemonSchema);
