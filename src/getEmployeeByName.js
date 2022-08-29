const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
 if(typeof employeeName === undefined) {
  return {};
 }
 return data.employees.find((elemento) => {
  return elemento.firstName === employeeName || elemento.lastName === employeeName; 
 })
}

module.exports = getEmployeeByName;
