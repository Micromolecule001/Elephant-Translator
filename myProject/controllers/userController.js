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
    await newUser.save();

    // If register is successful

    console.log(newUser);
    res.render('homeView', {
      message: 'Register successful',
      userId: newUser.id,
    });
  } catch (error) { 
    res.status(500).json({ error: 'Register failed', message: error.message })
  }
};



exports.loginUser = async (req, res) => {
    try {
      const { Login, Password } = req.body;
  
      // Find the user by login
      const user = await User.findOne({ Login });
      console.log(user)
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the passwords match (You should use a secure authentication method, e.g., hashing)
      if (Password !== user.Password) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      console.log('user id : ', user.id, 'loginning... success')
      // If login is successful
      res.render('homeView', {
        userId: user.id,
        message: 'Login successful', 
      });
    } catch (error) {
      res.status(500).json({ error: 'Login failed', message: error.message });
    }
}

    exports.updateUserData = async (req, res) => {
      try {
        const { login, newLogin, newPassword, newEmail } = req.body;
    
        // Находим пользователя по логину или айди в базе данных
        const user = await User.findOne({ $or: [{ login }, { _id: login }] });
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Обновляем данные пользователя, если они указаны в запросе
        if (newLogin) user.login = newLogin;
        if (newPassword) user.password = newPassword;
        if (newEmail) user.email = newEmail;
    
        // Сохраняем обновленные данные пользователя в базе данных
        await user.save();
    
        res.status(200).json({ message: 'User data updated successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to update user data', message: error.message });
      }
    };
