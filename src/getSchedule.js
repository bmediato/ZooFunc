const data = require('../data/zoo_data');
const { species, hours } = data;
const diasDaSemana = Object.keys(hours);
console.log(diasDaSemana);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return horariosZoo();
  }
}

const horariosZoo = () => {
  let horarios = {};
  diasDaSemana.forEach((elemento) => {
    if (elemento !== 'Monday') {
      horarios.elemento = {
        officeHour: `Aberto de: ${hours[elemento].open}-AM até ${hours[elemento].close}-PM`,
        exhibition: species.filter((element) => element.availability.includes(elemento)).map((el) => el.name)
      }
    }
    else {
      horarios.elemento = {
        officeHour: `FECHADO`,
        exhibition: `O zoologico está fechado.`
      }
    }
    return horarios;
  })
  console.log(horarios);
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
