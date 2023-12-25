// database.js

const departments = [
    { id: 1, name: 'HR', manager: 'John Doe' },
    { id: 2, name: 'IT', manager: 'Jane Smith' },
    { id: 3, name: 'Marketing', manager: 'Mike Johnson' }
  ];
  
  const employees = [
    { id: 1, name: 'Alice Johnson', position: 'Software Engineer', location: 'New York' },
    { id: 2, name: 'Bob Miller', position: 'HR Specialist', location: 'Los Angeles' },
    { id: 3, name: 'Charlie Davis', position: 'Marketing Coordinator', location: 'Atlanta' }
  ];
  
  module.exports = {
    departments,
    employees
  };
  