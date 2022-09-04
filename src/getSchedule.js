const data = require('../data/zoo_data');

const { species, hours } = data;
const diasDaSemana = Object.keys(hours);

const horariosZoo = () => {
  const horarios = {};
  diasDaSemana.forEach((elemento) => {
    if (elemento !== 'Monday') {
      horarios[elemento] = {
        officeHour: `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`,
        exhibition: species.filter((element) => element.availability.includes(elemento))
          .map((el) => el.name),
      };
    } else {
      horarios[elemento] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return horarios;
};

function getSchedule(scheduleTarget) {
  const dia = horariosZoo();
  if (species.some((elemento) => scheduleTarget === elemento.name)) {
    return species.find((el) => el.name === scheduleTarget).availability;
  }
  if (diasDaSemana.includes(scheduleTarget)) {
    return { [scheduleTarget]: dia[scheduleTarget] };
  }
  if (scheduleTarget === undefined || scheduleTarget !== diasDaSemana) {
    return dia;
  }
}

module.exports = getSchedule;
