const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//database connection
mongoose.connect('mongodb://localhost/climbApi');

//server
const app = express();

//routes import

//middleware
app.use(bodyparser.json());

//routes

//catch errors

//error handler function

// start server
const port = app.get('port') || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));