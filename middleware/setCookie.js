const moment = require('moment');

const setCookie = (req, res, next) => {
    let cookie = req.cookies.Time;
    console.log(req.cookies);
    if (cookie === undefined) {
        let date = moment().format('DD MM YYYY, h:mm:ss');
        res.cookie('Time', date, {
            maxAge: 900000,
            httpOnly: true
        });
        console.log('Cookie created successfully');
    } else {
        console.log('Cookie already exists', cookie);
    }

    next();
};

module.exports = setCookie;