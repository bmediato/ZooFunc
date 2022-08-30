const data = require('../data/zoo_data');

function countAnimals(animal) {
  const {species} = data;
  if(animal === undefined) {
    return species.map((elemento) => {
      return `${elemento.name} ${elemento.residents.length}`
    })
  }
  return species.filter((elemento) => {
    return  
  })
}

module.exports = countAnimals;
