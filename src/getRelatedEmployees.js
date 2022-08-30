const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elemento) => {
    const { managers } = elemento;
    return managers.includes(id);
  });
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.filter((elemento) => {
    return elemento.managers.includes(managerId);
  }).map((element) => {
    return `${element.firstName} ${element.lastName}`;
  });
}

module.exports = { isManager, getRelatedEmployees };
