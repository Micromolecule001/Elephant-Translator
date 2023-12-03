// app.js 

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userController = require('./controllers/userController');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin:Admin@elephantdb.nkfqtsf.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // для обработки данных из HTML-формы
app.use(express.json()); // для обработки данных JSON
app.use(express.static('public'));


// REGISTRATION

app.get('/registration', (req, res) => {
  // Logic to render the registration form
  res.render('registrationView');
});

app.post('/registration', userController.addNewUser);


// LOGIN 

app.get('/login', (req, res) => {

  // Logic to render the registration form
  res.render('loginView', {

  });
});

app.post('/login', userController.loginUser);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
