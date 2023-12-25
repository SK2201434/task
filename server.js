// server.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const filterRoutes = require('./routes/filterRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/departments', departmentRoutes);
app.use('/employees', employeeRoutes);
app.use('/filters', filterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
