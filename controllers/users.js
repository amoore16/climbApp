const User = require('../models/user');
const Climb = require('../models/climb');

// jwt here 
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = {
    //get all users
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    //new user
    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const hashPwd = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashPwd;
        const user = await newUser.save();
        res.status(201).json(user);
    },
    //compare password/authenticate
    comparePassword: async (req, res, next) => {
        const { password }  = req.body;
        const { userName } = req.body;
        const query = { userName: userName };
        const user = await User.findOne(query);
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = await jwt.sign({sub: user._id}, config.secret, {
                expiresIn: 604800
            });
            res.status(200).json({ 
                success: true,
                token: 'JWT' + token,
                user: {
                    id: user._id,
                    userName: user.userName
                }
            });
        } else {
            console.log('invalid password');
            res.status(400).json({ success: false, reason: 'invalid password'});
        }
    },

    authUser: async (req, res, next) => {
        console.log('res', res);        
        res.json({
            id: req.user._id,
            name: req.user.firstName + ' ' + req.user.lastName,
            userName: req.user.userName,
            email: req.user.email,
            climbs: req.user.climbs
        });
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