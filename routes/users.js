const express = require('express');
const router = require('express-promise-router')();
const UsersController = require('../controllers/users');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');


router.route('/')
    .get(UsersController.index)
    .post(validateBody(schemas.userSchema), UsersController.newUser);

router.route('/:userId')
    .get(validateParam(schemas.idSchema, 'userId'), UsersController.getUser)
    .put([validateParam(schemas.idSchema, 'userId'),
        validateBody(schemas.userSchema)],
        UsersController.replaceUser)
    .patch([validateParam(schemas.idSchema, 'userId'),
        validateBody(schemas.userOptionalSchema)],
        UsersController.updateUser);
router.route('/:userId/climbs')
    .get(validateParam(schemas.idSchema, 'userId'), UsersController.getUserClimbs)
    .post([validateParam(schemas.idSchema, 'userId'),
        validateBody(schemas.userClimbSchema)],
        UsersController.newUserClimb);


module.exports = router;