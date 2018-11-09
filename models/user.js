const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = newSchema({
    firstName: String,
    lastName: String,
    email: String,
    climbs: [{
        type: Schema.Types.ObjectId,
        ref: 'climb'
    }]
});

const User = mongoose.model('user', userSchema);
module.exports = User;