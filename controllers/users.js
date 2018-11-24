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