const userModel = require('../models/userModel');

const getAllUsers = (req, res) => {
  const users = userModel.getAllUsers();
  
  // Render ke tampilan users.ejs
  res.render('users', { users });
};

const getUserById = (req, res) => {
  const user = userModel.getUserById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getAllUsers, getUserById };