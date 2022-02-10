const express = require('express');

const app = express();

app.get('/users', (req, res, next) => {
    console.log('Hello from users!');
    res.send('<h1>Hello from users!</h1>');
});

app.get('/', (req, res, next) => {
    console.log('Hello from home!');
    res.send('<h1>Hello from home!</h1>');
});

app.listen(3000);