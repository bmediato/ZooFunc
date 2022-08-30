const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
 return employees.some((ids) => {
    return id === ids.id;
  })
}

function getRelatedEmployees(managerId) {
  
}

module.exports = { isManager, getRelatedEmployees };
