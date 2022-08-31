const data = require('../data/zoo_data');
const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  // console.log(animal);
  const animalVelho = species.find((elemento) => elemento.id === animal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalVelho);
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;