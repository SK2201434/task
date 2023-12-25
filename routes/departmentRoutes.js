// departmentRoutes.js

const express = require('express');
const departmentController = require('../controllers/departmentController');
const { isManager } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', isManager, (req, res) => {
  const departmentData = req.body;
  const newDepartment = departmentController.createDepartment(departmentData);
  res.json(newDepartment);
});

router.get('/', (req, res) => {
  const allDepartments = departmentController.getDepartments();
  res.json(allDepartments);
});

router.put('/:id', isManager, (req, res) => {
  const { id } = req.params;
  const departmentData = req.body;
  const updatedDepartment = departmentController.updateDepartment(id, departmentData);

  if (updatedDepartment) {
    res.json(updatedDepartment);
  } else {
    res.status(404).json({ error: 'Department not found' });
  }
});

router.delete('/:id', isManager, (req, res) => {
  const { id } = req.params;
  departmentController.deleteDepartment(id);
  res.json({ message: 'Department deleted successfully' });
});

module.exports = router;
