// app.js

const express = require('express');
const app = express();
const testController = require('./controllers/testController');
const registrationController = require('./controllers/registrationController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // для обработки данных из HTML-формы
app.use(express.json()); // для обработки данных JSON

// TEST

// Эндпоинт для получения тестовых данных
app.get('/test', testController.getTestData);

// Эндпоинт для обновления тестовых данных
app.post('/test', testController.updateTestData);

// Эндпоинт для удаления тестовых данных
app.delete('/test', testController.deleteTestData);


// REGISTRATION

app.get('/registration', (req, res) => {
  // Logic to render the registration form
  res.render('registrationView');
});

app.post('/registration', registrationController.addNewUser);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
