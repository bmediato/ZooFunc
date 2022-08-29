const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((elemento) => elemento.name === animal)
  return especie.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
