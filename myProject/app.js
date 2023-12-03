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

app.post('/home', userController.loginUser);

// HOME

app.get('/home', (req, res) => {

  // Logic to render the registration form
  res.render('homeView', {
    translation: 'there will be your translation'
  });
});


app.post('/home', userController.addNewUser);


// User cabinet

app.get('/user=:userId', (req, res) => {
  const userId = req.params.userId;
  res.render('userView', {
    userId: userId,
  });
});

// Update data

app.post('/updateData', userController.updateUserData);

app.get('/updateData', (req, res) => {
  const userId = req.query.userId;
  
  res.render('updateUserView', { 
    userId: userId, 
  }); 
});

// GET запрос для страницы истории переводов
app.get('/translationHistory', (req, res) => {
  const userId = req.query.userId;
  
  res.render('historyView', { 
    userId: userId 
  });
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
