// employeeRoutes.js

const express = require('express');
const employeeController = require('../controllers/employeeController');
const { isManager } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', isManager, (req, res) => {
  const employeeData = req.body;
  const newEmployee = employeeController.createEmployee(employeeData);
  res.json(newEmployee);
});

router.get('/', (req, res) => {
  const allEmployees = employeeController.getEmployees();
  res.json(allEmployees);
});

router.put('/:id', isManager, (req, res) => {
  const { id } = req.params;
  const employeeData = req.body;
  const updatedEmployee = employeeController.updateEmployee(id, employeeData);

  if (updatedEmployee) {
    res.json(updatedEmployee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

router.delete('/:id', isManager, (req, res) => {
  const { id } = req.params;
  employeeController.deleteEmployee(id);
  res.json({ message: 'Employee deleted successfully' });
});

module.exports = router;
