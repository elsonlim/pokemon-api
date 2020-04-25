const pokemons = require("../data/pokemon");

module.exports = {
  async up(db, client) {
    return db.collection("pokemons").insertMany(pokemons);
  },

  async down(db, client) {
    return db.collection("pokemons").drop();
  },
};
