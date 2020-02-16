const express = require('express');
const usersRouter = express.Router();
const bodyParser = require('body-parser');

usersRouter.use(bodyParser.urlencoded({ extended: false }));
usersRouter.use(bodyParser.json());

const arr = [];

usersRouter.get('/api/users', (req, res) => {
    res.status(200).json(arr);
})

usersRouter.post('/api/users', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
        gender: req.body.gender,
        agree: req.body.agree
    }
    arr.push(newUser);
    res.status(200);
    res.end();
});

module.exports = usersRouter;
