const express = require('express');
const router = require('express-promise-router')();
const UsersController = require('../controllers/users');
const passport = require('passport');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');


router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser);

router.route('/:userId')
    // .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);

router.route('/:userId/climbs')
    .get(UsersController.getUserClimbs)
    .post(UsersController.newUserClimb);

router.route('/auth')
    .get(passport.authenticate('jwt', {session: false}), UsersController.authUser)
    .post(UsersController.comparePassword);

// router.route('/profile')
//     .get();
module.exports = router;