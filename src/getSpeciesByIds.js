const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const id = ids.map((elemento) => {
    return elemento;
  })
  if(ids.length === 0) {
    return [];
  }
  return data.species.filter((elemento) => elemento.id === id)
}

module.exports = getSpeciesByIds;
