const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const logger = require('morgan');
const config = require('./config/database.js');
const passport = require('passport');
const cors = require('cors');

//database connection


mongoose.connect(config.database);

//server
const app = express();

//routes import
const users = require('./routes/users');
const climbs = require('./routes/climbs');

app.use(cors());
//middleware
app.use(logger('dev'));
app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


//routes
app.use('/users', users);
app.use('/climbs', climbs);

//catch errors
// app.use((err, res, next) => {
//     const error = app.get('env') === 'development' ? err: {};
//     const status = err.status || 500;

//     res.status(status).json({
//         error: {
//             message: error.message
//         }
//     });

//     console.log(err);
// });
//error handler function
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');   
});

// // every route goes to index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// start server
if (!process.env.PORT) { const env = require('./env.js'); }
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is listening on port ${port}`));