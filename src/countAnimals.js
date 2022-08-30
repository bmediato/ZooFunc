const data = require('../data/zoo_data');

function countAnimals(animal) {
  const {species} = data;
  if(animal === undefined) {
    return species.reduce((acc, elemento) => {
     acc[elemento.name] = elemento.residents.length;
     return acc;
    }, {})
  }
  if(animal.specie) {
    return species.find((elemento), () => {
      return elemento.residents.length;
    })
  }
  if(animal.specie && animal.sex) {
    return species.find((elemento), () => {
      if(animal.sex === 'female') {
        return 
      }
    })
  }
}

module.exports = countAnimals;
