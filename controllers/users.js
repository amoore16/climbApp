const User = require('../models/user');
const Climb = require('../models/climb');

const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    //get all users
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    //new user
    newUser: async (req, res, next) => {
        const newUser = new User(req.value.body);
        const hashPwd = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashPwd;
        const user = await newUser.save();
        res.status(201).json(user);
    },

    comparePassword: async (req, res, next) => {
        const { password }  = req.body;
        const { userName } = req.body;
        const query = { userName: userName };
        const user = await User.findOne(query);
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            console.log('success')
            res.status(200).json({ success: true });
        } else {
            console.log('invalid password');
            res.status(400).json({ success: false, reason: 'invalid password'});
        }
        //using the authenticate route ie: user/authenticate...could make new route..
        // bcrypt.compare 
    }, 

    getUser: async (req, res, next) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate( userId, newUser );
        res.status(200).json({ success: true });
    },

    updateUser: async (req, res, next) => {
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate( userId, newUser);
        res.status(200).json({ success: true});
    },

    getUserClimbs: async (req, res, next) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId).populate('climbs');
        res.status(200).json(user.climbs);
    },

    newUserClimb: async (req, res, next) => {
        const { userId } = req.value.params;
        const newClimb = new Climb(req.value.body);
        const user = await User.findById(userId);
        newClimb.user = user
        await newClimb.save();
        user.climbs.push(newClimb);
        res.status(201).json(newClimb);
    }


}