const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(port);
app.use(bodyParser.urlencoded({extended: false}));
const users = [];

app.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'root'
    });
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'users',
        users: users
    });
});

app.post('/add-users', (req, res, next) => {
    res.redirect('/users')
    users.push({name: req.body.username});
    console.log(JSON.stringify(users));
});
