const express = require('express');
const app = express();
const port = 3000;

//Default route for http://localhost:3000

app.get('/', (req, res) => {
    res.send(`Hello!\nPlease add "/addTwoNumbers?num1=X&num2=Y" with value of X and Y to the url to see their sum!`);
});

// Route for sum of num1 and num2 in url as a query
// addTwoNumbers?num1=X&num2=Y  

app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = {
        'data': num1 + num2,
        'message': 'success',
        'statusCode': '200'
    };
    res.json(result);
});

//Starting the server
app.listen(port, () => {
    console.log("App listening on port 3000\nhttp://localhost:3000")
})