const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, elemento) => {
    if (elemento.age < 18) {
      countChild += 1
      acc.child = countChild
      return acc;
    }
    if (elemento.age >= 18 && elemento.age < 50) {
      countAdult += 1;
      acc.adult = countAdult;
      return acc;
    }
    if (elemento.age > 50) {
      countSenior += 1
      acc.senior = countSenior;
      return acc;
    }
    acc.adult = countAdult;
    acc.senior = countSenior;
  }, {})
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
