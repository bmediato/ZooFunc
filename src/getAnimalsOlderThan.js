const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((elemento) => elemento.name === animal)
    .residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
