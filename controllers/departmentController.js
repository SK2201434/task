// departmentController.js

const db = require('../database');

function createDepartment(departmentData) {
  const newDepartment = { id: db.departments.length + 1, ...departmentData };
  db.departments.push(newDepartment);
  return newDepartment;
}

function getDepartments() {
  return db.departments;
}

function updateDepartment(id, departmentData) {
  const index = db.departments.findIndex(dep => dep.id === id);
  if (index !== -1) {
    db.departments[index] = { id, ...departmentData };
    return db.departments[index];
  }
  return null;
}

function deleteDepartment(id) {
  db.departments = db.departments.filter(dep => dep.id !== id);
}

module.exports = {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment
};
