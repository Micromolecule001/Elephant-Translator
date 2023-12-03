// userController.js

const User = require('../models/userModel');

exports.addNewUser = async (req, res) => {
  try {
    // Get data from the request body
    const { Login, Email, Password, Role, ResponseId } = req.body;

    // Create a new user instance
    const newUser = new User({
      Login,
      Email,
      Password,
      Role,
      ResponseId,
      // Add other fields as needed
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(200).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', message: error.message });
  }
};


exports.loginUser = async (req, res) => {
    try {
      const { Login, Password } = req.body;
  
      // Find the user by login
      const user = await User.findOne({ Login });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the passwords match (You should use a secure authentication method, e.g., hashing)
      if (Password !== user.Password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // If login is successful
      res.render('homeView', {
         message: 'Login successful', 
        });
    } catch (error) {
      res.status(500).json({ error: 'Login failed', message: error.message });
    }
};
