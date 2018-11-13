const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const logger = require('morgan');

//database connection
mongoose.connect('mongodb://localhost/climbApi');

//server
const app = express();

//routes import
const users = require('./routes/users');
// const climbs = require('./routes/climbs');

//middleware
app.use(logger('dev'));
app.use(bodyparser.json());

//routes
app.use('/users', users);
// app.use('/climbs', climbs);

//catch errors
app.use((err, res, next) => {
    const error = app.get('env') === 'development' ? err: {};
    const status = err.status || 500;

    res.status(status).json({
        error: {
            message: error.message
        }
    });

    console.log(err);
});
//error handler function

// start server
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));