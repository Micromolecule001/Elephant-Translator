// testController.js

const testData = {
    id: 1,
    name: 'Pedro'
};

exports.getTestData = (req, res) => {
    console.log('Received GET request for testData');
    res.render('testView', { 
        testData: testData,
    });
};

exports.updateTestData = (req, res) => {
    console.log('Received PUT request for updating testData');
    console.log('Request Body:', req.body);
    console.log('testData before update:', testData);

    let newId = Number(req.body.new__id);
    let newName = String(req.body.new__name);

    testData.id = newId;
    testData.name = newName;

    console.log('testData after update:', testData);

    res.render('testView', {
        testData: testData,
    });
};

exports.deleteTestData = (req, res) => {
    console.log('Received DELETE request for testData');
    console.log('Request Body:', req.body);
    console.log('testData before delete:', testData);
    res.render('testView', { 
        testData: testData,
    });
    console.log('testData after delete:', testData);
};
