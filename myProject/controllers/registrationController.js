// registrationController.js

const User = require('../models/userModel');

exports.addNewUser = (req, res) => {
    console.log('Received PUT request for adding new User');
    console.log('Request Body:', req.body);

    let login = String(req.body.new__login);
    let email = String(req.body.new__email);
    let password = String(req.body.new__password);

    let newUser = new User(login, email, password); // Create a new instance

    newUser.addUser(newUser); // Add the new user using the instance method

    console.log('New user:', newUser);
    newUser.getList(); // Get the updated list using the instance method

    res.render('registrationView', {}); // Render the view
};


exports.getUserById = (req, res) => {

    // dlya admin 

    res.render('registrationView', {
        
    });
};