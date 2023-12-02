// testController.js

const Test = require('../models/testModel'); // connect the model

exports.getTestData = (req, res) => {
    const testData = new Test(1, 'Sample Test Data');
    
    res.render('test/testView', { 
        testData: testData.id,
        async: true, // using async rendering 
    }); 

};