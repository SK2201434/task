// filterController.js

const db = require('../database');

function filterByLocation(location) {
  return db.employees.filter(emp => emp.location.toLowerCase().startsWith(location.toLowerCase()));
}

function filterByName(order) {
  const sortedEmployees = db.employees.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });
  return sortedEmployees;
}

module.exports = {
  filterByLocation,
  filterByName
};
