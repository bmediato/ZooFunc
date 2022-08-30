const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let count;
 return entrants.reduce((acc, curr) => {
  if(curr < 18) {
    count +=1;
  }
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
