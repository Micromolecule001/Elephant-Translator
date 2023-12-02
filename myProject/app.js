// app.js

const express = require('express');
const app = express();
const testController = require('./controllers/testController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // для обработки данных из HTML-формы
app.use(express.json()); // для обработки данных JSON

// Эндпоинт для получения тестовых данных
app.get('/test', testController.getTestData);

// Эндпоинт для обновления тестовых данных
app.post('/test', testController.updateTestData);

// Эндпоинт для удаления тестовых данных
app.delete('/test', testController.deleteTestData);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
