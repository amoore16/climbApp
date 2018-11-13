const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
    password: String,
    climbs: [{
        type: Schema.Types.ObjectId,
        ref: 'climb'
    }]
});

const User = mongoose.model('user', userSchema);
module.exports = User;