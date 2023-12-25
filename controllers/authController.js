// authController.js

const users = [
  { username: 'john_doe', password: 'password123', role: 'manager' },
  { username: 'jane_smith', password: 'password456', role: 'employee' }
];

function loginUser(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

function signupUser(username, password, role) {
  const newUser = { username, password, role };
  users.push(newUser);
  return newUser;
}

module.exports = {
  loginUser,
  signupUser
};
