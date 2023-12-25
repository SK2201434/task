// employeeController.js

const db = require('../database');

function createEmployee(employeeData) {
  const newEmployee = { id: db.employees.length + 1, ...employeeData };
  db.employees.push(newEmployee);
  return newEmployee;
}

function getEmployees() {
  return db.employees;
}

function updateEmployee(id, employeeData) {
  const index = db.employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    db.employees[index] = { id, ...employeeData };
    return db.employees[index];
  }
  return null;
}

function deleteEmployee(id) {
  db.employees = db.employees.filter(emp => emp.id !== id);
}

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
};
