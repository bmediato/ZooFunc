const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (animal === undefined) {
    return species.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;
      return acc;
    }, {});
  }
  if (animal.specie && animal.sex) {
    return species.find((elemento) => elemento.name === animal.specie)
      .residents.filter((param) => param.sex === animal.sex).length;
  }
  if (animal.specie) {
    return species.find((elemento) => elemento.name === animal.specie).residents.length;
  }
}
module.exports = countAnimals;
