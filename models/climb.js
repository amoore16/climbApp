const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const climbSchema  = new Schema({
    name: String,
    type: String, //sport tr trad bolder 
    rating: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

const Climb = mongoose.model('climb', climbSchema);
module.exports = Climb;