// filterRoutes.js

const express = require('express');
const filterController = require('../controllers/filterController');

const router = express.Router();

router.get('/location', (req, res) => {
  const { location } = req.query;
  const filteredEmployees = filterController.filterByLocation(location);
  res.json(filteredEmployees);
});

router.get('/name', (req, res) => {
  const { order } = req.query;
  const filteredEmployees = filterController.filterByName(order);
  res.json(filteredEmployees);
});

module.exports = router;
