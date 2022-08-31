const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, elemento) => {
    if (elemento.age < 18) {
      acc.child += 1;
      // console.log(acc.child);
      return acc;
    }
    if (elemento.age >= 18 && elemento.age < 50) {
      acc.adult += 1;
      // console.log(acc.adult)
      return acc;
    }

    acc.senior += 1;
    // console.log(acc.senior);
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  const { prices } = data;
  const { adult, senior, child } = prices;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let ingresso = 0;
  ingresso += child * countEntrants(entrants).child
    + adult * countEntrants(entrants).adult + senior * countEntrants(entrants).senior;
  return ingresso;
}
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
