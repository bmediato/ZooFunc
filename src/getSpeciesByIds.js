const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {

  if (ids.length === 0) {
    return [];
  }
  return species.filter((elemento) => {
    if (ids.length === 1) {
      const id = ids.toString();
      return elemento.id === id;
    }
    return ids.forEach((element) => {
      return elemento.id === element;
    })
  })
}

module.exports = getSpeciesByIds;
