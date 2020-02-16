const express = require('express');
const cookieParser = require('cookie-parser');
const setCookie = require('./middleware/setCookie');
const bodyParser = require('body-parser');
const time = require('./api/time');
const usersList = require('./api/users');

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.set('view engine', 'pug')
app.set("views", "./views")

const PORT = process.env.PORT || 5000;

const users = [];

app.use(setCookie);

app.get('/', (req, res) => {
    res.render('index', {
        time: req.cookies.Time
    });
});

app.get('/myroute/:param', (req, res) => {
    res.render('myroute', {
        param: req.params.param,
        paramQuery: JSON.stringify(req.query),
        paramHeaders: JSON.stringify(req.headers),
        paramCookies: JSON.stringify(req.cookies)
    });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/form', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        agree: req.body.agree
    }

    users.push(newUser);
    console.log(users);
    res.redirect('/result');
});

app.get('/result', (req, res) => {
    res.render('result', { users: JSON.stringify(users) });
});

app.use(time);
app.use(usersList);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});